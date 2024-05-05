import Sidebar from "../components/Sidebar";
import ProfileSection from "../components/ProfileSection";
import { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto">
        <Sidebar />
        <ProfileSection />
      </div>
    </>
  );
};

export default ProfilePage;
