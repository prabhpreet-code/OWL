import { dummyData } from "@/utils/dummyGameData";
import Games from "../Marketplace/Games";

export default function Wishlist() {
  return (
    <section className="flex flex-col my-12 ">
      <h1 className="text-3xl text-left font-semibold font-urbanist tracking-wider mb-4 ">
        Your Wishlist   :
      </h1>
      <div className="grid grid-cols-4 gap-x-20 gap-y-10">
        {dummyData.map((element, index) => (
          <div>
            <Games
              key={index}
              url={element.img}
              index={0}
              name={""}
              rating={0}
              releaseDate={0}
              summary={""}
              genres={""}
              className={""}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
