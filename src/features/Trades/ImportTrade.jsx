import { HiOutlineArrowUpTray } from "react-icons/hi2";

import Button from "../../ui/Buttons";
import Modal from "../../ui/Modal";

import ImportTradesForm from "./ImportTradesForm";

function ImportTrade() {
  return (
    <Modal>
      <Modal.Open opens="import-form">
        <Button $size="medium" $variation="secondary">
          <HiOutlineArrowUpTray />
          Upload trades
        </Button>
      </Modal.Open>
      <Modal.Window name="import-form">{<ImportTradesForm />}</Modal.Window>
    </Modal>
  );
}

export default ImportTrade;
