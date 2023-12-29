import sunIcon from "/icon-sun-dark.svg";
import moonIcon from "/icon-moon-dark.svg";
const Navbar = () => {
  return (
    <header className="section-center" style={{ marginTop: "5rem" }}>
      <nav className="flex-between">
        <img src="" alt="logo" />
        <ul className="flex gap-5">
          <li>
            <img src={sunIcon} alt="sun" />
          </li>
          <li>
            <input type="checkbox" name="" id="" />
          </li>
          <li>
            <img src={moonIcon} alt="moon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
