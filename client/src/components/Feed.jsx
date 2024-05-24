import Tweet from "./Tweet";
import { useFetchTweet } from "../hooks/useFetchTweet";

const Feed = () => {
  
  const { tweets, error } = useFetchTweet();

  return (
    <>
      <div>
        {error && (
          <p className="text-grey text-center mt-2">
            Error while fetching tweets
          </p>
        )}
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
