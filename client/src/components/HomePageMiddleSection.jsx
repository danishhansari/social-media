import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserAtom, sidebarToggle } from "../states/atom";
import Twitterlogo from "./Twitterlogo";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";

const HomePageMiddleSection = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const setShowSidebar = useSetRecoilState(sidebarToggle);
  console.log(currentUser);
  return (
    <>
      <div className="w-full border-r border-grey">
        <div className="flex justify-between px-4 py-2">
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
        <div className="h-12 flex w-full justify-around border-b border-grey">
          <button className="border-b-4 h-full border-primary">For you</button>
          <button className="border-b-4 h-full border-primary">
            Following
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageMiddleSection;
