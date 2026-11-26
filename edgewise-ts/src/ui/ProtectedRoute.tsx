import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";
import Loading from "./Loading";
import type { ReactNode } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-bg-400);
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ProtectedRoute = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRoute) {
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
