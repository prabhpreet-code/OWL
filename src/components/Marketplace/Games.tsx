import { ArrowUpRight } from "lucide-react";
import { MdAddShoppingCart } from "react-icons/md";

type GameProps = {
  img: string;
  video: string;
};
export default function Games({ img, video }: GameProps) {
  return (
    <div className="w-4/5 rounded-md border">
      <img
        src={img}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          Game Title goes here &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        {/* <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div> */}
        <div className=" flex justify-between mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <button type="button" className="">
            Buy
          </button>
          <MdAddShoppingCart />
        </div>
      </div>
    </div>
  );
}
