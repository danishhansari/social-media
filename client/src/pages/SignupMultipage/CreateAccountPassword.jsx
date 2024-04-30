import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signinAtom } from "../../atom";
import { useState } from "react";

const monthOption = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const startYear = new Date().getFullYear(); // Get the current year
const endYear = startYear - 120; // Calculate the end year

const CreateAccountPassword = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);
  const [isEmail, setIsEmail] = useState(true);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, email: e.target.value }));
  };
  return (
    <>
      <div className="w-full mt-4 md:w-[70%] mx-auto">
        <h2 className="text-3xl">You'll need a Password</h2>
        <p className="text-grey mb-4">Make sure it's 8 characters or more.</p>

        <div>
          <Input
            placeholder="Password"
            value={input.email}
            onchange={handleInput}
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
          disabled={true}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default CreateAccountPassword;