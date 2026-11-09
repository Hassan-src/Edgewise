export async function getEconomicData() {
  const response = await fetch(
    "https://showmytrades.com/api/public/calendar/v1?days=1&impact=all",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch economic data");
  }
  const data = await response.json();
  return data;
}
