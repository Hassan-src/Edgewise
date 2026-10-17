import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  align-items: center;
  column-gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface-muted);
  padding: var(--space-3) var(--space-5);
  font-weight: 700;
`;

const StyledRow = styled(CommonRow)`
  padding: var(--space-3) var(--space-5);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
`;

const StyledBody = styled.section`
  margin: var(--space-2) 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: var(--space-4);
  background-color: var(--color-surface-muted);
`;

const Empty = styled.p`
  font-size: var(--text-2xl);
  font-weight: 600;
  text-align: center;
  margin: var(--space-6);
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
