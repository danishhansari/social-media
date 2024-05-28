import Sidebar from "../components/Sidebar";
import HomePageRightSection from "../components/home/HomePageRightSection";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../states/atom";
import SmallLoader from "../components/loading/SmallLoader";
import { Toaster } from "react-hot-toast";
import Tweet from "../components/Tweet";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useFetchUserBookmark } from "../hooks/useFetchUserBookmark";

const BookmarkPage = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const { bookmarks, error, loading } = useFetchUserBookmark();

  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />

        <div className="w-full border-r border-grey">
          <div className="border-b border-grey bg-white/30 backdrop-blur-md flex items-center px-4 gap-6">
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-grey/20 transition-colors"
            >
              <FaArrowLeft size={20} />
            </Link>
            <div>
              <p className="text-black font-semibold">Bookmark</p>
              <p className="text-md text-grey font-medium">
                @{currentUser.username}
              </p>
            </div>
          </div>

          {loading && <SmallLoader className="w-8 mt-4 mx-auto" />}

          {error && (
            <p className="text-center text-grey mt-4">
              Error while fetching user bookmark tweet
            </p>
          )}

          {!loading && !bookmarks.length && (
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
