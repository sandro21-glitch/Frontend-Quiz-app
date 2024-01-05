import Subjects from "../features/Home/Subjects";
import Welcome from "../features/Home/Welcome";
import QuizStart from "../features/Quizzes/QuizStart";
import { useAppSelector } from "../hooks/reduxHooks";

const Home = () => {
  const isActiveQuiz = useAppSelector((store) => store.quiz.isActiveQuiz);
  return (
    <section className="section-center mx-auto mt-[2.5rem] lg:mt-[5rem]">
      {!isActiveQuiz ? (
        <div className="flex items-start flex-col md:flex-row">
          <Welcome />
          <Subjects />
        </div>
      ) : (
        <QuizStart />
      )}
    </section>
  );
};

export default Home;
