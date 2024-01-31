import { dummyData } from "@/utils/dummyGameData";
import Games from "../Marketplace/Games";

export default function GamesSlide() {
  return (
    <div className="grid grid-cols-2 gap-5 w-full ">
      {dummyData.map((element, index) => (
        <div>
          {index > 1 ? (
            <Games key={index} img={element.img} video={element.video} />
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}
