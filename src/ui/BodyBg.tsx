import { useAppSelector } from "../hooks/reduxHooks";
import patternDesktopBg from "/pattern-background-desktop-light.svg";
import patternTabletBg from "/pattern-background-tablet-light.svg";
// import patternMobileBg from "/pattern-background-mobile-light.svg";

import patternDesktopDarkBg from "/pattern-background-desktop-dark.svg";
import patternTabletDarkBg from "/pattern-background-tablet-dark.svg";
// import patternMobileDarkBg from "/pattern-background-mobile-dark.svg";
import { useEffect } from "react";

const BodyBg = () => {
  const darkMode = useAppSelector((store) => store.home.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "rgb(49 62 81 / 1)";
    } else {
      document.body.style.backgroundColor = "rgb(244 246 250 / 1)";
    }
  }, [darkMode]);

  return (
    <div className="">
      {!darkMode ? (
        <>
          <img
            src={patternDesktopBg}
            alt="pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] hidden lg:block"
          />
          <img
            src={patternTabletBg}
            alt="pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] hidden sm:block lg:hidden"
          />
          <img
            src={patternTabletBg}
            alt="pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] sm:hidden lg:hidden block"
          />
        </>
      ) : (
        <>
          <img
            src={patternDesktopDarkBg}
            alt="dark pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] hidden lg:block"
          />
          <img
            src={patternTabletDarkBg}
            alt="dark pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] hidden sm:block lg:hidden"
          />
          <img
            src={patternTabletDarkBg}
            alt="dark pattern img"
            className="absolute inset-0 -top-[80px] z-[-1] sm:hidden lg:hidden block"
          />
        </>
      )}
    </div>
  );
};

export default BodyBg;
