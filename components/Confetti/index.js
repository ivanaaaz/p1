const Confetti = ({ className, children }) => {
    return (
      <div
        className={`svg hide absolute -top-20 right-12 pointer-events-none ${className || ''}`}
      >
        {children}
      </div>
    );
  };
  export default Confetti;
  