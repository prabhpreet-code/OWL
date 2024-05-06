import { useSidebarStore } from "@/store/store";
import { profileSidebar } from "@/utils/dummydata/SidebarData";
import { Button } from "@nextui-org/react";

import { Link, useNavigate } from "react-router-dom";
import { useDisconnect } from "wagmi";

export default function Sidebar() {
  const { buttonIndex, setButtonIndex }: any = useSidebarStore();

  const navigate = useNavigate();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    sessionStorage.setItem("current-user", undefined);
    navigate("/");
  };

  return (
    <section className="col-span-1 font-urbanist mt-12">
      <div className="flex flex-col h-screen p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-3">
          <div className="flex items-center justify-between ">
            <h2 className="font-bold">Dashboard</h2>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-100"
              >
                <rect width="352" height="32" x="80" y="96"></rect>
                <rect width="352" height="32" x="80" y="240"></rect>
                <rect width="352" height="32" x="80" y="384"></rect>
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-8 text-sm ">
              {profileSidebar.map((element, id) => (
                <li
                  key={id}
                  className={`rounded-sm ${
                    id === buttonIndex
                      ? "bg-[gray]/[0.45] text-white text-base"
                      : "bg-inherit text-white text-base"
                  } `}
                  onClick={() => {
                    setButtonIndex(id);
                    console.log(buttonIndex);
                  }}
                >
                  <Link
                    rel="noopener noreferrer"
                    to=""
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                    </svg>
                    <span>{element}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => handleDisconnect()}
              className="flex w-full bg-[gray]/[0.45] text-white text-base tracking-wide "
            >
              <span className="w-28">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
