import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTrades } from "../../services/apiTrades";

const Table = styled.div`
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 1.8fr 1fr 1fr 1fr;
`;

function TradesTable() {
  const {
    isLoading,
    data: trades,
    error,
  } = useQuery({
    queryKey: ["trades"],
    queryFn: getTrades,
  });
  return (
    <>
      <Table>
        <TableHeader>Date & Time</TableHeader>
      </Table>
    </>
  );
}

export default TradesTable;
