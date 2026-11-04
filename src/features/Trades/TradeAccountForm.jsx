import { useForm } from "react-hook-form";
import Button from "../../ui/Buttons";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCreateAccount } from "./useCreateAccount";

function TradeAccountForm({ onCloseModal }) {
  const { createAccount, isCreating } = useCreateAccount();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    createAccount(data, {
      onSuccess: () => {
        (reset, onCloseModal?.());
      },
    });
  }
  return (
    <Form
      $type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Strategy name" error={errors?.strategy_name?.message}>
        <Input
          type="text"
          id="strategy_name"
          maxLength={8}
          placeholder="up to 8 characters"
          disabled={isCreating}
          {...register("strategy_name")}
        />
      </FormRow>
      <FormRow label="Initial balance" error={errors?.initial_balance?.message}>
        <Input
          type="number"
          id="initial_balance"
          disabled={isCreating}
          {...register("initial_balance", {
            required: "This field is required",
            valueAsNumber: true,
            validate: (value) =>
              value > 0 || "Balance must be greater than (0)",
          })}
        />
      </FormRow>
      <FormRow label="Currency">
        <Input type="text" value="USD" disabled />
      </FormRow>
      <FormRow>
        <Button
          $variation="secondary"
          $size="medium"
          type="reset"
          disabled={isCreating}
          onClick={() => onCloseModal?.()}
        >
          cancel
        </Button>
        <Button $variation="primary" $size="medium" disabled={isCreating}>
          Create account
        </Button>
      </FormRow>
    </Form>
  );
}

export default TradeAccountForm;
