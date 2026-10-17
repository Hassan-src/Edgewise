import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import styled, { css } from "styled-components";

import CreateTradeForm from "./CreateTradeForm";
import MetricValue from "../../ui/MetricValue";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTrade } from "./useDeleteTrade";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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
  const {
    id: tradeId,
    symbol,
    net_profit,
    open_time,
    source,
    side: direction,
  } = trade;
  const date = open_time.slice(0, 10);
  return (
    <Table.Row>
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
          <Menus.Menu>
            <Menus.Toggle id={tradeId} />
            <Menus.List id={tradeId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiOutlinePencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete-trade">
                <Menus.Button icon={<HiOutlineTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete-trade">
              <ConfirmDelete
                resourceName="trade"
                disabled={isDeleting}
                onConfirm={() => deleteTrade(tradeId)}
              />
            </Modal.Window>

            <Modal.Window name="edit">
              <CreateTradeForm editTrade={trade} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </Action>
    </Table.Row>
  );
}

export default TradesRow;
