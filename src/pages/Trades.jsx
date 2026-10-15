import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  HiOutlineArrowUpTray,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";

import TradesTable from "../features/Trades/TradesTable";
import Button from "../ui/Buttons";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CreateTradeForm from "../features/Trades/CreateTradeForm";
import ImportTrades from "../features/Trades/ImportTrades";
import { deleteImportedTrades } from "../services/apiTrades";

function Trades() {
  const [showForm, setShowForm] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteImportedTrades,
    onSuccess: () => {
      toast.success("Imported data successfully deleted.");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return (
    <>
      <Row $type="horizontal">
        <Heading $as="h1">Trades</Heading>
      </Row>
      <Row $type="horizontal">
        <p>sort</p>
      </Row>
      <Row $type="vertical" $gap="large">
        <TradesTable />
        <Button
          $size="large"
          $variation="primary"
          onClick={() => setShowForm((show) => !show)}
        >
          <HiOutlinePlus />
          Add trade
        </Button>
        {showForm && <CreateTradeForm />}
        <Button $size="medium" $variation="danger" onClick={mutate}>
          <HiOutlineTrash />
          Delete imported trades
        </Button>
        <Button
          $size="medium"
          $variation="secondary"
          onClick={() => setShowImport((show) => !show)}
        >
          <HiOutlineArrowUpTray />
          Import trades
        </Button>
        {showImport && <ImportTrades setShowImport={setShowImport} />}
      </Row>
    </>
  );
}

export default Trades;
