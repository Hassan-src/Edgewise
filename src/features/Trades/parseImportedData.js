import readXlsxFile from "read-excel-file/browser";
import extractPositionRows from "../../utils/readExcel";

export async function parseTradesFile(file) {
  if (!file) return [];
  const data = await readXlsxFile(file);
  const positions = extractPositionRows(data.at(0).data);
  return positions.map((row) => ({
    source: "Imported",
    open_time: row[0],
    external_position_id: String(row[1]),
    symbol: row[2],
    side: row[3],
    volume: Number(row[4]),
    open_price: Number(row[5]),
    stop_loss: row[6] == null ? null : Number(row[6]),
    take_profit: row[7] == null ? null : Number(row[7]),
    close_time: row[8],
    close_price: Number(row[9]),
    commission: Number(row[10] ?? 0),
    swap: Number(row[11] ?? 0),
    profit: Number(row[12] ?? 0),
  }));
}
