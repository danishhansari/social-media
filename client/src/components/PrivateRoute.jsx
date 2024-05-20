import axios from "axios";
import { useSetRecoilState } from "recoil";
import { currentUserAtom } from "../states/atom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "./Loader";

const PrivateRoute = ({ component }) => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    } else {
      axios
        .get(`${import.meta.env.VITE_SERVER}/user/get-current-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data: { ...data } }) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {component}
    </>
  );
};

export default PrivateRoute;