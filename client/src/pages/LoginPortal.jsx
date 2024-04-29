import { createPortal } from "react-dom";
import closeIcon from "../assets/close.png";
import Twitterlogo from "../components/Twitterlogo";
import SignInGoogle from "../components/SignInGoogle";
import Input from "../components/Input";

const LoginPortal = ({ setShowPortal }) => {
  return createPortal(
    <>
      <div className="fixed bg-white md:bg-black/50 h-full w-full top-0 left-0 overflow-hidden flex items-center justify-center">
        
        <div className="rounded-xl md:h-[60vh] bg-white w-full max-w-[600px] p-6">
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
          <div className="w-full mt-8 md:w-1/2 mx-auto">
            <h2 className="text-3xl my-4">Sign in to X</h2>
            <SignInGoogle />
            <div className="relative gap-2 my-4 flex items-center">
              <hr className="w-1/2 border-gray-50" />
              <p className="text-gray-200">or</p>
              <hr className="w-1/2 border-gray-50" />
            </div>

            <form>
              <Input placeholder="Phone, email and username" type="text" />
              <button className="bg-black py-2 w-full rounded-full text-center text-white font-medium mt-4 hover:bg-black/90">
                Next
              </button>
              <button className="py-1 w-full rounded-full text-center text-black font-medium mt-4 hover:bg-lightgrey border-grey border">
                Forget Password
              </button>
            </form>
            <p className="text-grey mt-12">
              Dont have an account?{" "}
              <span className="text-primary">Sign up</span>
            </p>
          </div>
        </div>

      </div>
    </>,
    document.getElementById("root")
  );
};

export default LoginPortal;
