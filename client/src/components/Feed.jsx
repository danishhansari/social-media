import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";
const Feed = () => {
  const token = Cookies.get("token");
  const [tweets, setTweets] = useState([]);

  const getTweets = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/tweet`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
