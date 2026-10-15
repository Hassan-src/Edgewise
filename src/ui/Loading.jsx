import styled from "styled-components";
import loading from "/loading.svg";
const StyledLoading = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Object = styled.object`
  width: 80%;
`;

function Loading() {
  return (
    <StyledLoading>
      <Object data={loading} type="image/svg+xml"></Object>
    </StyledLoading>
  );
}

export default Loading;
