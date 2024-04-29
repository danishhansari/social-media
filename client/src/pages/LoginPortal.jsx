import { createPortal } from "react-dom";
import closeIcon from "../assets/close.png";
const LoginPortal = ({ setShowPortal }) => {
  return createPortal(
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-full md:h-[60vh] w-full max-w-[600px] rounded-lg p-4">
        <button className="w-3" onClick={() => setShowPortal((prev) => !prev)}>
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default LoginPortal;
