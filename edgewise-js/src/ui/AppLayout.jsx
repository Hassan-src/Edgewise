import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";
import { useAppMode } from "../context/useAppMode";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$sideType === "expand" ? "16rem 1fr" : "5rem 1fr"};
  grid-template-rows: auto minmax(0, 1fr);
  height: 100dvh;
  position: relative;
  @media (max-width: 950px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas:
      "header"
      "main";
  }
`;

const Main = styled.main`
  padding: var(--space-16) 0 var(--space-16);
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-scroll-thumb);
    border-radius: 4px;
  }
  @media (max-width: 950px) {
    padding: var(--space-16) 0 8rem;
    grid-area: main;
  }
`;

const Container = styled.div`
  width: 85%;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  @media (max-width: 950px) {
    width: 92%;
  }
`;

function AppLayout() {
  const { resize } = useAppMode();
  return (
    <StyledAppLayout $sideType={resize ? "expand" : "shrink"}>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
