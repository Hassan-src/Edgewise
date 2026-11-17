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
import InputPassword from "../../ui/InputPassword";

const StyledSignupForm = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  gap: var(--space-6);
  overflow-x: auto;

  @media (max-width: 1000px) {
    padding: var(--space-6);
    gap: var(--space-5);
  }

  @media (max-width: 900px) {
    min-height: 100dvh;
    border: none;
    border-radius: 0;
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    padding: var(--space-6) var(--space-4);
    gap: var(--space-4);
  }
`;

const P = styled.p`
  color: var(--color-text-secondary);
  text-align: center;
`;

function SignupForm() {
  const { signup, isPending: isSubmitting } = useSignup();

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
      <Form $type="regular" onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="username"
          error={errors?.userName?.message}
          id="userName"
        >
          <Input
            $size="medium"
            type="text"
            id="userName"
            placeholder="Karim"
            disabled={isSubmitting}
            {...register("userName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="email" error={errors?.email?.message} id="email">
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
        <FormRow
          label="password"
          error={errors?.password?.message}
          id="password"
        >
          <InputPassword
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
          id="passwordConfirm"
        >
          <InputPassword
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
        <FormRow $gap="button" $type="action">
          <Button $variation="primary" $size="large" disabled={isSubmitting}>
            Sign up
          </Button>
        </FormRow>
      </Form>
      <TextLink $linkText="Login" to="/login">
        Already have an account?
      </TextLink>
    </StyledSignupForm>
  );
}

export default SignupForm;
