export function CTA(){
    return (
      <section className="py-10 mt-20 mb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get full access to Platform
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt eos facilis debitis voluptas iure consectetur odit fugit
              voluptate recusandae?
            </p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex w-full max-w-sm items-center justify-center space-x-2">
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </form>
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <span className="ml-2 text-sm text-white">
              Begin your Journey with us today
            </span>
          </div>
        </div>
      </section>
    );
}