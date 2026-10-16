import { HiOutlinePlus } from "react-icons/hi2";

import Button from "../../ui/Buttons";

import CreateTradeForm from "./CreateTradeForm";
import Modal from "../../ui/Modal";

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
