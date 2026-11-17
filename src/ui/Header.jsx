import styled from "styled-components";

import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import Menus from "./Menus";
import { HiArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";
import { useLogout } from "../features/authentication/useLogout";

const StyledHeader = styled.header`
  background-color: var(--color-surface);
  padding: var(--space-3) var(--space-8);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  @media (max-width: 950px) {
    grid-area: header;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
`;

function Header() {
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();
  return (
    <StyledHeader>
      <Logo $type="Header" />
      <Options>
        <Menus>
          <Menus.Menu>
            <UserAvatar />
            <Menus.Toggle id="headerMenu" />
            <Menus.List id="headerMenu">
              <Menus.Button
                onClick={() => navigate("/account")}
                icon={<HiOutlineUser />}
              >
                Profile
              </Menus.Button>
              <Menus.Button
                icon={<HiArrowRightOnRectangle />}
                disabled={isPending}
                onClick={logout}
              >
                SignOut
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </Options>
    </StyledHeader>
  );
}

export default Header;
