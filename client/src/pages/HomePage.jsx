import { lazy, Suspense } from "react";
import SmallLoader from "../components/SmallLoader";

const SideBar = lazy(() => import("../components/Sidebar"));

const HomePage = () => {
  return (
    <>
      <div className="bg-white md:px-[15vw] mx-auto">
        <Suspense fallback={<SmallLoader />}>
          <SideBar />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
