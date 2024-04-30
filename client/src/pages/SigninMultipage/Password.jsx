import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signinAtom } from "../../atom";
const Password = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, password: e.target.value }));
  };
  return (
    <div className="w-full mt-8 md:w-1/2 mx-auto">
      <h2 className="text-3xl my-4">Enter your password</h2>

      <div className="my-4">
        <Input
          placeholder="Phone, email and username"
          value={input.email}
          type="text"
          disable={true}
        />
      </div>

      <div className="my-2">
        <Input
          placeholder="Password"
          value={input.password}
          onchange={handleInput}
          type="password"
        />
      </div>
      <p className="text-primary">Forgot password?</p>

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
  );
};

export default Password;
