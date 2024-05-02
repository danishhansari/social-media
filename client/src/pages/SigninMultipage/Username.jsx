import SignInGoogle from "../../components/SignInGoogle";
import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signinAtom } from "../../states/atom";
import { toast } from "react-hot-toast";
import axios from "axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Username = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);

  const handleUsername = () => {
    if (!input.email) {
      return toast.error("username or email required");
    }

    const isEmail = emailRegex.test(input.email);
    const url = `${import.meta.env.VITE_SERVER}/user/user-exist`;

    const requestData = isEmail
      ? { email: input.email }
      : { username: input.email };

    axios
      .post(url, requestData)
      .then(({ data }) => {
        if (data.userExist === false) {
          return toast.error(data.message);
        } else {
          return setCurrentPage((prev) => prev + 1);
        }
      })
      .catch((err) => {
        const errMessage = JSON.parse(err.response.data.message);
        toast.error(errMessage[0].message);
      });
  };

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
          onClick={handleUsername}
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
