const Select = (props) => {
  const { className, ...rest } = props;
  return (
    <select
      className={`border shadow rounded border-gray-300 px-2 py-1 ${className}`}
      {...rest}
    />
  );
};

export default Select;
