import SignInGoogle from "../../components/SignInGoogle";
import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signinAtom } from "../../states/atom";
const Username = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);

  return (
    <>
      <div className="w-full mt-8 md:w-1/2 mx-auto">
        <h2 className="text-3xl my-4">Sign in to X</h2>
        <SignInGoogle />

        <div className="relative gap-2 my-4 flex items-center">
          <hr className="w-1/2 border-grey" />
          <p className="text-lightgrey">or</p>
          <hr className="w-1/2 border-grey" />
        </div>

        <Input
          placeholder="Email and username"
          value={input.email}
          onchange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
        />

        <button
          className="bg-black py-2 w-full rounded-full text-center text-white font-medium mt-4 hover:bg-black/90"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
        <button className="py-1 w-full rounded-full text-center text-black font-medium mt-4 hover:bg-lightgrey border-grey border">
          Forget Password
        </button>
        <p className="text-grey mt-12">
          Dont have an account? <span className="text-primary">Sign up</span>
        </p>
      </div>
    </>
  );
};

export default Username;
