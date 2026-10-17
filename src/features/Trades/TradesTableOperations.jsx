import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function TradesTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="source"
        options={[
          { value: "all", label: "All" },
          { value: "manual", label: "Manual" },
          { value: "imported", label: "Imported" },
        ]}
      />
    </TableOperations>
  );
}

export default TradesTableOperations;
