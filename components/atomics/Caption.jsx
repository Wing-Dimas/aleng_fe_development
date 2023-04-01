const Caption = ({ className, children }) => {
  return (
    <p
      className={`font-normal text-xs sm:text-sm${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  );
};

Caption.small = ({ className, children }) => {
  return (
    <p className={`font-normal text-xs${className ? " " + className : ""}`}>
      {children}
    </p>
  );
};

export default Caption;
