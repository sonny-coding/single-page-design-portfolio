// eslint-disable-next-line react/prop-types
const Button = ({ color, rest, children }) => {
  return (
    <button
      className={`${color} rounded-full font-bold text-[14px] text-lightCream leading-[28px] py-1 px-4`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
