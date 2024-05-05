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

const ProfileSection = () => {
  const { profile } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUser = (username) => {
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
            <p className="text-sm text-grey font-medium">{"User.postCount"}</p>
          </div>
        </div>

        <img src="./banner.jpeg" alt="" className="w-full max-h-[300px]" />

        <div className="flex justify-between items-center px-6">
          <img
            src="./profilepic.jpeg"
            className="rounded-full w-32 h-32 object-cover border-4 border-black -mt-16 relative z-10"
            alt=""
          />
          <div>
            <button className="rounded-full border border-grey px-4 py-1">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="user-profile px-4 mt-4">
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="text-grey">@{user.username}</p>
          <p className="my-2">{"User.Bio"}</p>

          <div className="flex flex-wrap gap-3">
            <p className="text-grey">
              <MdOutlineLocationOn className="inline-block" />
              {"user.location"}
            </p>
            <p className="text-grey">
              <FaLink className="inline-block mr-1" />
              <a
                href="http://www.google.com"
                className="text-primary"
                target="_blank"
              >
                {"user website"}
              </a>
            </p>

            <p className="text-grey">
              <BsBalloon className="inline-block" />
              {"user Birth Day"}
            </p>
          </div>

          <div className="flex">
            <p className="text-grey">
              <MdOutlineDateRange className="inline-block" />
              {"User Date of joining"}
            </p>
            <p className="text-grey">
              <MdOutlineVerifiedUser className="inline-block" /> Verified email
            </p>
          </div>

          <div className="flex mt-4 gap-4">
            <p className="text-grey">
              <b className="text-black mr-1">{"user follower"}</b>
              Following
            </p>
            <p className="text-grey hover:border border-black">
              <b className="text-black mr-1">{"user follower"}</b>
              Followers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
