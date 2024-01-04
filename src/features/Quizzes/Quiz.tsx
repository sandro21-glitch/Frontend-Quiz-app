import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  nextQuiz,
  setIsChecked,
  setUserAnswer,
  updateUserScore,
} from "./quizSlice";
import { generateLetters } from "./utils/GenerateLetters";
import Button from "../../ui/Button";
import ErrorMsg from "./ErrorMsg";
type QuizTypes = {
  options: string[];
};

const Quiz = ({ options }: QuizTypes) => {
  const letters = generateLetters(options.length);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const { answer, userAnswer, isChecked } = useAppSelector(
    (store) => store.quiz
  );

  const [activeOption, setActiveOption] = useState("");

  const handleCheckCorrectAnswer = (): void => {
    if (activeOption === "") {
      dispatch(setIsChecked(false));
    } else {
      dispatch(setUserAnswer(activeOption));
      dispatch(setIsChecked(true));
      dispatch(updateUserScore());
    }
  };

  const handleNextQuiz = () => {
    dispatch(nextQuiz());
  };

  useEffect(() => {
    setActiveOption("");
  }, [answer]);

  const isCorrectAnswer = userAnswer === answer;
  const isWrongAnswer = userAnswer !== answer && userAnswer === activeOption;
  return (
    <section className="md:flex-1 w-full">
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
              <span
                className={`font-semibold text-[2rem] px-[.79rem] py-[.3rem] rounded-[.5rem]  ${
                  isCorrectAnswer && option === userAnswer
                    ? "bg-green-bg text-white"
                    : isWrongAnswer && option === userAnswer
                    ? "bg-red-bg text-white"
                    : isCorrectAnswer ||
                      (isWrongAnswer && option !== userAnswer)
                    ? " bg-option-bg group-hover:bg-none"
                    : activeOption === option && userAnswer !== option
                    ? "bg-medium-purple text-white"
                    : "bg-option-bg group-hover:text-medium-purple group-hover:bg-light-purple"
                } `}
              >
                {letters[index]}
              </span>
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

      {userAnswer ? (
        <Button type="Next Question" func={handleNextQuiz} />
      ) : (
        <Button type="Submit Answer" func={handleCheckCorrectAnswer} />
      )}

      {!isChecked ? <ErrorMsg /> : null}
    </section>
  );
};

export default Quiz;
