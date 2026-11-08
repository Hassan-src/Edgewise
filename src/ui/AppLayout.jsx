import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { useAppMode } from "../context/useAppMode";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$sideType === "expand" ? "16rem 1fr" : "5rem 1fr"};
  grid-template-rows: auto minmax(0, 1fr);
  height: 100dvh;
`;

const Main = styled.main`
  padding: var(--space-16) 0 var(--space-16);
  overflow-x: scroll;
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
`;

const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
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
