import Twitterlogo from "../components/Twitterlogo";
import { useState, lazy, Suspense, useEffect } from "react";
import SignInGoogle from "../components/SignInGoogle";
import SmallLoader from "../components/loading/SmallLoader";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPortal = lazy(() => import("./portal/LoginPortal"));
const RegisterPortal = lazy(() => import("./portal/RegisterPortal"));

const AuthPage = () => {
  const [showSignInPortal, setShowSignInPortal] = useState(false);
  const [showSignupPortal, setShowSignupPortal] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="h-cover px-4 max-h-full w-full flex items-center justify-center">
        {/* Login portal */}
        {showSignInPortal && (
          <Suspense fallback={<SmallLoader />}>
            <LoginPortal setShowSignInPortal={setShowSignInPortal} />
          </Suspense>
        )}

        {/* Register Portal */}
        {showSignupPortal && (
          <Suspense fallback={<SmallLoader />}>
            <RegisterPortal setShowSignupPortal={setShowSignupPortal} />
          </Suspense>
        )}

        <div className="flex flex-col h-screen md:flex-row justify-between w-full md:w-[50%] mx-auto items-center">
          <div className="w-full hidden md:block">
            <Twitterlogo />
          </div>

          <div className="text">
            <div className="max-w-[70px] mt-4 md:hidden">
              <Twitterlogo />
            </div>

            <h1 className="text-4xl md:text-6xl my-4 md:m-0">Happening now</h1>
            <h2 className="text-xl md:text-3xl mb-2 md:my-8">Join today. </h2>
            <div className="w-full md:w-[80%]">
              <SignInGoogle />
              <div className="relative gap-2 my-2 flex items-center justify-center">
                <p className="text-gray-200">or</p>
              </div>
              <button
                className="text-center py-2 rounded-full w-full my-2 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                onClick={() => setShowSignupPortal(true)}
              >
                Create account
              </button>
              <p className="text-sm">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
              <div className="mt-8">
                <p>Already have an account</p>
                <button
                  className="md:my-4 text-center py-2 rounded-full w-full my-2 bg-primary text-white font-medium   hover:bg-primary/90 transition-colors"
                  onClick={() => setShowSignInPortal(true)}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
