import { subjectsList } from "../constants/subjecList";

export const findSubjectColor = (title: string): string => {
  const subColor = subjectsList.find(
    (subject) => subject.subject.toLowerCase() === title.toLowerCase()
  );

  return subColor?.bgColor || "bg-none";
};
