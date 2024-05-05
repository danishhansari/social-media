import { Suspense, lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar"));
import Loader from "../components/Loader";
import HomePageSection from "../components/HomePageSection";

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="flex max-w-[1300px] mx-auto">
          <Sidebar />
          <HomePageSection />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
