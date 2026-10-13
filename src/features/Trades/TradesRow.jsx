import styled, { css } from "styled-components";
import MetricValue from "../../ui/MetricValue";
import { HiOutlineTrash } from "react-icons/hi2";
import Button from "../../ui/Buttons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrade } from "../../services/apiTrades";
import toast from "react-hot-toast";

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

function TradesRow({ trade }) {
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
      <Button
        $variation="danger"
        $size="small"
        onClick={() => mutate(id)}
        disabled={isDeleting}
      >
        <HiOutlineTrash />
      </Button>
    </TableRow>
  );
}

export default TradesRow;
