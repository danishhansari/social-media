import { createPortal } from "react-dom";
import { useState, lazy, Suspense } from "react";
const Username = lazy(() => import("../SigninMultipage/Username"));
const Password = lazy(() => import("../SigninMultipage/Password"));
import SmallLoader from "../../components/loading/SmallLoader";
import { Toaster } from "react-hot-toast";

const LoginPortal = ({ setShowSignInPortal }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PageToRender = () => {
    if (currentPage === 0) {
      return (
        <Suspense fallback={<SmallLoader />}>
          <Username
            setCurrentPage={setCurrentPage}
            setShowSignInPortal={setShowSignInPortal}
          />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<SmallLoader />}>
          <Password setShowSignInPortal={setShowSignInPortal} />
        </Suspense>
      );
    }
  };

  return createPortal(
    <>
      <Toaster />
      <div className="fixed bg-white md:bg-black/50 h-full w-full top-0 left-0 overflow-hidden flex items-center justify-center">
        <div className="rounded-xl md:h-[60vh] bg-white w-full max-w-[600px] px-4 py-2">
          <PageToRender />
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default LoginPortal;
