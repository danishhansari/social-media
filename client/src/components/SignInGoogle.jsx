import googleLogo from "../assets/google.png";
const SignInGoogle = () => {
  return (
    <button className="bg-white border border-gray-800  text-center py-2 rounded-full w-full flex items-center justify-center gap-2 hover:bg-gray-200">
      <img className="w-4" src={googleLogo} alt="google logo" />
      <p className="text-md">Sign up with Google</p>
    </button>
  );
};

export default SignInGoogle;
