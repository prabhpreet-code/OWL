import timeConverter from "@/utils/unixTimeConvert";
import { useNavigate } from "react-router-dom";
import { RiSubtractFill } from "react-icons/ri";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { CiViewList } from "react-icons/ci";
import { useAccount } from "wagmi";
import { config, projectId } from "@/contexts/WalletContext";
import { MdShoppingCart } from "react-icons/md";
import { useCartStore, useWishlistStore } from "@/store/store";

import { updateWishlist } from "@/api/user/updateWishlist";

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
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const { cart, addToCart, removeFromCart } = useCartStore();
  const isInCart = cart.some((game) => game.name === name);

  const isInWishlist = wishlist.some((game) => game.name === name);

  const modal = createWeb3Modal({ config, projectId });

  const handleWishlist = async () => {
    if (isConnected) {
      if (isInWishlist) {
        toast.error(`${name} removed from Wishlist`);
        removeFromWishlist(index);
      } else {
        // await updateWishlist(wishlist, user.ID);
        toast.success(`${name} added to Wishlist`);
        addToWishlist({
          index,
          url,
          name,
        });
      }
    } else {
      modal.open();
      toast.error("You need to connect your wallet first.");
    }
  };

  const handleCart = () => {
    if (isConnected) {
      if (isInCart) {
        toast.error(`${name} removed from Cart`);

        removeFromCart(index);
      } else {
        toast.success(`${name} added to Cart`);

        addToCart({
          index,
          url,
          name,
        });
      }
    } else {
      modal.open();
      toast.error("You need to connect your wallet first.");
    }
  };

  return (
    <div
      key={index}
      // onClick={() => navigate(`/game/${index}`)}
      className={`${className} justify-around cursor-pointer divide-y-2 divide-[gray]/25 hover:bg-gray-600/25 hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] opacity-75 hover:opacity-100 delay-75  transition-all ease-in-out pb-12 `}
      onClick={() => navigate(`/game/${index}`)}
    >
      <img
        src={url?.replace("thumb", "1080p")}
        alt="Laptop"
        className=" w-full h-96 rounded-t-md object-cover"
      />
      <div className="p-5 font-inter ">
        <p className=" line-clamp-2 text-lg font-semibold font-jura">{name}</p>
        <p className="mt-3 text-sm line-clamp-2 text-white ">{summary}</p>
        <p className="mt-3 flex justify-between text-sm text-white">
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
            .map((genres, index) => (
              <span
                key={index}
                className="mb-2 mr-2  rounded-full inline-flex  bg-gray-100 px-2 py-1 text-[9px] font-semibold text-gray-900"
              >
                {genres}
              </span>
            ))}
        </p>
        <div className="flex flex-row ">
          <Button
            type="button"
            onClick={() => handleCart()}
            className="mt-4 w-8/12 justify-center rounded-sm bg-slate-300/25 text-xs font-semibold text-white"
          >
            {isInCart ? (
              <div className="flex items-center">
                Remove from Cart
                <RiSubtractFill className="text-blue-500 text-2xl font-extrabold" />
              </div>
            ) : (
              <>
                Add to Cart
                <MdShoppingCart className="text-xl font-extrabold" />
              </>
            )}
          </Button>

          <Button
            type="button"
            onClick={() => handleWishlist()}
            className="flex mt-4 w-4/12 mx-1 min-w-6 rounded-sm bg-slate-300/25 text-sm font-semibold text-white "
          >
            {isInWishlist ? (
              <>
                <RiSubtractFill className="text-blue-500 text-3xl font-extrabold" />
              </>
            ) : (
              <>
                <CiViewList className="text-green-400 text-2xl font-extrabold" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
