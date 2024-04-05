import { useEffect, useState } from "react";
import { owlFeatures } from "@/utils/featuresData";
import useDynamicRefs from "use-dynamic-refs";
import Lottie from "react-lottie";

import "../../App.css";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
export function BentoGrid() {
  const [RefNumber, setRefNumber] = useState("1");
  const [getRef, setRef] = useDynamicRefs();
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    const containerRef = getRef(RefNumber);
    function mouseMoveEvent(e: any) {
      const rect = containerRef?.current?.getBoundingClientRect(),
        x = e.clientX - rect?.left,
        y = e.clientY - rect?.top;

      containerRef.current?.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current?.style.setProperty("--mouse-y", `${y}px`);
    }
    containerRef.current.addEventListener("mousemove", mouseMoveEvent);
  }, [RefNumber]);
  function handleMouseEnter(id: string) {
    setRefNumber(id);
    setPlay(false);
  }

  return (
    <div id="#cards" className="grid relative  grid-cols-3 gap-4">
      {owlFeatures.map((element, index) => (
        <div
          key={index + 1}
          className={` card row-span-1 h-[400px] mb-10 rounded-xl   bg-neutral-900  ${
            index === 3 || index === 6 ? "col-span-2" : ""
          } `}
          ref={setRef(element.id)}
          onMouseEnter={() => handleMouseEnter(element.id)}
          onMouseLeave={() => setPlay(true)}
        >
          <div className="card-content  p-10 justify-center  text-center  rounded-sm lg:text-left">
            <div className="absolute inset-x-0 mt-20  ml-20 pl-20 -top-[4rem] -z-3 opacity-45 transform-gpu  blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[30.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem] opacity-45"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E0E00" />
                    <stop offset={2} stopColor="#1F1C18" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-around px-4">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold leading tracking-tighter sm:text-4xl ">
                  {element.heading}
                </h1>
                <p className="mt-6 mb-8 text-sm sm:mb-12">
                  {element.description}
                </p>
                <div className="flex flex-col  space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Button
                    variant="ghost"
                    className=" flex jusitfy-center items-center p-7 text-lg font-semibold border rounded dark:border-gray-100"
                  >
                    Explore
                    <ArrowRight className="mt-1 ml-1" />
                  </Button>
                </div>
              </div>
              <div className="p-6 ">
                <Lottie
                  width={200}
                  options={{
                    loop: true,
                    autoplay:false,
                    animationData: element.lottieData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  isPaused={play}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Lottie options={defaultOptions} /> */}
    </div>
  );
}
