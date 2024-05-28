import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useFetchUserBookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");

  useEffect(() => {
    const getBookmark = () => {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_SERVER}/user/get-bookmark`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setBookmarks(data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getBookmark();
  }, []);

  return { bookmarks, error, loading };
};
export { useFetchUserBookmark };
