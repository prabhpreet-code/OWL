import { useCartStore } from "@/store/store";
import { Button } from "@nextui-org/react";
import { FaHeart, FaTrash } from "react-icons/fa";
export default function Orders() {
  const { cart } = useCartStore();
  return (
    <div className="mx-auto flex flex-col space-y-8 p-6 px-12 rounded-2xl bg-gray-200/10 sm:p-16 sm:px-24">
      <h2 className="text-3xl font-urbanist font-bold">Your cart</h2>
      <p className="mt-3 text-xl font-medium text-white font-jura">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius
        repellat ipsam, sit praesentium incidunt.
      </p>
      <ul className="flex flex-col font-urbanist w-full divide-y divide-gray-200">
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-cover outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.imageSrc}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold leading-snug sm:pr-8">
                      {product.index}
                    </h3>
                    <p className="text-lg">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x gap-x-5 text-sm">
                  <Button className="flex gap-x-5 bg-gray-200 hover:bg-red-200">
                    {" "}
                    <FaTrash />
                    Remove
                  </Button>

                  <Button className="flex gap-x-5 bg-gray-200 hover:bg-red-200">
                    <FaHeart className="hover:text-red-600" />
                    Add to favorites
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> 0 eth</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="solid"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Button>
        <Button
          type="button"
          variant="solid"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
