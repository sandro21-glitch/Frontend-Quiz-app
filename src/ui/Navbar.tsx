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
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-medium-purple peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-medium-purple"></div>
            </label>
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
