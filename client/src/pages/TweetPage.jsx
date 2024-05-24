import { Toaster } from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { useFetchTweet } from "../hooks/useFetchTweet";
import { useFetchUser } from "../hooks/useFetchUser";

const TweetPage = () => {
  // const id = useParams();
  const { user, profileLoading, error } = useFetchUser("danish");
  console.log({ user, profileLoading, error });
  return (
    <>
      <Toaster />
      <div className="flex max-w-[1300px] mx-auto bg-white text-black">
        <Sidebar />
        {/* {id} */}
      </div>
    </>
  );
};

export default TweetPage;
