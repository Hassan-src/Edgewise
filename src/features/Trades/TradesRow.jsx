import toast from "react-hot-toast";
import { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled, { css } from "styled-components";

import Button from "../../ui/Buttons";
import CreateTradeForm from "./CreateTradeForm";
import MetricValue from "../../ui/MetricValue";
import { deleteTrade } from "../../services/apiTrades";

const $dir = {
  buy: css`
    background-color: var(--color-profit);
    color: var(--color-accent-200);
  `,
  sell: css`
    background-color: var(--color-error);
    color: var(--color-accent-200);
  `,
};

const $src = {
  imported: css`
    background-color: var(--color-accent-400);
  `,
  manual: css`
    background-color: var(--color-bg-400);
  `,
};

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.1fr;
  align-items: center;
  column-gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
`;

const Date = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: var(--text-lg);
`;
const Symbol = styled.div`
  font-weight: 500;
  text-transform: uppercase;
`;

const Direction = styled.div`
  font-weight: 500;
  text-transform: capitalize;
  width: fit-content;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  ${(props) => $dir[props.$dir]}
`;
const PL = styled.div`
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: var(--text-lg);
`;

const Source = styled.div`
  font-weight: 500;
  text-transform: capitalize;
  width: fit-content;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  ${(props) => $src[props.$src]}
`;
const Action = styled.div`
  width: fit-content;
`;

function TradesRow({ trade }) {
  const [showForm, setShowForm] = useState(false);
  // destructuring the fetched data
  const { id, symbol, net_profit, open_time, source, side: direction } = trade;
  const date = open_time.slice(0, 10);
  // handling the delete btn using react query
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteTrade,
    onSuccess: () => {
      toast.success("Trade successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["trades"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <>
      <TableRow role="row">
        <Date>{date}</Date>
        <Symbol>{symbol}</Symbol>
        <Direction $dir={direction === "buy" ? "buy" : "sell"}>
          {direction}
        </Direction>
        <PL>
          <MetricValue $status={net_profit > 0 ? "profit" : "loss"}>
            {net_profit > 0 ? `+${net_profit}` : net_profit}
          </MetricValue>
        </PL>
        <Source $src={source === "manual" ? "manual" : "imported"}>
          {source}
        </Source>
        <Action>
          <Button
            $variation="danger"
            $size="small"
            onClick={() => mutate(id)}
            disabled={isDeleting}
          >
            <HiOutlineTrash />
          </Button>
          <Button
            $variation="secondary"
            $size="small"
            onClick={() => setShowForm((show) => !show)}
            disabled={isDeleting}
          >
            <HiOutlinePencil />
          </Button>
        </Action>
      </TableRow>
      {showForm && <CreateTradeForm editTrade={trade} />}
    </>
  );
}

export default TradesRow;
