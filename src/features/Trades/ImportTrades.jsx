import { useState } from "react";
import { parseTradesFile } from "./parseImportedData";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Buttons";
import { addImportedTrades } from "../../services/apiTrades";

function ImportTrades({ setShowImport }) {
  const [rows, setRows] = useState([]);
  const { register, handleSubmit, reset, formState } = useForm();
  const errors = formState;
  const queryClient = useQueryClient();
  const { isLoading: isSending, mutate } = useMutation({
    mutationFn: addImportedTrades,
    onSuccess: () => {
      (toast.success("Trades Imported!"),
        queryClient.invalidateQueries({ queryKey: ["trades"] }));
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  async function handleImportData(e) {
    const file = e.target.files?.[0];
    console.log(file);
    if (!file) return;
    try {
      const trades = await parseTradesFile(file);
      setRows(trades);
    } catch (err) {
      console.error("Excel parsing failed:", err);
      toast.error(err.message || "Could not read the Excel file.");
    }
  }
  function onSubmit() {
    console.log("rows:", rows);
    if (rows.length === 0) {
      toast.error("Check your file data!");
      return;
    }
    mutate(rows);
    setShowImport(false);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={errors?.file?.message}>
      <FormRow label="Report">
        <FileInput
          id="file"
          accept=".xlsx"
          {...register("file", { required: "Please select a file first." })}
          onChange={handleImportData}
          disabled={rows.length > 0}
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
