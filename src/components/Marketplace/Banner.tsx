import { MarketCarousel } from "./MarketCarousel";

export default function Banner() {
  return (
    <div className="relative flex flex-row bg-background justify-center items-center">
      <div className=" w-10 rotate-180 ">
        <h1 className=" justify-center uppercase font-dm rotate-90 -mt-48 ml-10  text-[24px] font-semibold tracking-widest text-white  text-nowrap">
          <span className="text-violet-300 mr-2">Upcoming</span> Releases
        </h1>
      </div>

      <div className="rounded-lg w-[80vw] p-4 mr-12  lg:px-6">
        <MarketCarousel />
      </div>
    </div>
  );
}
