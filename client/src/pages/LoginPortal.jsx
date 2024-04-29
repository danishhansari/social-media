import { createPortal } from "react-dom";
import closeIcon from "../assets/close.png";
import Twitterlogo from "../components/Twitterlogo";
import Username from "./SigninMultipage/Username";
import { useState } from "react";

const LoginPortal = ({ setShowPortal }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PageToRender = () => {
    if (currentPage === 0) {
      return <Username setCurrentPage={setCurrentPage} />;
    }
  };

  return createPortal(
    <>
      <div className="fixed bg-white md:bg-black/50 h-full w-full top-0 left-0 overflow-hidden flex items-center justify-center">
        <div className="rounded-xl md:h-[60vh] bg-white w-full max-w-[600px] px-4 py-2">
          <div className="header flex">
            <button
              className="w-3"
              onClick={() => setShowPortal((prev) => !prev)}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            <div className="w-10 mx-auto">
              <Twitterlogo />
            </div>
          </div>
          <PageToRender />
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default LoginPortal;
