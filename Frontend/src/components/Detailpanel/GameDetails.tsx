import { Button } from "@nextui-org/react";
import { CarouselPlugin } from "./DetailCarousel";
import timeConverter from "@/utils/unixTimeConvert";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { MdAddShoppingCart } from "react-icons/md";

type dataType = {
  id: number;
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
  const { addToCart, cart, removeFromCart } = useCart();

  const isInCart = cart.includes(data.id);

  const handleCart = () => {
    if (isInCart) {
      toast.error(`${data.name} removed from Wishlist`);
      removeFromCart(data.id);
    } else {
      addToCart(data.id);
      toast.success(`${data.name} added to Wishlist`);
    }
  };
  return (
    <section className="overflow-hidden md:min-w-l ">
      <div></div>
      <div className="flex flex-col md:px-40 px-2">
        <h1 className="  flex justify-start font-bold leading-none tracking-tighter mb-4 md:mb-8 col-span-2">
          <span className="ml-2.5 text-nowrap text-6xl bg-gradient-to-r from-blue-500 to-blue-900 text-clip text-transparent bg-clip-text font-weight-900 tracking-wider mb-2 md:mb-4 text-left col-span-4">
            {data?.name}
            <hr className="text-white font-extrabold mt-2 md:mt-4 w-full" />
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2">
          <div className=" col-span-3 pr-12  flex flex-wrap items-center object-cover">
            <CarouselPlugin array={data?.screenshots} link={video} />
          </div>
          <div className="rounded-md bg-[rgba(255,255,255,0.05)] p-1 bg-opacity-50  opacity-85 hover:opacity-95 font-inter  md:col-span-1 lg:col-span-1 ">
            <img
              src={data?.cover?.url.replace("thumb", "screenshot_med")}
              alt="Cover Photo"
              className="object-cover aspect-video rounded-t-sm md:col-span-1 lg:col-span-1 w-full h-[285px]"
            />

            <div className="mt-2 px-4">
              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-3 mb-3">
                <span className="line-clamp-3 font-semibold text-sm font-jura text-left">
                  {data?.summary}
                </span>
              </p>

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
                <span className="text-violet-400 text-sm tracking-wider">
                  Release Date:
                </span>
                <span className="line-clamp-3 text-sm text-left px-2">
                  {timeConverter(data?.release_dates[0].date)}
                </span>
              </p>

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
                <span className="text-violet-400 text-sm tracking-wider">
                  Rating:
                </span>
                <span className="line-clamp-3 text-sm text-left px-2">
                  {Math.round(data?.rating)}
                </span>
              </p>

              <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2 ">
                <span className="text-violet-400 text-sm tracking-wider">
                  Tags:
                </span>
                <span className="text-sm text-left px-2">
                  {data?.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <div className="flex items-center text-nowrap ">
                <Button
                  type="button"
                  onClick={() => handleCart()}
                  className="flex justify-between mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {isInCart ? (
                    <>
                      Remove from Wishlist <MdAddShoppingCart />
                    </>
                  ) : (
                    <>
                      Add to Wishlist <MdAddShoppingCart />
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  className="flex px-[75px] items-center mt-4 w-full rounded-sm bg-black py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className=" flex title-font text-base font-bold  text-violet-400">
                    Buy
                  </span>
                  <span className="title-font base font-bold pl-1 text-white">
                    {Math.ceil(Math.random() * (1.8 - 0.5) + 0.5)} ETH
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-white font-extrabold mt-4 w-full" />
    </section>
  );
}
