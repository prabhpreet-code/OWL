import Footer from "@/components/Home/Footer";
import { NavbarComp } from "@/components/Navbar";
import AvatarCards from "@/components/profile/AvatarCard";
import { OwnedGames } from "@/components/profile/OwnedGames";
import ProfileCards from "@/components/profile/ProfileCards";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Sidebar from "@/components/profile/Sidebar";
import Stats from "@/components/profile/Stats";
import Wishlist from "@/components/profile/Wishlist";
import SidebarContext, { SidebarTypes } from "@/contexts/SidebarContext";
import { Navbar } from "@nextui-org/react";
import { useContext } from "react";

export default function Profile() {
  const { buttonIndex } = useContext(SidebarContext) as SidebarTypes;
  function renderComponent() {
    return <div></div>;
  }
  return (
    <main className="px-2 py-4 flex mb-5 justify-around flex-col 2xl:px-36 medium:px-48 extra:px-60 ">
      <NavbarComp />
      <section className="grid grid-cols-5 px-12">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <ProfileHeader />
          {buttonIndex === 3 ? <Wishlist /> : <Stats />}
          {/* <OwnedGames /> */}
        </div>
      </section>
      <section className="justify-end">
        <Footer />
      </section>
    </main>
  );
}
