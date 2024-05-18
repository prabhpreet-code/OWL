import { useEffect, useState } from "react";

import owl from "../assets/owl.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";
import { useAccount } from "wagmi";

import { createUser, getAllUsers } from "@/api/user/createUser";
import { MdShoppingCart } from "react-icons/md";
import { useSidebarStore, useCartStore } from "@/store/store";
import { Button } from "@nextui-org/react";
import { IoIosChatbubbles } from "react-icons/io";

export function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { cart } = useCartStore();
  const { setButtonIndex } = useSidebarStore();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Marketplace",
      href: "/market",
      description: "Explore what we offer",
    },
    {
      title: "Profile",
      href: "/profile",
      description: "Login/check out your user dashboard",
    },
  ];

  useEffect(() => {
    const handleConnect = async () => {
      const fetchAllUsers = await getAllUsers();
      console.log(fetchAllUsers);
      const user = fetchAllUsers?.findLast(
        (user: any) => user.walletAddress === address
      );
      sessionStorage.setItem("current-user", JSON.stringify(user));
      console.log(user);

      if (isConnected && user === undefined) {
        const new_User = await createUser(address);
        sessionStorage.setItem("current-user", JSON.stringify(new_User));
      }
      //  toast.error("Awesome");
    };
    handleConnect();
  }, [isConnected]);

  return (
    <NavigationMenu
      className=" flex justify-between  items-center  mb-16  px-12 py-4"
      style={{ width: "100%" }}
    >
      <NavigationMenuList>
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <span>
              <img width={40} height={40} src={owl} alt="owl_logo" />
            </span>
          </Link>
        </div>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuTrigger className="tracking-tighter">
              Home
            </NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/market">
            <NavigationMenuTrigger>Marketplace</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
        {isConnected ? (
          <NavigationMenuItem>
            <Link to="/profile">
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
            </Link>
          </NavigationMenuItem>
        ) : (
          <div></div>
        )}
      </NavigationMenuList>
      <NavigationMenuList>
        {isConnected ? (
          <div className="flex gap-x-2">
            <Button
              className="flex -px-6 bg-inherit hover:bg-[rgba(255,255,255,0.09)] "
              onClick={() => {
                navigate("/profile");
                setButtonIndex(2);
              }}
              variant="solid"
            >
              <MdShoppingCart className=" text-xl text-white" />
              {cart.length === 0 ? (
                <div></div>
              ) : (
                <div className="absolute top-0 right-3 font-urbanist bg-red-500 text-white rounded-full w-5 h-4 flex items-center justify-center ">
                  {cart.length}
                </div>
              )}

              {/* <div className="absolute top-0 bg-red-500 text-white rounded-full w-5 h-4 flex items-center justify-center">
              {cart.length}
            </div> */}
            </Button>
            <Button
              className="flex -px-6 bg-inherit hover:bg-[rgba(255,255,255,0.09)] "
              onClick={() => {
                navigate("/profile");
                setButtonIndex(1);
              }}
              variant="solid"
            >
              <IoIosChatbubbles className=" text-xl text-white" />
            </Button>
          </div>
        ) : (
          <></>
        )}

        <w3m-button />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
