const Input = (props) => {
  const { className, ...rest } = props;
  return (
    <input
      className={`border shadow rounded border-gray-300 px-2 py-1 ${className}`}
      {...rest}
    />
  );
};

export default Input;
