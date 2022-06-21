import '../../tailwind.config';

const Button = (props) => {
  const { className, ...rest } = props;
  return (
    
    <button
      className={`lg:ml-32 md:ml-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-500 ${className}`}
      {...rest}
    />   
  );
};

export default Button;