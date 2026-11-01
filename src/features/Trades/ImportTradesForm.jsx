import { useState } from "react";
import { parseTradesFile } from "./parseImportedData";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Buttons";
import Warning from "../../ui/Warning";
import { useImportTrade } from "./useImportTrade";

function ImportTradesForm({ onCloseModal }) {
  const [rows, setRows] = useState([]);
  const { register, handleSubmit, reset, formState } = useForm();
  const errors = formState;
  const { isSending, addImportedTrades } = useImportTrade();
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
  function onSubmit() {
    if (rows.length === 0) {
      toast.error("Check your file data!");
      return;
    }
    addImportedTrades(rows, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }
  return (
    <>
      <Warning $type="ordered">
        <li>First open the history section of your meta trader account.</li>
        <li>
          Right click in the history tab and from the menu hover on report
          section and click on (Open XML) and save the report.
        </li>
        <li>Open the report in excel and save a copy of it in your system.</li>
        <li>Upload the copy here.</li>
      </Warning>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        error={errors?.file?.message}
        $type={onCloseModal ? "modal" : "regular"}
      >
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
          <Button
            $variation="secondary"
            $size="medium"
            disabled={isSending}
            onClick={() => onCloseModal?.()}
          >
            cancel
          </Button>
          <Button $variation="primary" $size="medium" disabled={isSending}>
            Confirm
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default ImportTradesForm;
