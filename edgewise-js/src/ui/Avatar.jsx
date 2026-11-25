import styled, { css } from "styled-components";

const $type = {
  header: css`
    width: 2.5rem;
    height: 2.5rem;
    outline: 2px solid var(--color-surface-muted);
  `,
  profile: css`
    width: 10rem;
    height: 10rem;
    outline: 2px solid var(--color-surface-muted);
  `,
};

const StyledAvatar = styled.img`
  display: block;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;

  border-radius: var(--radius-full);
  ${(props) => $type[props.$type]}
`;

function Avatar({ $type, src, alt }) {
  return (
    <StyledAvatar $type={$type} src={src || "default-user.svg"} alt={alt} />
  );
}

export default Avatar;
