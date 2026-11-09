import { HiOutlinePlus } from "react-icons/hi2";

import Button from "../../ui/Buttons";
import Modal from "../../ui/Modal";

import CreateTradeForm from "./CreateTradeForm";

function AddTrade() {
  return (
    <Modal>
      <Modal.Open opens="trade-form">
        <Button $size="medium" $variation="primary">
          <HiOutlinePlus />
          Add trade
        </Button>
      </Modal.Open>
      <Modal.Window name="trade-form">{<CreateTradeForm />}</Modal.Window>
    </Modal>
  );
}

export default AddTrade;
