import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../states/atom";

const useFetchTweet = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const page = useRecoilValue(pageAtom);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER}/user/tweet?page=${page}`)
      .then(({ data }) => {
        setTweets((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return { tweets, error, loading };
};
export { useFetchTweet };
