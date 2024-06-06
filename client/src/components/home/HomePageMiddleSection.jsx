import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserAtom, sidebarToggle } from "../../states/atom";
import Twitterlogo from "../Twitterlogo";
import { AiOutlineSetting } from "react-icons/ai";
import TweetInput from "../TweetInput";
import Feed from "../Feed";

const HomePageMiddleSection = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const setShowSidebar = useSetRecoilState(sidebarToggle);
  

  return (
    <>
      <div className="w-full border-r border-grey">
        <div className="md:hidden flex justify-between px-4 py-2">
          <button onClick={() => setShowSidebar((prev) => !prev)}>
            <img
              className="w-8 rounded-full"
              src={currentUser.profile_img}
              alt={currentUser.username}
            />
          </button>
          <div className="w-6">
            <Twitterlogo />
          </div>
          <AiOutlineSetting size={20} />
        </div>
        <div className="h-12 flex w-full justify-around border-b border-grey sticky top-0 z-40 bg-white/30 backdrop-blur-md">
          <button className="border-b-4 h-full border-primary">For you</button>
          <button className="border-b-4 h-full border-primary">
            Following
          </button>
        </div>
        <TweetInput />
        <Feed />
      </div>
    </>
  );
};

export default HomePageMiddleSection;
