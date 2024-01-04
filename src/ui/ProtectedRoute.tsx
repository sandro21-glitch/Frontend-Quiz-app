import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { ReactNode, useEffect } from "react";
interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const isCompleted = useAppSelector((store) => store.quiz.isCompleted);

  useEffect(() => {
    if (!isCompleted) {
      // redirect to the homepage if not completed
      return navigate("/");
    }
  }, [isCompleted]);

  return children;
};

export default ProtectedRoute;
