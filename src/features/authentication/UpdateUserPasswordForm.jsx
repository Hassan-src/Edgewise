import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import SecondaryText from "../../ui/SecondaryText";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Buttons";

import { useUpdateUser } from "./useUpdateUser";

function UpdateUserPasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <>
      <Row $type="vertical">
        <Heading $as="h2">Password</Heading>
        <SecondaryText>Modify your current password</SecondaryText>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="New password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            disabled={isUpdating}
            placeholder="min 8 characters"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Repeat password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            autoComplete="new-password"
            disabled={isUpdating}
            placeholder="min 8 characters"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Password needs to match",
            })}
          />
        </FormRow>
        <FormRow>
          <Button
            $variation="secondary"
            $size="medium"
            type="reset"
            onClick={reset}
          >
            cancel
          </Button>
          <Button $variation="primary" $size="medium" disabled={isUpdating}>
            Update password
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateUserPasswordForm;
