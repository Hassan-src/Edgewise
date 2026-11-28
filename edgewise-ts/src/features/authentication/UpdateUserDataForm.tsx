import { useState, type FormEvent } from "react";
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Avatar from "../../ui/Avatar";
import Row from "../../ui/Row";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Buttons";
import ImageInput from "../../ui/ImageInput";
import Heading from "../../ui/Heading";

import { useUser } from "./useUser";
import SecondaryText from "../../ui/SecondaryText";
import { useUpdateUser } from "./useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;

const ImageBox = styled.div`
  width: fit-content;
  position: relative;
`;

const P = styled.p`
  font-size: var(--text-sm);
  color: var(--color-warning);
`;

function UpdateUserDataForm() {
  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useUser();
  const [avatar, setAvatar] = useState<File | null>(null);
  if (!user) return null;
  const {
    email,
    user_metadata: { userName: currentUserName, avatar: currentAvatar },
  } = user;
  const [userName, setUserName] = useState(currentUserName);
  function handelSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userName) return;
    const form = e.currentTarget;
    updateUser(
      { userName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          form.reset();
        },
      },
    );
  }
  function handleCancle() {
    setAvatar(null);
    setUserName(currentUserName);
  }
  return (
    <Box>
      <Row $type="vertical">
        <Heading $as="h2">user information</Heading>
        <SecondaryText>Modify your current information</SecondaryText>
      </Row>
      <Form onSubmit={handelSubmit}>
        <Row
          $type="horizontalSticky"
          $gap="xlarge"
          $marginBottom="large"
          $responsive="950px"
        >
          <ImageBox>
            <Avatar
              $type="profile"
              alt={`Avatar of ${userName}`}
              src={currentAvatar}
            />
            <ImageInput
              onChange={(e) => setAvatar(e.target.files?.[0] ?? null)}
              disabled={isUpdating}
            />
          </ImageBox>
          <Row $type="vertical">
            <Heading $as="h2">{currentUserName}</Heading>
            <P>Profile picture must be PNG,JPEG under 20mb</P>
          </Row>
        </Row>
        <FormRow label="Email" id="email">
          <Input id="email" value={email} disabled />
        </FormRow>
        <FormRow label="Username" id="userName">
          <Input
            type="text"
            value={userName}
            id="userName"
            disabled={isUpdating}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormRow>
        <FormRow label="uploaded image" id="file">
          <Input
            value={
              avatar
                ? `${avatar.name} (${(avatar.size / 1024 / 1024).toFixed(2)} MB)`
                : "No file chosen"
            }
            id="file"
            disabled
          />
        </FormRow>
        <FormRow $type="action">
          <Button
            type="reset"
            $variation="secondary"
            $size="medium"
            disabled={isUpdating}
            onClick={handleCancle}
          >
            Cancel
          </Button>
          <Button $variation="primary" $size="medium" disabled={isUpdating}>
            {isUpdating ? <SpinnerMini /> : "Update account"}
          </Button>
        </FormRow>
      </Form>
    </Box>
  );
}

export default UpdateUserDataForm;
