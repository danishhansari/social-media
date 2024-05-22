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
        console.log(tweets);
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
      </div>
    </>
  );
};

export default Feed;
