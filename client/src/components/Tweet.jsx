import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { handleBookmark } from "../utils/handleBookmark";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserAtom, tweetsAtom } from "../states/atom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { timeSincePost } from "../common";

const Tweet = ({
  id,
  profile_img,
  username,
  name,
  tweet,
  replies,
  like,
  bookmark,
  createdAt,
}) => {
  const currentUser = useRecoilValue(currentUserAtom);
  const token = Cookies.get("token");
  const setTweets = useSetRecoilState(tweetsAtom);

  const deleteTweet = (id) => {
    axios
      .post(
        `${import.meta.env.VITE_SERVER}/user/delete-tweet`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setTweets((prev) => prev.filter((prev) => prev._id !== id));
        toast.success("Tweet deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(timeSincePost(createdAt));
  return (
    <>
      <div className="flex items-start w-full gap-2 p-2 border-t border-lightgrey">
        <Link to={`/${username}`}>
          <img
            className="w-12 rounded-full"
            src={profile_img}
            alt={`${username} profile pic`}
          />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <div>
              <Link to={`/${username}`} className="font-semibold">
                {name}
              </Link>
              <span className="text-grey ml-1"> @{username}</span>
            </div>
            <p className="text-grey">{timeSincePost(createdAt)}</p>
          </div>
          <p className="tweet w-full">{tweet}</p>
          <div className="flex px-4 py-1 justify-between items-center w-full">
            <p className="flex items-center gap-1 text-grey text-md">
              <FaRegComment className="text-black" />
              {replies?.length}
            </p>
            <p className="flex items-center gap-1 text-grey text-md">
              <GoHeart className="text-black" />
              {like}
            </p>
            <button
              className="flex items-center gap-1 text-grey text-md hover:bg-lightgrey p-1 rounded-full"
              onClick={() => handleBookmark(id)}
            >
              <CiBookmark className="text-black " />
              {bookmark}
            </button>
            {currentUser.username === username && (
              <button className="text-black" onClick={() => deleteTweet(id)}>
                <GoTrash />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
