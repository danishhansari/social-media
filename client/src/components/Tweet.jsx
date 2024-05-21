import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";

const Tweet = ({
  profile_img,
  username,
  name,
  tweet,
  replies,
  like,
  bookmark,
}) => {
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
            <p className="flex items-center gap-1 text-grey text-md">
              <CiBookmark className="text-black " />
              {bookmark}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
