import Cookies from "js-cookie";
import Twitterlogo from "./Twitterlogo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { currentUserAtom } from "../states/atom";
import { useSetRecoilState } from "recoil";

const Loader = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserAtom);

  useEffect(() => {
    !token
      ? navigate("/login")
      : axios
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
          });
  }, []);

  return (
    <div className="bg-white flex h-screen items-center justify-center">
      <div className="w-24">
        <Twitterlogo />
      </div>
    </div>
  );
};

export default Loader;
