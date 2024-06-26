import { useState } from "react";

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

export function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  return (
    <NavigationMenu
      className=" flex justify-between  items-center  mb-16  px-12 py-4"
      style={{ width: "100%" }}
    >
      <NavigationMenuList>
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <span>
              <img width={40} height={40} src={owl} />
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
        <NavigationMenuItem>
          <Link to="/profile">
            <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Link
        to="#_"
        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-background opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-inter">
          Connect Wallet
        </span>
      </Link>
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
