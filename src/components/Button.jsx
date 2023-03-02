const Button = ({ variant, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 active:bg-green-700 px-4 py-1 rounded-md text-white whitespace-nowrap"
    >
      {children}
    </button>
  );
};

export default Button;
