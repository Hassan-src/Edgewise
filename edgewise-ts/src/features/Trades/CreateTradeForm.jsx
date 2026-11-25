import { useForm } from "react-hook-form";
import styled from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/TextArea";
import Button from "../../ui/Buttons";

import { useUpdateTrade } from "./useUpdateTrade";
import { useAddTrade } from "./useAddTrade";
import { useAccount } from "./useAccount";

const Select = styled.select`
  background-color: transparent;
  border: 2px solid var(--color-border);
  cursor: pointer;
  &:hover {
    background-color: var(--color-surface-muted);
    color: var(--color-text);
  }
`;

function CreateTradeForm({ editTrade = {}, onCloseModal }) {
  const { id: editId, ...editValues } = editTrade;
  const isUpdatingSession = Boolean(editId);
  const { isAdding, addingTrade } = useAddTrade();
  const { isUpdating, updatingTrade } = useUpdateTrade();
  const { account } = useAccount();
  // using react hook form library to manage the form
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isUpdatingSession ? editValues : {},
  });
  const { errors } = formState;
  // Handling the disabled attribute of the inputs
  const isWorking = isAdding || isUpdating;

  function onSubmit(data) {
    // Since some of our values are generated in the supabase we should not pass them to the table
    const { net_profit, user_id, source, created_at, ...tradeData } = data;
    const tradeInfo = { ...tradeData, trading_account_id: account[0].id };
    if (isUpdatingSession)
      updatingTrade(
        {
          newTradeData: tradeInfo,
          editId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      addingTrade(tradeInfo, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      $type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label="open Time"
        error={errors?.open_time?.message}
        id="open_time"
      >
        <Input
          type="datetime-local"
          step="1"
          id="open_time"
          disabled={isWorking}
          {...register("open_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow
        label="close Time"
        error={errors?.close_time?.message}
        id="close_time"
      >
        <Input
          type="datetime-local"
          step="1"
          id="close_time"
          disabled={isWorking}
          {...register("close_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="symbol" error={errors?.symbol?.message} id="symbol">
        <Input
          $size="small"
          type="text"
          id="symbol"
          placeholder="e.g.xauusd"
          disabled={isWorking}
          {...register("symbol", {
            required: "Required field",
            setValueAs: (value) => value.toUpperCase(),
          })}
        />
      </FormRow>
      <FormRow label="direction" error={errors?.side?.message} id="direction">
        <Select
          {...register("side", {
            required: "Required field",
          })}
          id="direction"
          disabled={isWorking}
        >
          <option value="buy">buy</option>
          <option value="sell">sell</option>
        </Select>
      </FormRow>
      <FormRow label="volume" error={errors?.volume?.message} id="volume">
        <Input
          $size="small"
          type="number"
          id="volume"
          placeholder="e.g.(0.01)"
          min="0"
          max="1000"
          step="0.01"
          disabled={isWorking}
          {...register("volume", {
            required: "Required field",
            valueAsNumber: true,
            validate: (value) => value > 0 || "Volume must be greater than 0",
          })}
        />
      </FormRow>
      <FormRow
        label="open Price"
        error={errors?.open_price?.message}
        id="open_price"
      >
        <Input
          type="number"
          id="open_price"
          placeholder="e.g.(4133.12)"
          min="0"
          step="0.01"
          disabled={isWorking}
          {...register("open_price", {
            required: "Required field",
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <FormRow
        label="stop / loss"
        error={errors?.stop_loss?.message}
        id="stop_loss"
      >
        <Input
          type="number"
          id="stop_loss"
          placeholder="e.g.(4133.12)"
          min="0"
          step="0.01"
          disabled={isWorking}
          {...register("stop_loss", { valueAsNumber: true })}
        />
      </FormRow>
      <FormRow
        label="take profit"
        error={errors?.take_profit?.message}
        id="take_profit"
      >
        <Input
          type="number"
          id="take_profit"
          placeholder="e.g.(4133.12)"
          min="0"
          step="0.01"
          disabled={isWorking}
          {...register("take_profit", { valueAsNumber: true })}
        />
      </FormRow>
      <FormRow
        label="close Price"
        error={errors?.close_price?.message}
        id="close_price"
      >
        <Input
          type="number"
          id="close_price"
          placeholder="e.g.(4133.12)"
          step="0.01"
          disabled={isWorking}
          {...register("close_price", {
            required: "Required field",
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <FormRow
        label="commission"
        error={errors?.commission?.message}
        id="commission"
      >
        <Input
          $size="small"
          type="number"
          id="commission"
          step="0.01"
          defaultValue={0}
          disabled={isWorking}
          {...register("commission", {
            required: "Required field",
            valueAsNumber: true,
            max: {
              value: 0,
              message: "Commission must be a negative number or 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="swap" error={errors?.swap?.message} id="swap">
        <Input
          $size="small"
          type="number"
          id="swap"
          step="0.01"
          defaultValue={0}
          disabled={isWorking}
          {...register("swap", {
            required: "Required field",
            valueAsNumber: true,
            max: {
              value: 0,
              message: "Swap must be a negative number or 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="fee" error={errors?.fee?.message} id="fee">
        <Input
          $size="small"
          type="number"
          id="fee"
          defaultValue={0}
          step="0.01"
          disabled={isWorking}
          {...register("fee", {
            required: "Required field",
            valueAsNumber: true,
            max: {
              value: 0,
              message: "Fee must be a negative number or 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="profit" error={errors?.profit?.message} id="profit">
        <Input
          $size="small"
          type="number"
          id="profit"
          step="0.01"
          placeholder="e.g.(26.12,-31)"
          disabled={isWorking}
          {...register("profit", {
            required: "Required field",
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <FormRow label="Note" error={errors?.notes?.message} id="notes">
        <Textarea
          $size="small"
          type="textaria"
          id="notes"
          minLength={0}
          maxLength={150}
          placeholder="your notes"
          disabled={isWorking}
          {...register("notes")}
        />
      </FormRow>
      <FormRow $type="action">
        <Button
          $variation="secondary"
          $size="medium"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button $variation="primary" $size="medium" disabled={isWorking}>
          {isUpdatingSession ? "Edit trade" : "add trade"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateTradeForm;
