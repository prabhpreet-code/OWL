import { owlFeatures } from "@/utils/featuresData";
import { ArrowRight } from "lucide-react";
export function BentoGrid() {
  return (
    <div className="grid  grid-cols-3 gap-4">
      {/* {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 h-[400px] mb-10 rounded-xl border-2 bg-background border-slate-400/10  p-4 dark:bg-neutral-900 ${
            i === 3 || i === 6 ? "col-span-2" : ""
          }`} */}
      {/* > */}
      {owlFeatures.map((element, index) => (
        <div
          key={index + 1}
          className={`relative row-span-1 h-[400px] mb-10 rounded-xl border-2 bg-background border-slate-400/10  p-4 dark:bg-neutral-900 ${
            index === 3 || index === 6 ? "col-span-2" : ""
          }`}
        >
          <div className="flex flex-col relative justify-center shadow-2xl p-6 text-center  rounded-sm lg:text-left">
            <div className="absolute inset-x-0 mt-20  ml-20 pl-20 -top-[4rem] -z-3 opacity-45 transform-gpu  blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[30.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
            <h1 className="text-2xl font-bold leading tracking-tighter sm:text-4xl ">
              {/* Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat
              pharetra */}
              {element.heading}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              {/* Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem */}
              {element.description}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                className=" flex jusitfy-center items-center px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Explore
                <ArrowRight className="mt-1 ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
