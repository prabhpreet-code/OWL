import timeConverter from "@/utils/unixTimeConvert";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { CiViewList } from "react-icons/ci";
import { useAccount } from "wagmi";
import { config, projectId } from "@/contexts/WalletContext";
import { MdShoppingCart } from "react-icons/md";
import { useCartStore, useWishlistStore } from "@/store/store";
<<<<<<< HEAD

import { updateWishlist } from "@/api/user/updateWishlist";
=======
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83

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
<<<<<<< HEAD

=======
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83
  const isInCart = cart.some((game) => game.name === name);

  const isInWishlist = wishlist.some((game) => game.name === name);

  const modal = createWeb3Modal({ config, projectId });

<<<<<<< HEAD
  const handleWishlist = async () => {
=======
  const handleWishlist = () => {
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83
    if (isConnected) {
      if (isInWishlist) {
        toast.error(`${name} removed from Wishlist`);
        removeFromWishlist(index);
      } else {
<<<<<<< HEAD
        await updateWishlist(wishlist, user.ID);
=======
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83
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
        toast.error(`${name} removed from Wishlist`);
<<<<<<< HEAD

        removeFromCart(index);
      } else {
        toast.success(`${name} added to Wishlist`);

=======
        removeFromCart(index);
      } else {
        toast.success(`${name} added to Wishlist`);
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83
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
      className={`${className} cursor-pointer `}
    >
      <img
        src={url?.replace("thumb", "1080p")}
        alt="Laptop"
        onClick={() => navigate(`/game/${index}`)}
        className=" w-full rounded-t-md object-cover"
      />
      <div className="p-5 font-inter">
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
          {genres?.split(", ").map((genres, index) => (
            <span
              key={index}
              className="mb-2 mr-2  rounded-full inline-flex  bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-900"
            >
              {genres}
            </span>
          ))}
        </p>
        <div className="flex flex-row ">
          <Button
            type="button"
            onClick={() => handleCart()}
            className="mt-4 w-8/12 justify-center rounded-sm bg-blue-900 text-xs font-semibold text-white"
          >
            {isInCart ? (
              <>
                Remove from Cart
                <MdShoppingCart className="text-xl " />
              </>
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
            className="flex mt-4 w-4/12 mx-1 min-w-6 rounded-sm bg-blue-900 text-sm font-semibold text-white "
          >
            {isInWishlist ? (
              <>
                <ImCross className="text-red-400 text-2xl font-extrabold" />
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
