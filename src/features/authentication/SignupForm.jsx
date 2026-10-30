import { useForm } from "react-hook-form";
import styled from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Button from "../../ui/Buttons";
import TextLink from "../../ui/TextLink";

import { useSignup } from "./useSignup";

const StyledSignupForm = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  gap: var(--space-8);
`;

const P = styled.p`
  color: var(--color-text-secondary);
  text-align: center;
`;

function SignupForm() {
  const { signup, isLoading: isSubmitting } = useSignup();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ userName, password, email }) {
    signup({ userName, password, email }, { onSuccess: reset });
  }
  return (
    <StyledSignupForm>
      <Logo $type="LogIn" />
      <Row $type="vertical">
        <Heading $as="h4">Sign up</Heading>
        <P>Sign up to get access to all the features.</P>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="username" error={errors?.userName?.message}>
          <Input
            $size="medium"
            type="text"
            id="userName"
            placeholder="Karim"
            disabled={isSubmitting}
            {...register("userName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="email" error={errors?.email?.message}>
          <Input
            $size="medium"
            type="email"
            id="email"
            disabled={isSubmitting}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>
        <FormRow label="password" error={errors?.password?.message}>
          <Input
            $size="medium"
            type="password"
            id="password"
            placeholder="at least 8 characters"
            disabled={isSubmitting}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs to be at least 8 characters",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="repeat password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            $size="medium"
            type="password"
            id="passwordConfirm"
            disabled={isSubmitting}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>
        <FormRow $gap="button">
          <Button $variation="primary" $size="large" disabled={isSubmitting}>
            Sign up
          </Button>
        </FormRow>
      </Form>
      <TextLink $type="Signup" />
    </StyledSignupForm>
  );
}

export default SignupForm;
