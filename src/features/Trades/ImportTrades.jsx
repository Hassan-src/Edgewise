import { useState } from "react";
import { parseTradesFile } from "./parseImportedData";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Buttons";
import { addTrade } from "../../services/apiTrades";

function ImportTrades() {
  const { register, handleSubmit, reset, formState } = useForm();
  const errors = formState;
  const queryClient = useQueryClient();
  const { isLoading: isSending, mutate } = useMutation({
    mutationFn: addTrade,
    onSuccess: () => {
      (toast.success("Trades Imported!"),
        queryClient.invalidateQueries({ queryKey: ["trades"] }));
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const [rows, setRows] = useState([]);
  async function handleImportData(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const trades = await parseTradesFile(file);
      setRows(trades);
    } catch (err) {
      console.error("Excel parsing failed:", err);
      toast.error(err.message || "Could not read the Excel file.");
    }
  }
  function onSubmit(data) {
    mutate(data);
  }
  // console.log(rows);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Report" error={errors?.file?.message}>
        <FileInput
          id="file"
          accept=".xlsx"
          onChange={handleImportData}
          disabled={rows.length > 0}
          {...register("file", { required: "Please select a file first." })}
        />
      </FormRow>
      <FormRow>
        <Button $variation="primary" $size="medium" disabled={isSending}>
          Confirm
        </Button>
      </FormRow>
    </Form>
  );
}

export default ImportTrades;
