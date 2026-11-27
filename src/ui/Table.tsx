import {
  createContext,
  useContext,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import styled, { css } from "styled-components";

const StyledTable = styled.div`
  min-width: 0;
  background-color: var(--color-surface);
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

type CommonRowProps = {
  $columns?: string;
  $mobileColumns?: string;
};

const CommonRow = styled.div<CommonRowProps>`
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

type StyledHeaderProps = {
  $hideHeaderOnMobile?: boolean;
};

const StyledHeader = styled(CommonRow)<StyledHeaderProps>`
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

type StyledRowProps = {
  $mobileTemplate?: string;
  $mobileAreas?: string[];
};

const StyledRow = styled(CommonRow)<StyledRowProps>`
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

type TableContextValue = {
  columns: string;
  mobileColumns: string;
  mobileTemplate?: string;
  mobileAreas?: string[];
  hideHeaderOnMobile?: boolean;
};

const TableContext = createContext<TableContextValue | null>(null);

function useTableContext() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Table components must be used inside Table.");
  }

  return context;
}

type TableRootProps = PropsWithChildren<TableContextValue>;

function TableRoot({
  columns,
  mobileColumns = "1fr",
  mobileTemplate,
  mobileAreas,
  hideHeaderOnMobile = false,
  children,
}: TableRootProps) {
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

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  const { columns, mobileColumns, hideHeaderOnMobile } = useTableContext();
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

type RowProps = {
  children: ReactNode;
};

function Row({ children }: RowProps) {
  const { columns, mobileColumns, mobileTemplate, mobileAreas } =
    useTableContext();
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

type BodyProps<T> = {
  data: T[];
  render: (item: T, index: number) => ReactNode;
};

function Body<T>({ data, render }: BodyProps<T>) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

type FooterProps = {
  children: ReactNode;
};

function Footer({ children }: FooterProps) {
  return <StyledFooter>{children}</StyledFooter>;
}

const Table = Object.assign(TableRoot, {
  Header,
  Row,
  Body,
  Footer,
});

export default Table;
