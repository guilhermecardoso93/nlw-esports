import { Check, GameController } from "phosphor-react";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Input } from "./Form";
import { GameProps } from "../App";

export function CreateAdModal() {
  const [games, setGames] = useState<GameProps[] | undefined>();

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-2xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o Game ?
            </label>
            <select
              id="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            >
              <option selected disabled value="">
                Selecione o Game que deseja jogar
              </option>
              {games?.map((game) => {
                return (
                  <option key={game.id} value={game.title}>
                    {game.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Qual seu nome (ou nick) ?</label>
            <Input id="name" placeholder="Como te chamam dentro do jogo?" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quanto tempo?</label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser Zero."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual é o seu Discord?</label>
              <Input id="discord" type="text" placeholder="Usuário#0000." />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
                <ToggleGroup.Root type="multiple" className="grid grid-cols-4 gap-1">
                  <ToggleGroup.Item value="0">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Domingo"
                    >
                      D
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="1">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Segunda-feira"
                    >
                      S
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="2">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Terça-feira"
                    >
                      T
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value='3'>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quarta-feira"
                    >
                      Q
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value='4'>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quinta-feira"
                    >
                      Q
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value='5'>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sexta-feira"
                    >
                      S
                    </button>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value='6'>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sábado"
                    >
                      S
                    </button>
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="time" id="hourStart" placeholder="De" />
                <Input type="time" id="hourEnd" placeholder="Até" />
              </div>
            </div>
          </div>
          <div className="mt2 flex gap-2 text-sm">
            <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900 p-1">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz.
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold  hover:bg-zinc-600"
              type="button"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar um duo.
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
