import Heading from "../ui/Heading";
import Row from "../ui/Row";

import EconomicEventsTable from "../features/Economic/EconomicTable";

function EventsCalendar() {
  return (
    <>
      <Row $type="vertical">
        <Heading $as="h1">Economic events</Heading>
      </Row>
      <EconomicEventsTable />
    </>
  );
}

export default EventsCalendar;
