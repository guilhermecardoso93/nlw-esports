import Game1 from "../src/assets/game1.png";

interface GameBannerProps {
  bannerUrl: string,
  title: string,
  adsCount: number
}

export function GamerBanner({title, bannerUrl, adsCount}: GameBannerProps) {
  return (
    <a href="" className="relative rounded-8 over-flow-hidden">
      <img src={bannerUrl} className='rounded-8' />
      <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">
          {title}
        </strong>
        <span className="text-sm text-zinc-300 block mt-1"> {adsCount} anúncio(s) </span>
      </div>
    </a>
  );
}