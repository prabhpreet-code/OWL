import { Button } from "../ui/button";

export default function TextSection({ summary }: { summary: string }) {
  return (
    <section className="  px-2 py-10 grid grid-cols-4 gap-4 md:px-40 md:col-span-1 lg:col-span-1">
      <figure className="flex flex-col mx-auto col-span-3 text-balance justify-start ">
        <h1 className="mb-4  text-4xl text-violet-400  text-left font-semibold ">
          About the Game:
          <hr className="mt-2" />
        </h1>
        <blockquote className="mt-3 w-full text-left text-md text-white">
          <p>{summary}</p>
        </blockquote>
      </figure>
      <div className="rounded-md pl-2  bg-[#121518] bg-opacity-50 pb-6 col-span-1">
        <div>
          <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-5 mb-5">
            <span className="line-clamp-3 text-xl  text-left px-3">
              Is this game relevant to you?
            </span>
          </p>

          <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
            <span className=" text-md tracking-tighter text-left px-3">
              Sign in to see reasons why you may or may not like this based on
              your games, friends, and curators you follow.
            </span>
          </p>
        </div>

        <div className="mt-2 px-4">
          <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2">
            <span className="text-violet-400 text-xs tracking-wider  ">
              Rating:
            </span>
            <span className="line-clamp-3 text-xs text-left">yo</span>
          </p>

          <p className="flex items-start w-full leading-relaxed text-dm font-weight-600 tracking-wide mt-2 mb-2 ">
            <span className="text-violet-400 text-xs tracking-wider  ">
              Tags:
            </span>
            <span className="text-xs text-left">nah id win</span>
          </p>
        </div>
        <Button
          variant="ghost"
          className="  ml-5 bg-white flex items-center mt-4 w-4/5 rounded-sm  text-sm font-semibold text-black  hover:bg-black hover:text-white outline hover:outline-offset-0"
        >
          Sign-In
        </Button>
      </div>
    </section>
  );
}
