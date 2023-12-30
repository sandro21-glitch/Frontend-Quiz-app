import sunIcon from "/icon-sun-dark.svg";
import moonIcon from "/icon-moon-dark.svg";
import sunIconLight from "/icon-sun-light.svg";
import moonIconLight from "/icon-moon-light.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import { useAppSelector } from "../hooks/reduxHooks";
const Navbar = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);
  return (
    <header className="section-center pt-0" style={{ paddingTop: "5rem" }}>
      <nav className="flex-between">
        <img src="" alt="logo" className="invisible" />
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
