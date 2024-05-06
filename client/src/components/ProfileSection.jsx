import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  MdOutlineLocationOn,
  MdOutlineDateRange,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { FaLink, FaArrowLeft } from "react-icons/fa6";
import { BsBalloon } from "react-icons/bs";
import SmallLoader from "./BigLoader";
import { getFullYear, getMonthAndYear } from "../common";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import { AiOutlineMessage } from "react-icons/ai";

const ProfileSection = () => {
  const { profile } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const currentUser = useRecoilValue(currentUserAtom);

  const fetchUser = (username) => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER}/${username}`)
      .then(({ data: { ...data } }) => {
        console.log("User Profile", data);
        setUser({ ...data });
      })
      .catch((err) => {
        console.log(err);
        return toast.error("User not found 404");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser(profile);
  }, [profile]);

  return (
    <>
      {loading && <SmallLoader />}

      <div className="w-full border-r border-grey">
        <div className="h-12 border-b border-grey flex items-center px-4 gap-6">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-grey/20 transition-colors"
          >
            <FaArrowLeft size={20} />
          </Link>
          <div>
            <p className="text-black font-semibold">{user.name}</p>
            <p className="text-sm text-grey font-medium">
              {user?.post?.length} posts
            </p>
          </div>
        </div>

        <img src={user.banner} alt="" className="w-full max-h-[200px]" />

        <div className="flex justify-between items-center px-4 md:px-6">
          <img
            src={user.profile_img}
            className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover border-4 border-white -mt-8 md:-mt-16 relative z-10"
            alt={`${user.name} profile image`}
          />
          <div className="mt-4">
            {currentUser.accessToken === user.accessToken ? (
              <button className="rounded-full border border-grey px-4 py-1">
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-4">
                <button className="hover:bg-lightgrey p-2 rounded-full">
                  <AiOutlineMessage size={20} />
                </button>
                <button>Follow</button>
              </div>
            )}
          </div>
        </div>

        <div className="user-profile p-4 mt-4 border-b border-lightgrey">
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="text-grey">@{user.username}</p>
          <p className="my-2">{user.bio}</p>

          <div className="flex flex-wrap gap-3">
            <p className="text-grey">
              {user.location ? (
                <>
                  <MdOutlineLocationOn size={20} className="inline-block" />
                  {user.location}
                </>
              ) : (
                ""
              )}
            </p>
            <p className="text-grey">
              <FaLink className="inline-block mr-1" />
              <a href={user.website} className="text-primary" target="_blank">
                {user.website}
              </a>
            </p>

            <p className="text-grey">
              <BsBalloon size={20} className="inline-block" />
              Born {getFullYear(user.dob)}
            </p>
          </div>

          <div className="flex gap-2">
            <p className="text-grey">
              <MdOutlineDateRange size={20} className="inline-block mr-1" />
              Joined {getMonthAndYear(user.createdAt)}
            </p>
            <p className="text-grey">
              <MdOutlineVerifiedUser size={20} className="inline-block" />{" "}
              Verified email
            </p>
          </div>

          <div className="flex mt-4 gap-4">
            <p className="text-grey hover:border-b border-grey cursor-pointer">
              <b className="text-black mr-1">{user?.following?.length}</b>
              Following
            </p>
            <p className="text-grey hover:border-b border-grey cursor-pointer">
              <b className="text-black mr-1">{user?.follower?.length}</b>
              Followers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
