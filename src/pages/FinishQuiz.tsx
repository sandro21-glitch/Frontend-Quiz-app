import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { resetQuiz } from "../features/Quizzes/quizSlice";
import { findSubjectColor } from "../utils/findSubColor";
const FinishQuiz = () => {
  const { icon, title, score } = useAppSelector((store) => store.quiz);
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetQuizData = () => {
    dispatch(resetQuiz());
    navigate("/");
  };
  return (
    <section className="section-center mx-auto mt-[2.5rem] lg:mt-[5rem]">
      <article className="flex items-start flex-col md:flex-row">
        <h1
          className={`w-full mb-5 md:flex-1 ${
            darkMode ? "text-white" : "text-text-color"
          }`}
        >
          Quiz completed <br />{" "}
          <span className="font-semibold">You scored...</span>
        </h1>
        {/* quiz statistic */}
        <div className="w-full md:flex-1">
          <div
            className={`px-5 py-10 ${
              darkMode ? "bg-darkBg" : "bg-white"
            }   rounded-3xl flex justify-center items-center flex-col`}
          >
            <div className="flex items-center gap-3 md:gap-5 mb-5 md:mb-14">
              <img
                src={icon}
                alt={`${title} logo`}
                className="visible w-[2.5rem] h-[2.5rem] p-1"
                style={{ backgroundColor: findSubjectColor(title) }}
              />
              <h4
                className={`${
                  darkMode ? "text-white" : "text-text-color"
                } font-medium`}
              >
                {title}
              </h4>
            </div>
            {/* score */}
            <div className="flex flex-col items-center ">
              <p
                className={`text-[5rem] md:text-[8rem] lg:text-[10rem] font-semibold ${
                  darkMode ? "text-white" : "text-text-color"
                } `}
              >
                {score}
              </p>
              <p className="text-[1.5rem]">out of 10</p>
            </div>
          </div>
          <Button type="Play Again" func={resetQuizData} />
        </div>
      </article>
    </section>
  );
};

export default FinishQuiz;
