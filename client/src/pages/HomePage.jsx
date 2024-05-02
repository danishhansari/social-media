import { lazy, Suspense } from "react";
import SmallLoader from "../components/SmallLoader";

const SideBar = lazy(() => import("../components/Sidebar"));

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <Suspense fallback={<SmallLoader />}>
          <SideBar />
        </Suspense>
        <div>HomePage</div>
      </div>
    </>
  );
};

export default HomePage;
