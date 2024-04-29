const Input = ({ type, placeholder, disable = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disable}
      className="py-3 w-full pl-2 rounded-md text-xl focus:outline-none border-grey border"
    />
  );
};

export default Input;
