import Twitterlogo from "../components/Twitterlogo";
import googleLogo from "../assets/google.png";

const AuthPage = () => {
  return (
    <div className="h-cover px-4 max-h-full w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[50%] mx-auto items-center">
        <div className="w-full hidden md:block">
          <Twitterlogo />
        </div>

        <div className="text">
          <div className="max-w-[70px] mt-4 md:hidden">
            <Twitterlogo />
          </div>

          <h1 className="text-4xl md:text-6xl my-4 md:m-0">Happening now </h1>
          <h2 className="text-xl md:text-3xl mb-2 md:my-8">Join today. </h2>
          <div className="w-full md:w-[80%]">
            <button className="bg-white border border-gray-100  text-center py-2 rounded-full w-full flex items-center justify-center gap-2 hover:bg-gray-200">
              <img className="w-5" src={googleLogo} alt="google logo" />
              Sign up with Google
            </button>
            <div className="relative gap-2 my-4 flex items-center">
              <hr className="w-1/2 border-gray-50" />
              <p className="text-gray-200">or</p>
              <hr className="w-1/2 border-gray-50" />
            </div>
            <button className="text-center py-2 rounded-full w-full my-2 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
              Create account
            </button>
            <p className="text-sm">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <div className="mt-8">
              <p>Already have an account</p>
              <button className="md:my-4 text-center py-2 rounded-full w-full my-2 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
