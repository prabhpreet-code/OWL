import { dummyData } from "@/utils/dummyGameData";
import Games from "./Games";
export default function GameCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-3 pr-20 gap-5 w-full ">
        {dummyData.map((element,index)=>(
            <Games key={index} img={element.img} video={element.video}/>
        ))}
    </div>
  );
}
