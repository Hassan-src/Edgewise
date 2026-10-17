import { HiOutlineTrash } from "react-icons/hi2";
import Button from "../../ui/Buttons";
import { useDeleteImportedTrades } from "./useDeleteImportedTrades";
import { useTrades } from "./useTrades";
import ImportTrade from "./ImportTrade";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function DeleteImportedDataShow() {
  const { isDeleting, deleteImportedTrades } = useDeleteImportedTrades();
  const { trades = [] } = useTrades();
  const hasImportedTrades = trades.some((trade) => trade.source === "imported");
  return (
    <>
      {hasImportedTrades ? (
        <Modal>
          <Modal.Open>
            <Button $size="medium" $variation="danger" disabled={isDeleting}>
              <HiOutlineTrash />
              Delete imported trades
            </Button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="Imported trades"
              disabled={isDeleting}
              onConfirm={deleteImportedTrades}
            />
          </Modal.Window>
        </Modal>
      ) : (
        <ImportTrade />
      )}
    </>
  );
}

export default DeleteImportedDataShow;
