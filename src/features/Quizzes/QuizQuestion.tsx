import { useAppSelector } from "../../hooks/reduxHooks";

type Question = {
  question: string;
  options: string[];
  answer: string;
}[];

type QuestionTypes = {
  question: string;
  quizIndex: number;
  questions: Question;
};
const QuizQuestion = ({ question, quizIndex, questions }: QuestionTypes) => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const score = useAppSelector((store) => store.quiz.score);
  return (
    <div className="lg:flex-1 flex flex-col justify-between gap-5 lg:gap-0 w-full">
      <p className="text-[1.3rem] mb-5">
        Question {quizIndex + 1} of {questions.length}
      </p>
      <h4
        className={`leading-[3rem] font-semibold ${
          darkMode ? "text-white" : "text-text-color"
        } `}
      >
        {question}
      </h4>
      {/* progress bar */}
      <div className="lg:mt-[50%]">
        <div
          className={`w-full ${
            darkMode ? "bg-darkBg" : "bg-white"
          } rounded-full h-2 `}
        >
          <div
            className="bg-medium-purple h-2 rounded-full"
            style={{ width: `${(score / 10) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
