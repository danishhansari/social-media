import { useEffect, useState } from "react";
import axios from "axios";

const useFetchUserTweet = (id) => {
  const [tweet, setTweet] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserTweet = (id) => {
      axios
        .get(`${import.meta.env.VITE_SERVER}/user/${id}/get-user-tweet`)
        .then(({ data }) => {
          setTweet(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchUserTweet(id);
  }, [id]);

  return {
    tweet,
    loading,
  };
};

export default useFetchUserTweet;
