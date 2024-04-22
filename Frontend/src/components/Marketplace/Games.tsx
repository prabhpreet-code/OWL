import { useCart } from "@/contexts/CartContext";
import timeConverter from "@/utils/unixTimeConvert";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.includes(index);

  const handleCart = () => {
    if (isInCart) {
      removeFromCart(index);
    } else {
      addToCart(index);
    }
  };
  return (
    <div
      key={index}
      onClick={() => navigate(`/game/${index}`)}
      className={`${className} cursor-pointer `}
    >
      <img
        src={url?.replace("thumb", "1080p")}
        alt="Laptop"
        className=" w-full rounded-t-md object-cover"
      />
      <div className="p-4 font-inter">
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
          {genres?.split(", ").map((genres, index) => (
            <span
              key={index}
              className="mb-2 mr-2  rounded-full inline-flex  bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-900"
            >
              {genres}
            </span>
          ))}
        </p>
        <button
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
        </button>
      </div>
    </div>
  );
}
