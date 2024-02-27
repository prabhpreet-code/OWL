import { CarouselPlugin } from "./DetailCarousel";
import timeConverter from "@/utils/unixTimeConvert";

type dataType = {
  name: string;
  screenshots: [
    {
      id: number;
      url: string;
    }
  ];
  cover: {
    id: number;
    url: string;
  };
  videos: number[];
  summary: string;
  release_dates: [
    {
      date: number;
      id: number;
    }
  ];
  rating: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
};

export default function GameDetails({
  data,
  video,
}: {
  data: dataType;
  video: string[];
}) {
  return (
    <section className="overflow-hidden md:min-w-l ">
      <div className="flex flex-col md:px-40 px-2">
        <h1 className="text-3xl md:text-4xl flex justify-start font-bold leading-none tracking-tighter mb-4 md:mb-8 col-span-2">
          <span className="ml-2.5 text-nowrap text-violet-400 font-weight-900 tracking-wider mb-2 md:mb-4 text-left col-span-4">
            {data?.name}
            <hr className="text-white font-extrabold mt-2 md:mt-4 w-full" />
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2">
          <div className=" md:col-span-2 lg:col-span-3 size-4/5 flex flex-wrap items-center object-cover">
            <CarouselPlugin array={data?.screenshots} link={video} />
          </div>
          <div className="rounded-md bg-[#121518] bg-opacity-50 pb-3 md:col-span-1 lg:col-span-1 ">
            <img
              src={data?.cover?.url.replace("thumb", "screenshot_med")}
              alt="Cover Photo"
              className="object-cover aspect-video rounded-t-sm md:col-span-1 lg:col-span-1 w-full"
            />

            <div className="mt-2 px-4">
              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-3 mb-3">
                <span className="line-clamp-3 text-xs italic text-left">
                  {data?.summary}
                </span>
              </p>
              {/* <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-3 mb-3">
                <span className="line-clamp-3 text-xs italic text-left">
                  {data?.videos[0]}
                </span>
              </p> */}

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
                <span className="text-violet-400 text-xs tracking-wider">
                  Release Date:
                </span>
                <span className="line-clamp-3 text-xs text-left">
                  {timeConverter(data?.release_dates[0].date)}
                </span>
              </p>

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
                <span className="text-violet-400 text-xs tracking-wider">
                  Rating:
                </span>
                <span className="line-clamp-3 text-xs text-left">
                  {Math.round(data?.rating)}
                </span>
              </p>

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2 ">
                <span className="text-violet-400 text-xs tracking-wider">
                  Tags:
                </span>
                <span className="text-xs text-left">
                  {data?.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <div className="flex items-center text-nowrap ">
                <button
                  type="button"
                  className="flex px-[75px] items-center mt-4 w-full rounded-sm bg-black py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className=" flex title-font text-base font-bold  text-violet-400">
                    Buy
                  </span>
                  <span className="title-font base font-bold pl-1 text-white">
                    {Math.ceil(Math.random() * (1.8 - 0.5) + 0.5)} ETH
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-white font-extrabold mt-4 w-full" />
    </section>
  );
}
