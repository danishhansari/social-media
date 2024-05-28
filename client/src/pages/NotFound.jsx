import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import HomePageRightSection from "../components/home/HomePageRightSection";

const NotFound = () => {
  const refreshFn = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        <div className="w-full flex flex-col items-center">
          <p className="text-center text-grey">Not found anything</p>
          <button
            onClick={refreshFn}
            className="bg-primary text-white px-2 rounded-full py-1 hover:bg-primary/80"
          >
            Refresh
          </button>
        </div>
        <HomePageRightSection />
      </div>
    </>
  );
};

export default NotFound;
