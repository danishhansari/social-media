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
import SmallLoader from "./loading/SmallLoader";
import { getFullYear, getMonthAndYear } from "../common";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../states/atom";
import { AiOutlineMessage } from "react-icons/ai";
import Tweet from "./Tweet";
import Cookies from "js-cookie";

const ProfileSection = () => {
  const { profile } = useParams();
  const [user, setUser] = useState({});
  const [profileLoading, setProfileLoading] = useState(true);
  const [userTweetLoading, setUserTweetLoading] = useState(true);
  const [userTweet, setUserTweet] = useState([]);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const token = Cookies.get("token");

  const fetchUserTweet = (id) => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/${id}/get-user-tweet`)
      .then(({ data }) => {
        setUserTweet(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserTweetLoading(false);
      });
  };

  const fetchUser = (username) => {
    setProfileLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER}/${username}`)
      .then(({ data: { ...data } }) => {
        setUser({ ...data });
        console.log(data);
        fetchUserTweet(data._id);
      })
      .catch((err) => {
        console.log(err);
        return toast.error("User not found 404");
      })
      .finally(() => {
        setProfileLoading(false);
      });
  };

  const followUser = (id) => {
    axios
      .patch(
        `${import.meta.env.VITE_SERVER}/user/follow`,
        {
          toFollow: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        const isFollowing = user.follower.includes(id);
        console.log(isFollowing);
        setUser((prev) => {
          return {
            ...prev,
            follower: isFollowing
              ? prev.follower.filter((followerId) => followerId !== id)
              : [...prev.follower, id],
          };
        });

        setCurrentUser((prev) => {
          return {
            ...prev,
            following: isFollowing
              ? prev.following.filter((followerId) => followerId !== id)
              : [...prev.following, id],
          };
        });

        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser(profile);
  }, [profile]);

  return (
    <>
      {profileLoading && <SmallLoader />}

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

        <img src={user.banner} alt="" className="w-full max-h-[150px]" />

        <div className="flex justify-between items-center px-4 md:px-6">
          <img
            src={user.profile_img}
            className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover border-4 border-white -mt-8 md:-mt-16 relative z-10"
            alt={`${user.name} profile image`}
          />
          <div className="mt-4">
            {currentUser.username === user.username ? (
              <button className="rounded-full border border-grey px-4 py-1">
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-4">
                <button className="hover:bg-lightgrey p-2 rounded-full">
                  <AiOutlineMessage size={20} />
                </button>
                <button
                  className="bg-black text-white px-4 rounded-full hover:bg-black/70 transition-colors"
                  onClick={() => followUser(user._id)}
                >
                  Follow
                </button>
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
        {userTweetLoading && <SmallLoader className="mx-auto mt-8 w-8" />}

        {!userTweetLoading && !userTweet.length && (
          <p className="text-center text-grey mt-4">
            {user.name} Don't have any tweet
          </p>
        )}

        {userTweet &&
          userTweet.map((tweet) => {
            return (
              <Tweet
                key={tweet._id}
                tweet={tweet.tweet}
                profile_img={tweet.user.profile_img}
                username={tweet.user.username}
                name={tweet.user.name}
                replies={tweet.replies}
                like={tweet.like}
                bookmark={tweet.bookmark}
                id={tweet._id}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProfileSection;
