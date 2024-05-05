import { Suspense, lazy } from "react";
import SmallLoader from "../components/SmallLoader";
const Sidebar = lazy(() => import("../components/Sidebar"));

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<SmallLoader />}>
        <Sidebar />
      </Suspense>
    </>
  );
};

export default HomePage;
