import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTrades } from "../../services/apiTrades";
import TradesRow from "./TradesRow";

const Table = styled.div`
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.1fr;
  align-items: center;
  column-gap: var(--space-4);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface-muted);
  padding: var(--space-3) var(--space-5);
  font-weight: 700;
`;

function TradesTable() {
  // fetching the data using react query library
  const {
    isLoading,
    data: trades,
    error,
  } = useQuery({
    queryKey: ["trades"],
    queryFn: getTrades,
  });
  if (isLoading) return null;
  return (
    <>
      <Table role="table">
        <TableHeader role="row">
          <div>Date</div>
          <div>Symbol</div>
          <div>Direction</div>
          <div>P&L</div>
          <div>Source</div>
          <div>Action</div>
        </TableHeader>
        {trades?.map((trade) => (
          <TradesRow trade={trade} key={trade.id} />
        ))}
      </Table>
    </>
  );
}

export default TradesTable;
