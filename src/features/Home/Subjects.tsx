import htmlLogo from "/icon-html.svg";
import cssLogo from "/icon-css.svg";
import jsLogo from "/icon-js.svg";
import accessibilityLogo from "/icon-accessibility.svg";
const Subjects = () => {
  return (
    <section className="md:flex-1 w-full">
      <ul className="w-full flex flex-col gap-5 items-start">
        <li className=" bg-white p-5 rounded-[1rem] w-full text-left flex items-center gap-5 cursor-pointer shadow-sm">
          <img
            src={htmlLogo}
            alt="html logo"
            className="bg-html-bg w-[2.5rem] h-[2.5rem] p-1 rounded-[.3rem]"
          />
          <p className="font-bold text-[1.5rem] text-text-color">HTML</p>
        </li>
        <li className=" bg-white p-5 rounded-[1rem] w-full text-left flex items-center gap-5 cursor-pointer shadow-sm">
          <img
            src={cssLogo}
            alt="css logo"
            className="bg-css-bg w-[2.5rem] h-[2.5rem] p-1 rounded-[.3rem]"
          />
          <p className="font-bold text-[1.5rem] text-text-color">CSS</p>
        </li>
        <li className=" bg-white p-5 rounded-[1rem] w-full text-left flex items-center gap-5 cursor-pointer shadow-sm">
          <img
            src={jsLogo}
            alt="js logo"
            className="bg-js-bg w-[2.5rem] h-[2.5rem] p-1 rounded-[.3rem]"
          />
          <p className="font-bold text-[1.5rem] text-text-color">JavaScript</p>
        </li>
        <li className=" bg-white p-5 rounded-[1rem] w-full text-left flex items-center gap-5 cursor-pointer shadow-sm">
          <img
            src={accessibilityLogo}
            alt="accessibility logo"
            className="bg-accessibility-bg w-[2.5rem] h-[2.5rem] p-1 rounded-[.3rem]"
          />
          <p className="font-bold text-[1.5rem] text-text-color capitalize">
            Accessibility
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Subjects;
