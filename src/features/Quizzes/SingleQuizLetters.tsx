type LettersProps = {
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
  option: string;
  activeOption: string;
  letters: string[];
  userAnswer: string;
  index: number;
};

const SingleQuizLetters = ({
  isCorrectAnswer,
  isWrongAnswer,
  option,
  activeOption,
  letters,
  userAnswer,
  index,
}: LettersProps) => {
  return (
    <span
      className={`font-semibold text-[2rem] px-[.79rem] py-[.3rem] rounded-[.5rem]  ${
        isCorrectAnswer && option === userAnswer
          ? "bg-green-bg text-white"
          : isWrongAnswer && option === userAnswer
          ? "bg-red-bg text-white"
          : isCorrectAnswer || (isWrongAnswer && option !== userAnswer)
          ? " bg-option-bg group-hover:bg-none"
          : activeOption === option && userAnswer !== option
          ? "bg-medium-purple text-white"
          : "bg-option-bg group-hover:text-medium-purple group-hover:bg-light-purple"
      } `}
    >
      {letters[index]}
    </span>
  );
};

export default SingleQuizLetters;
