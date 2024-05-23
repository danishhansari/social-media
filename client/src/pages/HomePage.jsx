import { lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar"));
const HomePageMiddleSection = lazy(() =>
  import("../components/home/HomePageMiddleSection")
);
const HomePageRightSection = lazy(() =>
  import("../components/home/HomePageRightSection")
);

const HomePage = () => {
  return (
    <>
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        <HomePageMiddleSection />
        <HomePageRightSection />
      </div>
    </>
  );
};

export default HomePage;
