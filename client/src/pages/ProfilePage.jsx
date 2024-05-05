import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SmallLoader from "../components/SmallLoader";
import axios from "axios";

const ProfilePage = () => {
  const { profile } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get(`${import.meta.env.VITE_SERVER}/${profile}`)
  //       .then(({ data: { ...data } }) => {
  //         console.log("User Profile", data);
  //         setUser({ ...data });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return toast.error("User not found 404");
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [profile]);

  return (
    <>
      <Toaster />
      <div className="flex">
        <Sidebar />
        {/* {loading && <SmallLoader />} */}
        <div>
          <div className="bg-black">user.namefkdfksjfksjfkj</div>
        </div>
        {/* {console.log(user.name)} */}
      </div>
    </>
  );
};

export default ProfilePage;
