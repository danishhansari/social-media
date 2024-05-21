import { Link } from "react-router-dom";

const Tweet = ({ profile_img, username, name, tweet }) => {
  return (
    <>
      <div className="flex w-full gap-2 p-2 border-t border-lightgrey">
        <img
          className="w-12 rounded-full"
          src={profile_img}
          alt={`${username} profile pic`}
        />
        <div className="flex flex-col">
          <div>
            <Link to={`/${username}`} className="font-semibold">
              {name}
            </Link>
            <span> {username}</span>
          </div>
          <p className="tweet">{tweet}</p>
        </div>
      </div>
    </>
  );
};

export default Tweet;
