const Card = ({ className, children }) => {
  return (
    <div
      className={`overflow-hidden shadow border rounded-md ${className || ''}`}
    >
      {children}
    </div>
  );
};
export default Card;
