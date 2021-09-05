const Card = ({ className, children }) => {
  console.log(className);
  const a = className || '';
  return (
    <div
      className={`overflow-hidden shadow border rounded-md ${className || ''}`}
    >
      {children}
    </div>
  );
};
export default Card;
