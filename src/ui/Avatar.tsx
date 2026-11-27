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

type AvatarType = keyof typeof $type;

type StyledAvatarProps = {
  $type?: AvatarType;
};

const StyledAvatar = styled.img<StyledAvatarProps>`
  display: block;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;

  border-radius: var(--radius-full);
  ${(props) => props.$type && $type[props.$type]}
`;

type AvatarProps = {
  $type?: AvatarType;
  src?: string;
  alt?: string;
};

function Avatar({ $type, src, alt }: AvatarProps) {
  return (
    <StyledAvatar $type={$type} src={src || "default-user.svg"} alt={alt} />
  );
}

export default Avatar;
