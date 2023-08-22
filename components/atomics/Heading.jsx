const Heading = ({ className, children }) => {
    return (
      <h1 className={`font-bold text-5xl${className ? " " + className : ""}`}>
        {children}
      </h1>
    );
  };
  
  Heading.h2 = ({ className, children }) => {
    return (
      <h2
        className={`font-semibold text-2xl sm:text-3xl${
          className ? " " + className : ""
        }`}
      >
        {children}
      </h2>
    );
  };
  
  Heading.h3 = ({ className, children }) => {
    return (
      <h3
        className={`font-semibold text-base sm:text-xl${
          className ? " " + className : ""
        }`}
      >
        {children}
      </h3>
    );
  };
  
  export default Heading;
  