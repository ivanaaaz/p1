const TD = ({ className, children }) => {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap ${className || ''}`}
    >
      {children}
    </td>
  );
};
export default TD;
