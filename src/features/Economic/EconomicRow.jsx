import styled, { css } from "styled-components";
import { format } from "date-fns";

import Table from "../../ui/Table";

const $impact = {
  high: css`
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background-color: var(--color-loss-transparent);
    &::before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: var(--radius-full);
      background: var(--color-error);
    }
  `,
  medium: css`
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background-color: var(--color-warning-transparent);
    &::before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: var(--radius-full);
      background: var(--color-warning);
    }
  `,
  low: css`
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background-color: var(--color-profit-transparent);
    &::before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: var(--radius-full);
      background: var(--color-profit);
    }
  `,
};

const $src = {
  imported: css`
    background-color: var(--color-accent);
    color: var(--color-text-on-accent);
  `,
  manual: css`
    background-color: var(--color-bg-400);
  `,
};

const EventDate = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: var(--text-lg);
`;
const Symbol = styled.div`
  font-weight: 500;
  text-transform: uppercase;
`;

const Impact = styled.div`
  font-weight: 500;
  text-transform: capitalize;
  width: fit-content;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  ${(props) => $impact[props.$impact]}
`;
const Before = styled.div`
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: var(--text-lg);
`;
const After = styled.div`
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

function EconomicRow({ event }) {
  const date = format(new Date(event.time), "EEEE d h:mma");
  const formattedDate = date.replace("AM", "am").replace("PM", "pm");
  return (
    <Table.Row>
      <EventDate>{formattedDate}</EventDate>
      <Symbol>{event.currency}</Symbol>
      <Impact
        $impact={
          (event.impact === "high" && "high") ||
          (event.impact === "medium" && "medium") ||
          (event.impact === "low" && "low")
        }
      >
        {event.impact}
      </Impact>
      <Source>{event.title}</Source>
      <Before>{event.previous === "" ? "-" : event.previous}</Before>
      <After>{event.forecast === "" ? "-" : event.forecast}</After>
    </Table.Row>
  );
}

export default EconomicRow;
