import { Toaster } from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const TweetPage = () => {
  const id = useParams();
  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        {id}
      </div>
    </>
  );
};

export default TweetPage;
