import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useFetchUser = (username) => {
  const [user, setUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUser = async () => {
      setProfileLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/${username}`
        );
        setUser(data);
        console.log(data);
        // fetchUserTweet(data._id); // Assuming fetchUserTweet is defined somewhere
      } catch (err) {
        console.error(err);
        setError(err);
        toast.error("User not found 404");
      } finally {
        setProfileLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, profileLoading, error };
};

export { useFetchUser };
