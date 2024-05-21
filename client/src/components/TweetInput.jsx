import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import { useState } from "react";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const TweetInput = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const [input, setInput] = useState("");
  const token = Cookies.get("token");

  const handleInput = (e) => {
    e.preventDefault();
    const input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setInput(input.value);
  };

  const submitTweet = (e) => {
    console.log(input);
    e.target.setAttribute("disabled", true);
    if (!input.length) {
      return toast.error("tweet cannot be empty");
    }
    const tweetSchema = z.string().min(1).max(256);
    try {
      tweetSchema.parse(input);
      axios
        .post(
          `${import.meta.env.VITE_SERVER}/user/tweet`,
          {
            tweet: input,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          setInput("");
          return toast.success("tweet successfully");
        })
        .catch((error) => {
          console.log(error);
          return toast.error(error.message);
        })
        .finally(() => {
          e.target.removeAttribute("disabled");
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full flex px-2 py-1 gap-2">
        <div>
          <img
            className="w-10 rounded-full"
            src={currentUser.profile_img}
            alt=""
          />
        </div>
        <div className="relative w-full">
          <textarea
            className="text-2xl text-black px-2 w-full focus:outline-none"
            placeholder="What is happening?!"
            name="tweet"
            id="tweet"
            value={input}
            onChange={handleInput}
          />
          <p
            className={`absolute bottom-0 -left-10 md:bottom-2 md:right-2 ${
              input.length > 256 ? "text-red" : "text-black"
            }`}
          >
            {256 - input.length}
          </p>
        </div>
      </div>
      <div className="text-right px-2 py-2 border-b border-lightgrey">
        <button
          onClick={submitTweet}
          disabled={input.length > 256 ? true : false}
          className="bg-primary disabled:bg-primary/60 hover:bg-primary/80 text-white px-4 py-1 rounded-full"
        >
          Post
        </button>
      </div>
    </>
  );
};

export default TweetInput;
