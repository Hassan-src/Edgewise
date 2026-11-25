import { createContext, useContext } from "react";
import styled, { css } from "styled-components";

const StyledTable = styled.div`
  min-width: 0;
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const CommonRow = styled.div`
  min-width: 0;
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  align-items: center;
  column-gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  transition: none;
  @media (max-width: 850px) {
    padding: var(--space-3);
    grid-template-columns: ${(props) => props.$mobileColumns};
  }
`;

const StyledHeader = styled(CommonRow)`
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface-muted);
  padding: var(--space-3) var(--space-5);
  font-weight: 700;
  @media (max-width: 850px) {
    ${(props) =>
      props.$hideHeaderOnMobile &&
      css`
        display: none;
      `}
  }
`;

const StyledRow = styled(CommonRow)`
  padding: var(--space-3) var(--space-5);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
  @media (max-width: 850px) {
    grid-template-areas: ${(props) => props.$mobileTemplate};

    ${(props) =>
      props.$mobileAreas?.map(
        (area, index) => css`
          gap: var(--space-2);
          & > :nth-child(${index + 1}) {
            grid-area: ${area};
            min-width: 0;
          }
        `,
      )}
  }
`;

const StyledBody = styled.section`
  margin: var(--space-2) 0;
`;

const StyledFooter = styled.footer`
  display: flex;
  padding: var(--space-3);
  background-color: var(--color-surface-muted);
  @media (max-width: 570px) {
    padding: var(--space-2);
  }
`;

const Empty = styled.p`
  font-size: var(--text-2xl);
  font-weight: 600;
  text-align: center;
  margin: var(--space-6);
`;

const TableContext = createContext();

function Table({
  columns,
  mobileColumns = "1fr",
  mobileTemplate,
  mobileAreas,
  hideHeaderOnMobile = false,
  children,
}) {
  return (
    <TableContext.Provider
      value={{
        columns,
        mobileColumns,
        mobileTemplate,
        mobileAreas,
        hideHeaderOnMobile,
      }}
    >
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns, mobileColumns, hideHeaderOnMobile } =
    useContext(TableContext);
  return (
    <StyledHeader
      role="row"
      $columns={columns}
      $mobileColumns={mobileColumns}
      $hideHeaderOnMobile={hideHeaderOnMobile}
      as="header"
    >
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns, mobileColumns, mobileTemplate, mobileAreas } =
    useContext(TableContext);
  return (
    <StyledRow
      role="row"
      $columns={columns}
      $mobileColumns={mobileColumns}
      $mobileTemplate={mobileTemplate}
      $mobileAreas={mobileAreas}
    >
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
