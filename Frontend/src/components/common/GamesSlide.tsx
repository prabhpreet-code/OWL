import { dummyData } from "@/utils/dummyGameData";
import Games from "../Marketplace/Games";

export default function GamesSlide() {
  return (
    <div className="grid grid-cols-2 gap-5 w-full ">
      {dummyData.map((element, index) => (
        <div>
          {index > 1 ? (
            <Games key={index} url={element.img} index={0} name={""} rating={0} releaseDate={0} summary={""} genres={""} className={""}  />
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}
