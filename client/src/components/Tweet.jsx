import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import axios from "axios";

const Tweet = ({
  id,
  profile_img,
  username,
  name,
  tweet,
  replies,
  like,
  bookmark,
}) => {
  const handleBookmark = (id) => {
    const token = Cookies.get("token");
    console.log(id);
    axios
      .post(
        `${import.meta.env.VITE_SERVER}/user/bookmark`,
        { tweetID: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-start w-full gap-2 p-2 border-t border-lightgrey">
        <img
          className="w-12 rounded-full"
          src={profile_img}
          alt={`${username} profile pic`}
        />
        <div className="flex flex-col w-full">
          <div>
            <Link to={`/${username}`} className="font-semibold">
              {name}
            </Link>
            <span className="text-grey ml-1"> {username}</span>
          </div>
          <p className="tweet w-full">{tweet}</p>
          <div className="flex px-4 py-1 justify-between items-center w-full">
            <p className="flex items-center gap-1 text-grey text-md">
              <FaRegComment className="text-black" />
              {replies.length}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;