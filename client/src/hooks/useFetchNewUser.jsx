import axios from "axios";
import { useEffect, useState } from "react";

const useFetchNewUser = () => {
  const [newUser, setNewUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const newUserProfile = async () => {
      axios
        .get(`${import.meta.env.VITE_SERVER}/user/new-user-profile`)
        .then(({ data }) => {
          setNewUser(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
          console.log(err);
        });
    };
    newUserProfile();
  }, []);
  return { newUser, error, loading };
};

export { useFetchNewUser };
