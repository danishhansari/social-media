import { lazy, Suspense, useState } from "react";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";
import SmallLoader from "../../components/SmallLoader";
const CreateAccount = lazy(() => import("../SignupMultipage/CreateAccount"));
const CreateAccountPassword = lazy(() =>
  import("../SignupMultipage/CreateAccountPassword")
);

const RegisterPortal = ({ setShowSignupPortal }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PageToRender = () => {
    if (currentPage === 0) {
      return (
        <Suspense fallback={<SmallLoader />}>
          <CreateAccount
            setCurrentPage={setCurrentPage}
            setShowSignupPortal={setShowSignupPortal}
          />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<SmallLoader />}>
          <CreateAccountPassword setShowSignupPortal={setShowSignupPortal} />
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

export default RegisterPortal;
