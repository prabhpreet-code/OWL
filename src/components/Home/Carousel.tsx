import { CarouselPlugin } from "../common/Carousel";

export default function Carousel() {
  return (
    <section className="container flex justify-center p-6 pr-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="pr-10">
        <CarouselPlugin />
      </div>
      <div className="flex flex-col justify-center shadow-2xl p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          <h1 className="text-nowrap">
            <span className="text-violet-400">Explore</span> a wide
          </h1>
          <h1 className="text-nowrap">
            variety of <span className="text-violet-400">games.</span>
          </h1>
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Dictum aliquam porta in condimentum ac integer
          <br className="hidden md:inline lg:hidden" />
          turpis pulvinar, est scelerisque ligula sem
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Suspendisse
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
          >
            Malesuada
          </a>
        </div>
      </div>
    </section>
  );
}
