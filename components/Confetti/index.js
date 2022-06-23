const Confetti = ({ className, children }) => {
    return (
      <div
        className={`hidden sm:block svg hide absolute -top-20 right-24 pointer-events-none ${className || ''}`}
      >
        {children}
      </div>
    );
  };
  export default Confetti;
  