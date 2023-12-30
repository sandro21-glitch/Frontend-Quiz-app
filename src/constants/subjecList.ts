import htmlLogo from "/icon-html.svg";
import cssLogo from "/icon-css.svg";
import jsLogo from "/icon-js.svg";
import accessibilityLogo from "/icon-accessibility.svg";
type subjectTypes = {
  id: number;
  subject: string;
  logo: string;
  bgColor: string;
};
export const subjectsList: subjectTypes[] = [
  {
    id: 1,
    subject: "HTML",
    logo: htmlLogo,
    bgColor: "#FFF1E9",
  },
  {
    id: 2,
    subject: "CSS",
    logo: cssLogo,
    bgColor: "#E0FDEF",
  },
  {
    id: 3,
    subject: "JavaScript",
    logo: jsLogo,
    bgColor: "#EBF0FF",
  },
  {
    id: 4,
    subject: "Accessibility",
    logo: accessibilityLogo,
    bgColor: "#F6E7FF",
  },
];
