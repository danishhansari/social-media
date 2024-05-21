import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import { useState } from "react";
const TweetInput = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setInput(input.value);
  };

  return (
    <>
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
            defaultValue={input}
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
      <div className="text-right">
        <button className="bg-primary hover:bg-primary/80 text-white px-4 py-1 rounded-full">
          Post
        </button>
      </div>
    </>
  );
};

export default TweetInput;
