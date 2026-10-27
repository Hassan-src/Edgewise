import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-bg-400);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2.If there is no authenticated user show the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );
  // 3.While loading show loader
  if (isLoading)
    return (
      <FullPage>
        <Loading />
      </FullPage>
    );

  // 4.If there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
