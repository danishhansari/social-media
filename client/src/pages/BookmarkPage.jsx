import Sidebar from "../components/Sidebar";
import HomePageRightSection from "../components/HomePageRightSection";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import SmallLoader from "../components/SmallLoader";
import toast, { Toaster } from "react-hot-toast";
import Tweet from "../components/Tweet";

const BookmarkPage = () => {
  const token = Cookies.get("token");
  const currentUser = useRecoilValue(currentUserAtom);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBookmark = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/get-bookmark`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setBookmarks(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while Bookmark");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />

        <div className="w-full border-r border-grey">
          <div className="border-b border-grey sticky top-0 z-40 bg-white/30 backdrop-blur-md px-4">
            <h1 className="text-2xl">Bookmark</h1>
            <p className="text-grey text-md">@{currentUser.username}</p>
          </div>
          {loading && <SmallLoader className="w-8 mt-4 mx-auto" />}

          {!bookmarks.length && (
            <p className="text-center text-grey mt-4">No Bookmark you have</p>
          )}

          {bookmarks &&
            bookmarks.map((bookmark) => {
              console.log(bookmark);
              return (
                <Tweet
                  key={bookmark._id}
                  id={bookmark.tweet._id}
                  profile_img={bookmark.tweet.user.profile_img}
                  username={bookmark.tweet.user.username}
                  name={bookmark.tweet.user.name}
                  tweet={bookmark.tweet.tweet}
                  replies={bookmark.tweet.replies}
                  like={bookmark.tweet.like}
                  bookmark={bookmark.tweet.bookmark}
                />
              );
            })}
        </div>
        <HomePageRightSection />
      </div>
    </>
  );
};

export default BookmarkPage;
