import SmallLoader from "./loading/SmallLoader";
import ProfileFlatCard from "./ProfileFlatCard";
import { useFetchNewUser } from "../hooks/useFetchNewUser";

const WhoToFollow = () => {
  const { newUser, error, loading } = useFetchNewUser();
  return (
    <div className="bg-white border-lightgrey shadow-md border rounded-md text-black relative z-10 py-0 mt-8">
      <h1 className="text-2xl font-bold py-1 pl-4 mt-2">Who to Follow</h1>
      <div className="h-56 overflow-auto flex flex-col">
        {loading && <SmallLoader />}

        {error && (
          <p className="text-grey text-center">Error while fetching new User</p>
        )}
        {newUser &&
          newUser.map((user) => {
            return (
              <ProfileFlatCard
                _id={user._id}
                key={user._id}
                username={user.username}
                profile_img={user.profile_img}
                name={user.name}
                followBtn={true}
              />
            );
          })}
      </div>
    </div>
  );
};

export default WhoToFollow;
