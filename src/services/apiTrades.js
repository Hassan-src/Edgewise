import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getTrades({
  page = 1,
  filter,
  sideSort,
  profitSort,
  symbolSort,
} = {}) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  let query = supabase
    .from("trades")
    .select("*", { count: "exact" })
    .range(from, to);
  // Filter
  if (filter !== null) query = query.eq(filter.field, filter.value);
  // Sort
  if (
    profitSort &&
    profitSort.field !== "all" &&
    profitSort.direction !== "all"
  )
    query = query.order(profitSort.field, {
      ascending: profitSort.direction === "asc",
    });
  if (sideSort && sideSort.field !== "all" && sideSort.direction !== "all")
    query = query.eq("side", sideSort.direction);
  if (
    symbolSort &&
    symbolSort.field !== "all" &&
    symbolSort.direction !== "all"
  )
    query = query.eq("symbol", symbolSort.direction);
  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return { data, count };
}

export async function getTradeSymbols() {
  const { data, error } = await supabase.from("trades").select("symbol");

  if (error) {
    console.error(error);
    throw new Error("Could not get trade symbols");
  }

  return [
    ...new Set(
      data.map((trade) => trade.symbol?.toUpperCase()).filter(Boolean),
    ),
  ].sort();
}

export async function addEditTrade(newTrade, id) {
  // 1.Add/Edit trade
  let query = supabase.from("trades");
  // A.Add
  if (!id) query = query.insert([newTrade]);
  // B.Edit
  if (id) query = query.update(newTrade).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

export async function addImportedTrades(trades) {
  const { data, error } = await supabase.from("trades").insert(trades).select();
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

export async function deleteTrade(id) {
  const { data, error } = await supabase.from("trades").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}
export async function deleteImportedTrades() {
  const { data, error } = await supabase
    .from("trades")
    .delete()
    .eq("source", "imported");
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}
