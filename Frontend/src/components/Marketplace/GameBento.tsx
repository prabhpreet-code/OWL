import urlArray from "@/utils/dummydata/imageData";
import ButtonArray from "./ButtonArray";
export function GameBento() {
  return (
    <div className="sm:grid w-full px-32  hidden grid-cols-4 mt-8 gap-10">
      {/* {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 h-[400px] mb-10 rounded-xl border-2 bg-background border-slate-400/10  p-4 dark:bg-neutral-900 ${
            i === 3 || i === 6 ? "col-span-2" : ""
          }`} */}
      {/* > */}
      {urlArray.map((element, index) => (
        <div
          key={index + 1}
          className={`relative row-span-1  rounded-xl  bg-background  dark:bg-neutral-900 ${
            index === 3 ? "border-b border-gray-200" : "border-2"
          } ${index === 1 || index === 3 ? "col-span-3" : ""}`}
        >
          <div className="flex flex-col sm:h-[100px] h-[200px] w-full relative justify-center shadow-2xl  text-center  rounded-sm lg:text-left">
            {index != 3 ? (
              <img
                src={element}
                className="  sm:h-[100px]  w-full object-cover rounded-xl brightness-75"
              />
            ) : (
              <div className=" flex h-[100px] bg-gradient-to-t from-violet-700 via-transparent to-transparent rounded-lg opacity-85">
                <ButtonArray />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
