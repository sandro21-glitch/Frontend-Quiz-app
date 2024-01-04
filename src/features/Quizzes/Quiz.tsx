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
import SingleQuiz from "./SingleQuiz";
type QuizTypes = {
  options: string[];
};

const Quiz = ({ options }: QuizTypes) => {
  const letters = generateLetters(options.length);
  const dispatch = useAppDispatch();
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
      <SingleQuiz
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        letters={letters}
        options={options}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />

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
