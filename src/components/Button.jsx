// eslint-disable-next-line react/prop-types
export const PrimaryButton = ({ rest, children }) => {
  return (
    <button
      className="bg-customBlack hover:bg-galacticBlue rounded-full font-bold text-[14px] text-lightCream leading-[28px] py-2 px-4 transition-all duration-75"
      {...rest}
    >
      {children}
    </button>
  );
};
// eslint-disable-next-line react/prop-types
export const SecondaryButton = ({ rest, children }) => {
  return (
    <button
      className="bg-lightRed hover:bg-summerYellow rounded-full font-bold text-[14px] text-lightCream leading-[28px] py-2 px-4 transition-all duration-75"
      {...rest}
    >
      {children}
    </button>
  );
};
