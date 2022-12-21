const Text = ({ className, children }) => {
  return (
    <p
      className={`font-semibold text-sm sm:text-base${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  );
};

Text.small = ({ className, children }) => {
  return (
    <p
      className={`font-medium text-xs sm:text-base${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  );
};

Text.label = ({ className, children }) => {
  return (
    <p
      className={`text-[#615A56] font-normal text-[0.75rem] w-full text-left${
        className ? " " + className : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
