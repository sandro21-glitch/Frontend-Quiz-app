import { useAppSelector } from "../../hooks/reduxHooks";
import Quiz from "./Quiz";
import QuizQuestion from "./QuizQuestion";

const QuizStart = () => {
  const { quizzes, index } = useAppSelector((store) => store.quiz);

  return (
    <section>
      {quizzes.map((quiz, quizIndex) => {
        const { questions } = quiz;
        const { question, options } = questions[index];
        // console.log(questions);
        return (
          <article
            className="flex items-start flex-col lg:flex-row gap-20"
            key={quizIndex}
          >
            <QuizQuestion
              question={question}
              quizIndex={index}
              questions={questions}
            />
            <Quiz options={options} />
          </article>
        );
      })}
    </section>
  );
};

export default QuizStart;
