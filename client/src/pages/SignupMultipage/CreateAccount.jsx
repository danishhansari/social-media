import Input from "../../components/Input";
import { useRecoilState } from "recoil";
import { signupAtom } from "../../states/atom";
import Twitterlogo from "../../components/Twitterlogo";
import closeIcon from "../../assets/close.png";
import { toast } from "react-hot-toast";
import axios from "axios";

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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CreateAccount = ({ setCurrentPage, setShowSignupPortal }) => {
  const [input, setInput] = useRecoilState(signupAtom);

  const handleSubmit = () => {
    console.log(input);

    if (
      !input.name ||
      !input.email ||
      !input.dob.month ||
      !input.dob.day ||
      !input.dob.year
    ) {
      return toast.error("All fields is required");
    }

    const isEmail = emailRegex.test(input.email);

    if (!isEmail) {
      return toast.error("Email is invalid");
    }

    const url = `${import.meta.env.VITE_SERVER}/user/user-exist`;

    axios
      .post(url, { email: input.email })
      .then(({ data }) => {
        if (data.userExist) {
          return toast.error("Email is already exists");
        } else {
          setInput((prev) => ({ ...prev, isEmail: isEmail }));
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
      <div className="w-full mt-2 md:w-[70%] mx-auto">
        <h2 className="text-3xl my-4">Create your account</h2>

        <div className="my-4">
          <Input
            placeholder="Name"
            defaultValue={input.name}
            value={input.name}
            onchange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
          />
        </div>

        <div>
          <Input
            placeholder="Email"
            value={input.email}
            onchange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
          />
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
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  dob: { ...prev.dob, month: e.target.value },
                }))
              }
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
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  dob: { ...prev.dob, day: e.target.value },
                }))
              }
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
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  dob: { ...prev.dob, year: e.target.value },
                }))
              }
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
            onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CreateAccount;
