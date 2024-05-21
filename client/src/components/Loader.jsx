import Twitterlogo from "./Twitterlogo";

const Loader = () => {
  return (
    <div className="fixed w-full z-10 bg-white flex h-screen items-center justify-center">
      <div className="w-24">
        <Twitterlogo />
      </div>
    </div>
  );
};

export default Loader;
