import { Link } from "react-router-dom";
const ProfileFlatCard = ({
  _id,
  username,
  profile_img,
  name,
  followBtn = false,
}) => {
  return (
    <Link
      key={_id}
      to={`/${username}`}
      className={`${followBtn ? "group" : "hover:bg-lightgrey"} px-4 py-2`}
    >
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-full" src={profile_img} alt={name} />
        <div>
          <p className="text-black font-semibold group-hover:border-b border-grey transition-all">{name}</p>
          <p className="text-darkgrey">@{username}</p>
        </div>
        {followBtn ? (
          <button className="bg-black text-white px-2 py-1 rounded-full">
            Follow
          </button>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default ProfileFlatCard;
