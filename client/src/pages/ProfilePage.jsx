import { lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar"));
const ProfileSection = lazy(() => import("../components/ProfileSection"));
import { Toaster } from "react-hot-toast";
const HomePageRightSection = lazy(() =>
  import("../components/home/HomePageRightSection")
);

const ProfilePage = () => {
  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto">
        <Sidebar />
        <ProfileSection />
        <HomePageRightSection />
      </div>
    </>
  );
};

export default ProfilePage;
