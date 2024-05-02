import timeConverter from "@/utils/unixTimeConvert";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast } from "sonner";

import { CiViewList } from "react-icons/ci";
import { useAccount } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config, projectId } from "@/contexts/WalletContext";
import { createUser } from "@/api/user/createUser";
import { useWishListStore } from "@/store/store";

export type GameProps = {
  index: number;
  url: string;
  name: string;
  rating: number;
  releaseDate: number;
  summary: string;
  genres: string;
  className: string;
};
export default function Games({
  index,
  url,
  name,
  rating,
  releaseDate,
  summary,
  genres,
  className,
}: GameProps) {
  const navigate = useNavigate();
  // const { cart, addToCart, removeFromCart } = useCart();
  // const isInCart = cart.includes(index);
  const { wishlist, addToWishlist, removeFromWishlist }: any =
    useWishListStore();
  const { address, isConnected } = useAccount();
  const modal = createWeb3Modal({ config, projectId });

  const isInCart = wishlist.some((game: any) => game.id === index);

  const handleCart = async () => {
    if (isConnected) {
      await createUser(address);

      if (isInCart) {
        removeFromWishlist({ id: index, name: name, url: url });
        toast.error(`${name} removed from Wishlist`);
      } else {
        addToWishlist({ id: index, name: name, url: url });
        toast.success(`${name} added to Wishlist ${address}`);
      }
    } else {
      modal.open();
      toast.error("You need to connect your wallet first!");
    }
  };
  return (
    <div
      key={index}
      // onClick={() => navigate(`/game/${index}`)}
      className={`${className} cursor-pointer divide-y-2 hover:bg-gray-600/25 hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] opacity-85 hover:opacity-100 delay-75  transition-all ease-in-out `}
    >
      <img
        src={url?.replace("thumb", "1080p")}
        alt="Laptop"
        onClick={() => navigate(`/game/${index}`)}
        className=" w-full rounded-t-md object-cover "
      />
      <div className="p-5 font-inter">
        <p className=" line-clamp-2 text-lg font-semibold font-jura">{name}</p>
        <p className="mt-3 text-sm line-clamp-2 text-white ">{summary}</p>
        <p className="mt-3 flex justify-between text-sm text-white">
          {" "}
          <span className="text-violet-400 ">Released:</span>
          {timeConverter(releaseDate)}
        </p>
        <p className="mt-3 flex justify-between text-sm text-white">
          <span className="text-violet-400">Rating: </span>
          {Math.round(rating)}
        </p>
        <p className="mt-3 text-left text-sm text-white  ">
          {genres
            ?.split(", ")
            .slice(0, 2)
            .sort()
            .map((genres, index) => (
              <span
                key={index}
                className="mb-2 mr-2  rounded-md inline-flex  bg-gray-100/85 p-1 px-2 text-[10px]  text-black font-urbanist font-bold tracking-wide"
              >
                {genres}
              </span>
            ))}
        </p>
        <button
          type="button"
          onClick={() => handleCart()}
          className="flex justify-between mt-4  rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {isInCart ? (
            <>
              <ImCross className="text-red-400 text-2xl font-extrabold" />
            </>
          ) : (
            <>
              <CiViewList className="text-green-400 text-xl font-extrabold" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
