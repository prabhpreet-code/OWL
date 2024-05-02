import { NavbarComp } from "@/components/Navbar";
import Onboarding from "@/components/forms/Onboarding";

import Orders from "@/components/profile/Orders";

import ProfileHeader from "@/components/profile/ProfileHeader";
import Sidebar from "@/components/profile/Sidebar";
import Stats from "@/components/profile/Stats";
import Wishlist from "@/components/profile/Wishlist";

import { useSidebarStore } from "@/store/store";

import { useAccount } from "wagmi";
import Footer from "@/components/Home/Footer";

export default function Profile() {
  const { buttonIndex }: any = useSidebarStore();
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
          {buttonIndex === 4 || buttonIndex === 3 || buttonIndex === 2 ? (
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
      return <Orders />;
    case 3:
      return <Wishlist />;
    case 4:
      return <Onboarding />;
  }
}
