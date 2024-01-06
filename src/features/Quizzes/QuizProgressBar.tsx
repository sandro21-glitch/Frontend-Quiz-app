import { useAppSelector } from "../../hooks/reduxHooks";

const QuizProgressBar = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const score = useAppSelector((store) => store.quiz.score);
  return (
    <div className="lg:mt-[50%]">
      <div
        className={`w-full ${
          darkMode ? "bg-darkBg" : "bg-white"
        } rounded-full h-2 `}
      >
        <div
          className="bg-medium-purple h-2 rounded-full transition-all ease-in duration-200"
          style={{ width: `${(score / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgressBar;
