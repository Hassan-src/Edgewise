import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";
import Loading from "./Loading";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-bg-400);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isAuthenticated, isPending } = useUser();

  if (isPending) {
    return (
      <FullPage>
        <Loading />
      </FullPage>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
