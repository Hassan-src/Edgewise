import fileHeaderChecker from "./fileHeaderChecker";

function extractPositionRows(data) {
  // Step 1: Find the exact header row.
  const headerIndex = data.findIndex(fileHeaderChecker);
  // If the header doesn't exist, don't import anything.
  if (headerIndex === -1) {
    throw new Error("Could not find the Positions table.");
  }
  const positionRows = [];
  // Step 2: Read rows below the header.
  for (let i = headerIndex + 1; i < data.length; i++) {
    const row = data[i];
    // Step 3: Stop at the next section.
    const firstCell = String(row?.[0] ?? "")
      .trim()
      .toLowerCase();
    if (["orders", "deals", "results"].includes(firstCell)) {
      break;
    }
    // Step 4: Keep rows that look like completed positions.
    if (
      typeof row[0] === "string" &&
      /^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}:\d{2}$/.test(row[0]) &&
      typeof row[1] === "number" &&
      typeof row[2] === "string" &&
      ["buy", "sell"].includes(row[3])
    ) {
      positionRows.push(row);
    }
  }

  return positionRows;
}

export default extractPositionRows;
