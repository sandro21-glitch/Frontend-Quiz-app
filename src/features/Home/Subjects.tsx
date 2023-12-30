import { subjectsList } from "../../constants/subjecList";
import { useAppSelector } from "../../hooks/reduxHooks";
const Subjects = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  return (
    <section className="md:flex-1 w-full">
      <ul className="w-full flex flex-col gap-5 items-start">
        {subjectsList.map((sub) => {
          const { id, subject, logo, bgColor } = sub;
          console.log(bgColor);
          return (
            <li
              key={id}
              className={`${
                darkMode ? "bg-darkBg" : "bg-white"
              } p-5 rounded-[1rem] w-full text-left flex items-center gap-5 cursor-pointer shadow-sm`}
            >
              <img
                src={logo}
                alt={`${subject} logo`}
                style={{ backgroundColor: bgColor }}
                className="w-[2.5rem] h-[2.5rem] p-1 rounded-[.3rem]"
              />
              <p
                className={`font-bold text-[1.5rem] ${
                  darkMode ? "text-white" : "text-text-color"
                }`}
              >
                {subject}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Subjects;
