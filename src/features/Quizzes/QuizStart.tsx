import { useAppSelector } from "../../hooks/reduxHooks";
import Quiz from "./Quiz";
import QuizQuestion from "./QuizQuestion";

const QuizStart = () => {
  const { quizzes, index } = useAppSelector((store) => store.quiz);

  return (
    <div>
      {quizzes.map((quiz, quizIndex) => {
        const { questions } = quiz;
        const { question, answer, options } = questions[index];
        // console.log(questions);
        return (
          <div
            className="flex items-start flex-col md:flex-row gap-20"
            key={quizIndex}
          >
            <QuizQuestion
              question={question}
              quizIndex={index}
              questions={questions}
            />
            <Quiz options={options} />
          </div>
        );
      })}
    </div>
  );
};

export default QuizStart;
