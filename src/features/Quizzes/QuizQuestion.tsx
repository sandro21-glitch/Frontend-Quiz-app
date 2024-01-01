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
  return (
    <div className="flex-1">
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
    </div>
  );
};

export default QuizQuestion;
