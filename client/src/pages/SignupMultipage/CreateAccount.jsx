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

const CreateAccount = ({ setCurrentPage }) => {
  const [input, setInput] = useRecoilState(signinAtom);
  const [isEmail, setIsEmail] = useState(true);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, email: e.target.value }));
  };
  return (
    <>
      <div className="w-full mt-2 md:w-[70%] mx-auto">
        <h2 className="text-3xl my-4">Create your account</h2>

        <div className="my-4">
          <Input
            placeholder="Name"
            value={input.email}
            onchange={handleInput}
            type="text"
          />
        </div>

        <div>
          <Input
            placeholder={isEmail ? "Email" : "Phone"}
            value={input.email}
            onchange={handleInput}
            type={isEmail ? "email" : "tel"}
          />
          <button
            className="text-primary my-2 block ml-auto hover:underline"
            onClick={() => setIsEmail((prev) => !prev)}
          >
            Use {isEmail ? "phone" : "email"} Instead
          </button>
        </div>

        <div>
          <h3 className="font-bold">Date of birth</h3>
          <p className="text-sm text-grey my-1">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <div className="flex items-center gap-4 my-4">
            <select
              name="month"
              id="month"
              className="py-2 px-4 border-grey border bg-white rounded-sm w-full text-black"
            >
              <option value="" className="text-white bg-white hidden">
                Month
              </option>
              {monthOption.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>

            <select
              name="day"
              id="day"
              className="py-2 px-4 border-grey border bg-white rounded-sm w-full text-black"
            >
              <option value="" className="text-white bg-white hidden">
                Day
              </option>
              {[...Array(31)].map((_, index) => (
                <option value={index + 1} key={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <select
              name="year"
              id="year"
              className="py-2 px-4 border-grey border bg-white rounded-sm w-full text-black"
            >
              <option value="" className="text-white bg-white hidden">
                Year
              </option>
              {[...Array(startYear - endYear + 1)].map((_, index) => (
                <option value={startYear - index} key={startYear - index}>
                  {startYear - index}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="bg-black py-3 w-full rounded-full text-center text-white font-medium mt-8 hover:bg-black/90 disabled:bg-black/40 "
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CreateAccount;
