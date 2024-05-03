import Cookies from "js-cookie";
import Twitterlogo from "./Twitterlogo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Loader = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      console.log(token);
    }
  }, [token, navigate]);

  return (
    <div className="bg-white flex h-screen items-center justify-center">
      <div className="w-24">
        <Twitterlogo />
      </div>
    </div>
  );
};

export default Loader;
