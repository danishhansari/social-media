import { useEffect, useState } from "react";
import axios from "axios";

const useFetchTweet = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/tweet`)
      .then(({ data }) => {
        setTweets([...data]);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { tweets, error, loading };
};
export { useFetchTweet };
