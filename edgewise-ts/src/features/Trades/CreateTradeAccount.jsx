import Button from "../../ui/Buttons";
import Modal from "../../ui/Modal";

import TradeAccountForm from "./TradeAccountForm";

function CreateTradeAccount() {
  return (
    <Modal>
      <Modal.Open opens="create-acoount-form">
        <Button $size="medium" $variation="primary">
          Create trading account
        </Button>
      </Modal.Open>
      <Modal.Window name="create-acoount-form">
        {<TradeAccountForm />}
      </Modal.Window>
    </Modal>
  );
}

export default CreateTradeAccount;
