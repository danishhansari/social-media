import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signinAtom } from "../../states/atom";
const Password = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);
  console.log(input)
  return (
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
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
     
      <p className="text-grey mt-24">
        Dont have an account? <span className="text-primary">Sign up</span>
      </p>
    </div>
  );
};

export default Password;
