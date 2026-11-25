import styled from "styled-components";

import { useUser } from "./useUser";

import Avatar from "../../ui/Avatar";

const StyledUserAvater = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 500;
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  outline: 2px solid var(--color-surface-muted);
  border-radius: var(--radius-full);
  padding-right: var(--space-3);
`;

function UserAvatar() {
  const { user } = useUser();
  const { userName, avatar } = user.user_metadata;
  return (
    <StyledUserAvater>
      <Avatar $type="header" src={avatar} alt={`Avatar of ${userName}`} />
      <span>{userName}</span>
    </StyledUserAvater>
  );
}

export default UserAvatar;
