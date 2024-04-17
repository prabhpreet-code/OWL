import Footer from "@/components/Home/Footer";
import { NavbarComp } from "@/components/Navbar";
import Onboarding from "@/components/forms/Onboarding";
import AvatarCards from "@/components/profile/AvatarCard";
import { OwnedGames } from "@/components/profile/OwnedGames";
import ProfileCards from "@/components/profile/ProfileCards";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Sidebar from "@/components/profile/Sidebar";
import Stats from "@/components/profile/Stats";
import Wishlist from "@/components/profile/Wishlist";
import SidebarContext, { SidebarTypes } from "@/contexts/SidebarContext";
import { Web3ModalProvider } from "@/contexts/WalletContext";
import { Navbar } from "@nextui-org/react";

import { useContext } from "react";

import { useAccount } from "wagmi";

export default function Profile() {
  const { buttonIndex } = useContext(SidebarContext) as SidebarTypes;
  const { address } = useAccount();

  console.log(address);

  return (
    <main className="px-2 py-4 flex mb-5 justify-around flex-col 2xl:px-36 medium:px-48 extra:px-60 ">
      <NavbarComp />
      <section className="grid grid-cols-5 px-12">
        <div className="col-span-1">
          
            <Sidebar />
          
        </div>
        <div className="col-span-4">
          {buttonIndex === 4 || buttonIndex === 3 ? (
            <div></div>
          ) : (
            <ProfileHeader />
          )}
          {switch_Index(buttonIndex)}
          {/* <OwnedGames /> */}
        </div>
      </section>
      <section className="justify-end">
        <Footer />
      </section>
    </main>
  );
}

function switch_Index(index: number) {
  switch (index) {
    case 0:
      return <Stats />;
    case 1:
      return <Wishlist />;
    case 2:
      return <Stats />;
    case 3:
      return <Wishlist />;
    case 4:
      return <Onboarding />;
  }
}
