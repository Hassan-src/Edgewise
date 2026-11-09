import { isToday } from "date-fns";

import Table from "../../ui/Table";
import Loading from "../../ui/Loading";

import EconomicRow from "./EconomicRow";
import { useEconomicData } from "./useEconomicData";

function EconomicTable() {
  const { data: economic, isPending } = useEconomicData();
  const todayEvents = economic?.events?.filter((event) =>
    isToday(new Date(event.time)),
  );
  if (isPending) return <Loading />;
  return (
    <Table columns="0.2fr 0.1fr 0.1fr 0.5fr 0.1fr 0.1fr">
      <Table.Header role="row">
        <div>Date</div>
        <div>Currency</div>
        <div>Impact</div>
        <div>Event Type</div>
        <div>Previous</div>
        <div>Forcast</div>
      </Table.Header>
      <Table.Body
        data={todayEvents}
        render={(event) => <EconomicRow event={event} key={event.id} />}
      />
      <Table.Footer></Table.Footer>
    </Table>
  );
}

export default EconomicTable;
