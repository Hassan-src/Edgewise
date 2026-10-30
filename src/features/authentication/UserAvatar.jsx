import styled from "styled-components";
import { useUser } from "./useUser";

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
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  display: block;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  border-radius: var(--radius-full);
`;

function UserAvatar() {
  const { user } = useUser();
  const { userName, avatar } = user.user_metadata;
  return (
    <StyledUserAvater>
      <Avatar
        src={avatar || "default-user.svg"}
        alt={`Avatar of ${userName}`}
      />
      <span>{userName}</span>
    </StyledUserAvater>
  );
}

export default UserAvatar;
