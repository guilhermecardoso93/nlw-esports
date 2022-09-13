import "./styles/main.css";
import Logo from "../src/assets/logo.svg";
import Game1 from "../src/assets/game1.png";

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={Logo} className="w-50" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-8 over-floe-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
      </div>
      <div className="bg-[#2a2634] px-8 py-6"></div>
    </div>
  );
}
