import { Navigate, Outlet } from "react-router-dom";
import { useAccount } from "wagmi";
export const ProtectedRoutes: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isConnected } = useAccount();
  if (!isConnected) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
