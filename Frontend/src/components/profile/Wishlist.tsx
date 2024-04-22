// import { dummyData } from "@/utils/dummyGameData";
// import Games from "../Marketplace/Games";

import { getRecommendations } from "@/api/getRecommendations";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";
import Games from "../Marketplace/Games";

export default function Wishlist() {
  const { cart } = useCart();
  const [cartGames, setCartGames] = useState([]);

  useEffect(() => {
    const fetchGameById = async (gameID: number[] | string) => {
      if (gameID.length !== 0) {
        try {
          const gameData = await getRecommendations(gameID);
          setCartGames(gameData);
          // console.log(gameID);
        } catch (error) {
          console.error("Error fetching game data:", error);
        }
      } else {
        setCartGames([]);
      }
    };

    fetchGameById(cart);
  }, [cart]);
  console.log("cart id", cart);

  return cartGames.length === 0 ? (
    <h1>No game in your wishlist</h1>
  ) : (
    <section className="flex flex-col my-12 ">
      <h1 className="text-3xl text-left font-semibold font-urbanist tracking-wider mb-4 ">
        Your Wishlist :
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-3  gap-5  place-items-center">
        {cartGames?.map(
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
            <Games
              key={index}
              index={element.id}
              url={element.cover.url}
              name={element.name}
              rating={element.rating}
              genres={element?.genres.map((genre) => genre?.name).join(", ")}
              releaseDate={element.release_dates[0].date}
              summary={element.summary}
              className={"w-4/5 rounded-md border cursor-pointer"}
            />
          )
        )}
      </div>
    </section>
  );
}
