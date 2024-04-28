import Twitterlogo from "../components/Twitterlogo";
const AuthPage = () => {
  return (
    <div className="h-cover px-4 max-h-full w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] mx-auto items-center">
        <div className="w-full hidden md:block">
          <Twitterlogo />
        </div>
        <div>

          <div className="max-w-[100px] md:hidden">
            <Twitterlogo />
          </div>

          <h1 className="text-6xl font-bold my-4 md:m-0">Happening now </h1>
          <h2 className="text-3xl font-bold mb-2 md:my-8">Join today. </h2>
          <div className="w-full md:w-[70%]">
            <button className="bg-white border-gray-300 border text-center py-2 rounded-full w-full">
              Sign up with Google
            </button>
            <div className="relative gap-2 my-4 flex items-center">
              <hr className="w-1/2" />
              <p>or</p>
              <hr className="w-1/2" />
            </div>
            <button className="bg-white border-gray-300 border text-center py-2 rounded-full w-full my-2">
              Create account
            </button>
            <p className="text-sm">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <div className="mt-8">
              <p>Already have an account</p>
              <button className="bg-white border-gray-300 border text-center py-2 rounded-full w-full my-2 md:my-4">
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
