import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { resetQuiz } from "../features/Quizzes/quizSlice";
const FinishQuiz = () => {
  const { icon, title, score } = useAppSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetQuizData = () => {
    dispatch(resetQuiz());
    navigate("/");
  };
  return (
    <section className="section-center " style={{ marginTop: "5rem" }}>
      <article className="flex items-start flex-col md:flex-row">
        <h1 className="flex-1">
          Quiz completed <br />{" "}
          <span className="font-semibold">You scored...</span>
        </h1>
        {/* quiz statistic */}
        <div className="flex-1">
          <div className="px-5 py-10 bg-white  rounded-3xl flex justify-center items-center flex-col">
            <div className="flex items-center gap-7 mb-14">
              <img src={icon} alt={`${title} logo`} className="visible" />
              <h5 className="text-text-color font-medium">{title}</h5>
            </div>
            {/* score */}
            <div className="flex flex-col items-center leading-[6rem]">
              <p className="text-[10rem] font-semibold text-text-color mb-0">
                {score}
              </p>
              <p className="mb-0 text-[1.5rem]">out of 10</p>
            </div>
          </div>
          <Button type="Play Again" func={resetQuizData} />
        </div>
      </article>
    </section>
  );
};

export default FinishQuiz;
