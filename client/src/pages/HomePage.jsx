import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
const Sidebar = lazy(() => import("../components/Sidebar"));
const HomePageMiddleSection = lazy(() =>
  import("../components/HomePageMiddleSection")
);
const HomePageRightSection = lazy(() =>
  import("../components/HomePageRightSection")
);

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="flex max-w-[1300px] mx-auto">
          <Sidebar />
          <HomePageMiddleSection />
          <HomePageRightSection />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
