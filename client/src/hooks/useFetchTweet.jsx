import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const useFetchTweet = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const token = Cookies.get("token");
  useEffect(() => {
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
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  return { tweets, error };
};
export { useFetchTweet };
