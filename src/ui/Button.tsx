type ButtonTypes = {
  type: string;
  func: () => void;
};
const Button = ({ type, func }: ButtonTypes) => {
  return (
    <button
      onClick={func}
      className="mt-7 w-full bg-medium-purple font-bold text-white text-[2rem] p-[1.5rem] rounded-3xl mb-7"
    >
      {type}
    </button>
  );
};

export default Button;
