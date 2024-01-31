import { useState } from "react";
import { Button } from "../ui/button";
import { data } from "@/utils/ButtonArrayData";

export default function ButtonArray() {
  const [buttonValue,setButtonValue]=useState<number>(0);

  return (
    <div className="w-full">
      {data.map((element, index: number) => (
        <Button
          key={index}
          variant="ghost"
          onClick={() => setButtonValue(index)}
          className={` w-1/3 px-10  h-full  rounded-none hover:text-2xl hover:bg-gray    ${
            index === 2 ? "border-none" : "border-r"
          } ${
            index === buttonValue
              ? "opacity-100"
              : "opacity-75 backdrop-blur-lg brightness-85 text-white"
          }`}
        >
          <span className="uppercase tracking-wide text-white font-jura text-xl">
            <span
              className={` ${
                index === buttonValue ? "text-violet-400 text-4xl font-semibold" : "text-white text-3xl "
              } `}
            >
              {element.first}
            </span>
            <br />
            {element.last}
          </span>
        </Button>
      ))}
    </div>
  );
}
