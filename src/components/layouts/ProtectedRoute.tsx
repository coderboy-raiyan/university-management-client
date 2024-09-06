import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAppSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return children;
}

export default ProtectedRoute;
