import axios from "axios";
import { currentUserAtom } from "../states/atom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";
const Feed = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const [tweets, setTweets] = useState([]);

  const getTweets = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/tweet`, {
        headers: {
          Authorization: `Bearer ${currentUser.accessToken}`,
        },
      })
      .then(({ data }) => {
        setTweets([...data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <div>Tweets</div>
      <div>
        {tweets.map((tweet) => {
          console.log(tweet?.user?.profile_img);
          console.log(tweet?.user?.username);
        })}
        {Array.isArray(tweets) &&
          tweets.map((tweet) => {
            return (
              <Tweet
                key={tweet._id}
                tweet={tweet.tweet}
                profile_img={tweet.user.profile_img}
                username={tweet.user.username}
                name={tweet.user.name}
              />
            );
          })}
      </div>
    </>
  );
};

export default Feed;
