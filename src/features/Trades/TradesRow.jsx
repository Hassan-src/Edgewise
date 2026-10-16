import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import styled, { css } from "styled-components";

import Button from "../../ui/Buttons";
import CreateTradeForm from "./CreateTradeForm";
import MetricValue from "../../ui/MetricValue";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTrade } from "./useDeleteTrade";

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
  const { isDeleting, deleteTrade } = useDeleteTrade();
  // destructuring the fetched data
  const { id, symbol, net_profit, open_time, source, side: direction } = trade;
  const date = open_time.slice(0, 10);
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
      <Action>
        <Modal>
          <Modal.Open opens="delete-trade">
            <Button $variation="danger" $size="small" disabled={isDeleting}>
              <HiOutlineTrash />
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-trade">
            <ConfirmDelete
              resourceName="trade"
              disabled={isDeleting}
              onConfirm={() => deleteTrade(id)}
            />
          </Modal.Window>
          <Modal.Open opens="edit">
            <Button $variation="secondary" $size="small" disabled={isDeleting}>
              <HiOutlinePencil />
            </Button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateTradeForm editTrade={trade} />
          </Modal.Window>
        </Modal>
      </Action>
    </TableRow>
  );
}

export default TradesRow;
