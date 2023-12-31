// import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Quiz from "./Quiz";
import QuizQuestion from "./QuizQuestion";

const QuizStart = () => {
  const quizzes = useAppSelector((store) => store.quiz.quizzes);
  //   const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <div>
      {quizzes.map((quiz, index) => {
        const { questions } = quiz;
        const { question, answer, options } = questions[0];
        console.log(questions);
        return (
          <div
            className="flex items-start flex-col md:flex-row gap-20"
            key={index}
          >
            <QuizQuestion
              question={question}
              index={index}
              questions={questions}
            />
            <Quiz answer={answer} options={options} />
          </div>
        );
      })}
    </div>
  );
};

export default QuizStart;
