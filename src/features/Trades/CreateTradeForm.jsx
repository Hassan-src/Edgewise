import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Buttons";
import Textarea from "../../ui/TextArea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTrade } from "../../services/apiTrades";
import toast from "react-hot-toast";
import Styledselect from "../../ui/Select";
import FormRow from "../../ui/FormRow";

function CreateTradeForm() {
  // using react hook form library to manage the form
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  // using query client to refetch the data from supabase
  const queryClient = useQueryClient();
  // mutating the data and adding the new row
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: addTrade,
    onSuccess: () => {
      toast.success("New trade added");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="open Time" error={errors?.open_time?.message}>
        <Input
          type="datetime-local"
          id="open_time"
          disabled={isCreating}
          {...register("open_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="close Time" error={errors?.close_time?.message}>
        <Input
          type="datetime-local"
          id="close_time"
          disabled={isCreating}
          {...register("close_time", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="symbol" error={errors?.symbol?.message}>
        <Input
          $size="small"
          type="text"
          id="symbol"
          placeholder="e.g.xauusd"
          disabled={isCreating}
          {...register("symbol", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="direction" error={errors?.side?.message}>
        <Styledselect
          {...register("side", {
            required: "Required field",
          })}
          disabled={isCreating}
        >
          <option value="buy">buy</option>
          <option value="sell">sell</option>
        </Styledselect>
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
          disabled={isCreating}
          {...register("volume", {
            required: "Required field",
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
          disabled={isCreating}
          {...register("open_price", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="stop / loss" error={errors?.stop_loss?.message}>
        <Input
          type="number"
          id="stop_loss"
          placeholder="e.g.(4133.12)"
          min="0"
          step="0.01"
          disabled={isCreating}
          {...register("stop_loss")}
        />
      </FormRow>
      <FormRow label="take profit" error={errors?.take_profit?.message}>
        <Input
          type="number"
          id="take_profit"
          placeholder="e.g.(4133.12)"
          min="0"
          step="0.01"
          disabled={isCreating}
          {...register("take_profit")}
        />
      </FormRow>
      <FormRow label="close Price" error={errors?.close_price?.message}>
        <Input
          type="number"
          id="close_price"
          placeholder="e.g.(4133.12)"
          step="0.01"
          disabled={isCreating}
          {...register("close_price", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="commission" error={errors?.commission?.message}>
        <Input
          $size="small"
          type="number"
          id="commission"
          step="0.01"
          defaultValue={0}
          disabled={isCreating}
          {...register("commission", {
            required: "Required field",
            max: {
              value: 0,
              message: "Value must be a negative number or 0",
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
          disabled={isCreating}
          {...register("swap", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="fee" error={errors?.fee?.message}>
        <Input
          $size="small"
          type="number"
          id="fee"
          defaultValue={0}
          step="0.01"
          disabled={isCreating}
          {...register("fee", { required: "Required field" })}
        />
      </FormRow>
      <FormRow label="profit" error={errors?.profit?.message}>
        <Input
          $size="small"
          type="number"
          id="profit"
          step="0.01"
          placeholder="e.g.(26.12,-31)"
          disabled={isCreating}
          {...register("profit", {
            required: "Required field",
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
          disabled={isCreating}
          {...register("notes")}
        />
      </FormRow>
      <FormRow>
        <Button $variation="secondary" $size="medium" type="reset">
          Cancel
        </Button>
        <Button $variation="primary" $size="medium" disabled={isCreating}>
          {isCreating ? "working..." : "submit"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateTradeForm;
