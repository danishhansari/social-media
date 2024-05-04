import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signinAtom } from "../../states/atom";
import Twitterlogo from "../../components/Twitterlogo";
import closeIcon from "../../assets/close.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Password = ({ setShowSignInPortal }) => {
  const [input, setInput] = useRecoilState(signinAtom);
  const navigate = useNavigate();
  console.log(input);

  const handleLogin = () => {
    if (!input.password) {
      return toast.error("password is required");
    }

    const url = `${import.meta.env.VITE_SERVER}/user/login`;

    const requestData = input.isEmail
      ? { email: input.email, password: input.password }
      : { username: input.email, password: input.password };

    axios
      .post(url, requestData)
      .then(({ data }) => {
        console.log(data);
        const { options, token } = data;
        const time = new Date(options.expires).getTime();
        Cookies.set("token", token, {
          expires: new Date(time),
        });
        setInput("");
        navigate("/");
        return toast.success("Logged in ");
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="header flex">
        <button
          className="w-3"
          onClick={() => setShowSignInPortal((prev) => !prev)}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <div className="w-10 mx-auto">
          <Twitterlogo />
        </div>
      </div>
      <div className="w-full mt-8 md:w-1/2 mx-auto">
        <h2 className="text-3xl my-4">Enter your password</h2>

        <div className="my-4">
          <Input
            placeholder="email and username"
            value={input.email}
            type="text"
            disable={true}
          />
        </div>

        <div className="my-2">
          <Input
            placeholder="Password"
            value={input.password}
            onchange={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
          />
        </div>
        <p className="text-primary">Forgot password?</p>

        <button
          className="bg-black py-2 w-full rounded-full text-center text-white font-medium mt-8 hover:bg-black/90"
          onClick={handleLogin}
        >
          Next
        </button>

        <p className="text-grey mt-24">
          Dont have an account? <span className="text-primary">Sign up</span>
        </p>
      </div>
    </>
  );
};

export default Password;
