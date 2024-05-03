import Card from "../Detailpanel/Cards";
import { useCartStore, useWishlistStore } from "@/store/store";

export default function Wishlist() {
  const { cart } = useCartStore();
  const { wishlist } = useWishlistStore();
  console.log("wishlist", wishlist);
  console.log("cart", cart);

  return wishlist?.length === 0 ? (
    <h1>No game in your wishlist</h1>
  ) : (
    <section className="flex flex-col my-12 ">
      <h1 className="text-3xl text-left font-semibold font-urbanist tracking-wider mb-4 ">
        Your Wishlist :
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-3  gap-5  place-items-center">
        {wishlist?.map((element) => (
          <Card
            key={element.index || element.id}
            index={element.id || element.index}
            url={element?.cover?.url || element.url}
            name={element.name}
          />
        ))}
      </div>
    </section>
  );
}
