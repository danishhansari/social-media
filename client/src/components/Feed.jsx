import Tweet from "./Tweet";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pageAtom, tweetsAtom } from "../states/atom";
import { useFetchTweet } from "../hooks/useFetchTweets";
import SmallLoader from "../components/loading/SmallLoader";
import { useEffect } from "react";

const Feed = () => {
  const tweets = useRecoilValue(tweetsAtom);
  const { loading, error } = useFetchTweet();
  const setPage = useSetRecoilState(pageAtom);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading && <SmallLoader />}

      {error && <p>Error while fetching tweets</p>}

      {tweets &&
        tweets.map((tweet) => {
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
    </>
  );
};

export default Feed;
