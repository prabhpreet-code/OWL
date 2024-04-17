import { FormContextTypes, formContext } from "@/contexts/FormContext";
import SidebarContext, { SidebarTypes } from "@/contexts/SidebarContext";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

export default function ProfileHeader() {
  const { setButtonIndex } = useContext(SidebarContext) as SidebarTypes;
  const { Form } = useContext(formContext) as FormContextTypes;

  const { address } = useAccount();

  return (
    <section className=" bg-[rgba(255,255,255,0.056)] p-14 dark:bg-gray-900 dark:text-gray-100 mb-20 rounded-lg">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src={`https://ipfs.io/ipfs/${
            Form?.profile_picture.split("ipfs://")[1]
          }`}
          alt="pfp"
          className=" object-cover self-center flex-shrink-0 w-60 h-60 border rounded-sm md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
        />
        <div className="flex flex-col mx-12 w-full">
          <div className="flex justify-between mb-4">
            <h4 className="text-3xl mt-10 font-semibold  font-urbanist text-left  md:text-left">
              Welcome! 🖐️{" "}
              <span className="text-violet-400">
                {Form?.username ? Form?.username : address}
              </span>
            </h4>
          </div>
          <p className="dark:text-gray-400 font-urbanist text-md pr-12 text-left mb-4">
            <span className="text-violet-400 flex flex-col">
              <span className="mb-8 text-gray-200/[0.8]"> {Form?.bio}</span>
              {Form?.username ? (
                <span className="text-[gray] font-bold tracking-wide">
                  Wallet Address :{" "}
                  <span className="text-white"> {address}</span>
                </span>
              ) : (
                ""
              )}
            </span>
          </p>
          <span className="flex gap-x-12">
            {Form?.tags?.map((tag, id) => (
              <span
                key={id}
                className="text-black font-extrabold tracking-tighter text-xl font-jura py-1 px-3 bg-red-400  border-1 rounded-xl"
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex pt-4 space-x-4 align-center justify-end">
        <Link to="#" className="justify-end">
          <Button
            className="text-sm font-semibold p-4 justify-end"
            variant="faded"
            onClick={() => setButtonIndex(4)}
          >
            Edit Profile
          </Button>
        </Link>
      </div>
    </section>
  );
}
