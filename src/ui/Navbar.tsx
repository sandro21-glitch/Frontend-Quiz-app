import sunIcon from "/icon-sun-dark.svg";
import moonIcon from "/icon-moon-dark.svg";
import sunIconLight from "/icon-sun-light.svg";
import moonIconLight from "/icon-moon-light.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import { useAppSelector } from "../hooks/reduxHooks";
import { findSubjectColor } from "../utils/findSubColor";
const Navbar = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  const icon = useAppSelector((store) => store.quiz.icon);
  const title = useAppSelector((store) => store.quiz.title);
  return (
    <header className="section-center mx-auto mt-[2rem] lg:mt-[5rem]">
      <nav className="flex-between">
        <div className="flex items-center gap-3 md:gap-7">
          <img
            src={icon}
            alt="logo"
            className={`${icon ? "visible" : "invisible"} w-[2.5rem] h-[2.5rem] p-1`}
            style={{ backgroundColor: findSubjectColor(title) }}
          />
          <h5
            className={`${
              darkMode ? "text-white" : "text-text-color"
            } text-[1rem] md:text-[1.8rem] font-medium`}
          >
            {title}
          </h5>
        </div>
        <ul className="flex gap-5">
          <li>
            <img src={darkMode ? sunIconLight : sunIcon} alt="sun" />
          </li>
          <ThemeSwitcher />
          <li>
            <img src={darkMode ? moonIconLight : moonIcon} alt="moon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
