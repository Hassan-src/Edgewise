function fileHeaderChecker(row) {
  const expected = [
    "Time",
    "Position",
    "Symbol",
    "Type",
    "Volume",
    "Price",
    "S / L",
    "T / P",
    "Time",
    "Price",
    "Commission",
    "Swap",
    "Profit",
  ];

  if (!Array.isArray(row)) return false;

  return expected.every((header, index) => {
    const actual = row[index];

    return (
      typeof actual === "string" &&
      actual.trim().toLowerCase() === header.toLowerCase()
    );
  });
}

export default fileHeaderChecker;
