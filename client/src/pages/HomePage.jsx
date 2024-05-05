import { Suspense, lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar"));
import Loader from "../components/Loader";

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Sidebar />
        
      </Suspense>
    </>
  );
};

export default HomePage;
