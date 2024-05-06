import { useEffect, useState } from "react";

import owl from "../assets/owl.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";
import { useAccount } from "wagmi";

import { createUser, getAllUsers } from "@/api/user/createUser";

export function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { address, isConnected } = useAccount();

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

      <w3m-button />
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
