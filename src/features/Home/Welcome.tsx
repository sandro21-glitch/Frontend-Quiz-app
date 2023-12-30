import { useAppSelector } from "../../hooks/reduxHooks";

const Welcome = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  return (
    <div className="md:flex-1">
      <h1
        className={`${darkMode ? "text-white" : "text-color"} mb-10 font-light`}
      >
        Welcome to the <br /> <span className="font-bold">Frontend Quiz!</span>
      </h1>
      <p className="italic mb-10 md:mb-0">Pick a subject to get started.</p>
    </div>
  );
};

export default Welcome;
