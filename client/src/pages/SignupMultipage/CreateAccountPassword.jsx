import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signupAtom } from "../../states/atom";
import Twitterlogo from "../../components/Twitterlogo";
import closeIcon from "../../assets/close.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreateAccountPassword = ({ setShowSignupPortal }) => {
  const navigate = useNavigate();
  const [input, setInput] = useRecoilState(signupAtom);

  const handleSubmit = () => {
    if (!input.password || input.password.length < 8) {
      toast.error("Password should more than 8 character");
    }

    const url = `${import.meta.env.VITE_SERVER}/user/register`;
    let loadingToast = toast.loading("Registering...");
    axios
      .post(url, {
        name: input.name,
        email: input.email,
        password: input.password,
        dob: input.dob,
      })
      .then(({ data }) => {
        console.log(data);
        const expiresTimestamp = Math.floor(
          new Date(data.options.expires).getTime() / 1000
        );
        data.options.expires = expiresTimestamp;
        navigate("/");
        Cookies.set("token", data.token, data.options);
        setInput("");
        return toast.success("Register successfully");
      })
      .catch((err) => {
        console.log(err);
        return toast.error("Error while creating account");
      })
      .finally(() => {
        toast.dismiss(loadingToast);
      });
  };

  return (
    <>
      <div className="header flex">
        <button
          className="w-3"
          onClick={() => setShowSignupPortal((prev) => !prev)}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <div className="w-10 mx-auto">
          <Twitterlogo />
        </div>
      </div>
      <div className="w-full mt-4 md:w-[70%] mx-auto">
        <h2 className="text-3xl">You'll need a Password</h2>
        <p className="text-grey mb-4">Make sure it's 8 characters or more.</p>

        <div>
          <Input
            placeholder="Password"
            value={input.password}
            onchange={(e) => {
              setInput((prev) => ({ ...prev, password: e.target.value }));
            }}
            type="password"
          />
        </div>

        <div className="mt-24">
          <p className="text-sm text-grey my-1">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use. X may use your contact information, including
            your email address and phone number for purposes outlined in our
            Privacy Policy, like keeping your account secure and personalizing
            our services, including ads. Learn more. Others will be able to find
            you by email or phone number, when provided, unless you choose
            otherwise here.
          </p>
        </div>

        <button
          className="bg-black py-3 w-full rounded-full text-center text-white font-medium mt-8 hover:bg-black/90 disabled:bg-black/40 "
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default CreateAccountPassword;
