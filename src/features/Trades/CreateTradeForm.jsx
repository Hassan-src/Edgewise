import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditTrade } from "../../services/apiTrades";
import toast from "react-hot-toast";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import StyledSelect from "../../ui/Select";
import Textarea from "../../ui/TextArea";
import Button from "../../ui/Buttons";

function CreateTradeForm({ editTrade = {} }) {
  const { id: editId, ...editValues } = editTrade;
  const isEditingSession = Boolean(editId);
  // using react hook form library to manage the form
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;
  // using query client to refetch the data from supabase
  const queryClient = useQueryClient();
  // mutating the data and adding new row
  const { isLoading: isAdding, mutate: addingTrade } = useMutation({
    mutationFn: addEditTrade,
    onSuccess: () => {
      toast.success("New trade added");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  // Editing the added row
  const { isLoading: isEditing, mutate: editingTrade } = useMutation({
    mutationFn: ({ newTradeData, editId }) =>
      addEditTrade(newTradeData, editId),
    onSuccess: () => {
      toast.success("Trade successfully edited");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const isWorking = isAdding || isEditing;
  function onSubmit(data) {
    console.log("kkkkkkkarim", editId);
    if (isEditingSession) editingTrade({ newTradeData: data });
    else addingTrade(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="open Time" error={errors?.open_time?.message}>
        <Input
          type="datetime-local"
          id="open_time"
          disabled={isWorking}
          {...register("open_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="close Time" error={errors?.close_time?.message}>
        <Input
          type="datetime-local"
          id="close_time"
          disabled={isWorking}
          {...register("close_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="symbol" error={errors?.symbol?.message}>
        <Input
          $size="small"
          type="text"
          id="symbol"
          placeholder="e.g.xauusd"
          disabled={isWorking}
          {...register("symbol", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="direction" error={errors?.side?.message}>
        <StyledSelect
          {...register("side", {
            required: "Required field",
          })}
          disabled={isWorking}
        >
          <option value="buy">buy</option>
          <option value="sell">sell</option>
        </StyledSelect>
      </FormRow>
      <FormRow label="volume" error={errors?.volume?.message}>
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
      <FormRow label="open Price" error={errors?.open_price?.message}>
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
      <FormRow label="stop / loss" error={errors?.stop_loss?.message}>
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
      <FormRow label="take profit" error={errors?.take_profit?.message}>
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
      <FormRow label="close Price" error={errors?.close_price?.message}>
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
      <FormRow label="commission" error={errors?.commission?.message}>
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
      <FormRow label="swap" error={errors?.swap?.message}>
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
      <FormRow label="fee" error={errors?.fee?.message}>
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
      <FormRow label="profit" error={errors?.profit?.message}>
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
      <FormRow label="Note" error={errors?.notes?.message}>
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
      <FormRow>
        <Button $variation="secondary" $size="medium" type="reset">
          Cancel
        </Button>
        <Button $variation="primary" $size="medium" disabled={isWorking}>
          {isEditingSession ? "Edit trade" : "add trade"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateTradeForm;
