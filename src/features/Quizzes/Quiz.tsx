import { useAppSelector } from "../../hooks/reduxHooks";

type QuizTypes = {
  answer: string;
  options: string[];
};

const Quiz = ({ answer, options }: QuizTypes) => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  console.log(answer);
  const letters = ["A", "B", "C", "D"];
  return (
    <form className="md:flex-1 w-full">
      <ul className="w-full flex flex-col gap-5 items-start">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className={`group ${
                darkMode ? "bg-darkBg" : "bg-white"
              }  p-5 rounded-[1rem] w-full text-left flex items-center
           gap-7 cursor-pointer shadow-lg hover:outline hover:outline-medium-purple transition-all ease-linear duration-75`}
            >
              <span className="  font-semibold group-hover:text-medium-purple text-[2rem] px-[.79rem] py-[.3rem] rounded-[.5rem] bg-option-bg group-hover:bg-light-purple">
                {letters[index]}
              </span>
              <span
                className={`text-[1.8rem] font-medium ${
                  darkMode ? "text-white" : "text-text-color"
                }`}
              >
                {option}
              </span>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default Quiz;
