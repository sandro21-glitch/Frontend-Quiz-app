import { useAppSelector } from "../../hooks/reduxHooks";
import SingleQuizLetters from "./SingleQuizLetters";

type SingleQuizTypes = {
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
  letters: string[];
  options: string[];
  setActiveOption: (text: string) => void;
  activeOption: string;
};
const SingleQuiz = ({
  isCorrectAnswer,
  isWrongAnswer,
  letters,
  options,
  setActiveOption,
  activeOption,
}: SingleQuizTypes) => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const { userAnswer } = useAppSelector((store) => store.quiz);
  return (
    <article className="w-full flex flex-col gap-5 items-start">
      {options.map((option, index) => {
        return (
          <button
            type="button"
            disabled={userAnswer !== ""}
            onClick={() => setActiveOption(option)}
            key={index}
            className={`group ${darkMode ? "bg-darkBg" : "bg-white"} ${
              activeOption === option && userAnswer !== option
                ? " border-medium-purple"
                : isCorrectAnswer && option === userAnswer
                ? " border-green-bg"
                : isWrongAnswer && option === userAnswer
                ? " border-red-bg"
                : userAnswer
                ? "border-transparent cursor-not-allowed"
                : " hover:border-medium-purple border-transparent"
            } p-5 rounded-[1rem] w-full text-left flex items-center
  gap-7 cursor-pointer border-[3px] shadow-lg outline-[3px]  transition-all ease-linear duration-150`}
            style={{ cursor: userAnswer !== "" ? "not-allowed" : "pointer" }}
          >
            <SingleQuizLetters
              isCorrectAnswer={isCorrectAnswer}
              isWrongAnswer={isWrongAnswer}
              option={option}
              activeOption={activeOption}
              letters={letters}
              userAnswer={userAnswer}
              index={index}
            />

            <span
              className={`text-[1.8rem] font-medium ${
                darkMode ? "text-white" : "text-text-color"
              }`}
            >
              {option}
            </span>
          </button>
        );
      })}
    </article>
  );
};

export default SingleQuiz;
