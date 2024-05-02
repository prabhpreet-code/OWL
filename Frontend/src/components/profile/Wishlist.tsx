

import { useWishListStore } from "@/store/store";
import Card from "../Detailpanel/Cards";

export default function Wishlist() {
  // const { cart } = useCart();
  const { wishlist }: any = useWishListStore();
  // const [cartGames, setCartGames] = useState([]);


  console.log("cart id", wishlist);

  return wishlist.length === 0 ? (
    <h1>No game in your wishlist</h1>
  ) : (
    <section className="flex flex-col my-12 ">
      <h1 className="text-3xl text-left font-semibold font-urbanist tracking-wider mb-4 ">
        Your Wishlist :
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-3  gap-5  place-items-center">
        {wishlist?.map(
          (
            element: {
              id: number;
              cover: { url: string };
              name: string;
              rating: number;
              genres: string[];
              release_dates: { date: number }[];
              summary: string;
            },
            index: number
          ) => (
            <Card
              key={index}
              index={element.id}
              url={element.url}
              name={element.name}
            />
          )
        )}
      </div>
    </section>
  );
}
