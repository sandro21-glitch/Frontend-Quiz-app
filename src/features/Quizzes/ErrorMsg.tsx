import errorImage from "/icon-error.svg";

const ErrorMsg = () => {
  return (
    <div className="flex items-center justify-center text-[1rem] md:text-[1.5rem] text-red-bg mb-5">
      <img src={errorImage} alt="error" />
      <span className="ml-4">Please select an answer</span>
    </div>
  );
};

export default ErrorMsg;
