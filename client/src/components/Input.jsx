const Input = ({
  type,
  placeholder,
  disable = false,
  value,
  onchange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disable}
      value={value}
      onChange={onchange}
      className="py-3 w-full pl-2 rounded-md text-xl focus:outline-none border-grey border focus:border-primary focus:border-2"
    />
  );
};

export default Input;
