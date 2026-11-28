import { PAGE_SIZE } from "../../../edgewise-ts/src/utils/constants";
import type { Database } from "../types/database.types";
import supabase from "./supabase";

type TradeInsertType = Database["public"]["Tables"]["trades"]["Insert"];

type TradeUpdateType = Database["public"]["Tables"]["trades"]["Update"];

type FilterType = {
  field: string;
  value: string | number;
};

type SortType = {
  field: string | "all";
  direction: string | "all" | "asc" | "desc";
};

type GetTradesProps = {
  page?: number;
  filter?: FilterType;
  profitSort?: SortType;
  symbolSort?: SortType;
  sideSort?: SortType;
};

export async function getTrades({
  page = 1,
  filter,
  sideSort,
  profitSort,
  symbolSort,
}: GetTradesProps = {}) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  let query = supabase
    .from("trades")
    .select("*", { count: "exact" })
    .range(from, to);
  // Filter
  if (filter?.field && filter.value !== undefined)
    query = query.eq(filter.field, filter.value);
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

export async function getAllTrades() {
  const { data, error } = await supabase
    .from("trades")
    .select("id,close_time,net_profit");

  if (error) throw new Error(error.message);

  return data;
}

export async function getRecentTrades() {
  const { data, error } = await supabase
    .from("trades")
    .select("*")
    .order("open_time", { ascending: false })
    .limit(5);

  if (error) throw new Error(error.message);

  return data;
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

type AddEditTradeProps =
  | {
      newTrade: TradeInsertType;
      id?: undefined;
    }
  | {
      newTrade: TradeUpdateType;
      id: number;
    };

export async function addEditTrade({ newTrade, id }: AddEditTradeProps) {
  // 1.Add/Edit trade
  const query =
    id === undefined
      ? supabase.from("trades").insert(newTrade)
      : supabase.from("trades").update(newTrade).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

type AddImportedTradesProps = {
  trades: TradeInsertType[];
};

export async function addImportedTrades({ trades }: AddImportedTradesProps) {
  const { data, error } = await supabase.from("trades").insert(trades).select();
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

type DeleteTradeProps = {
  id: number;
};

export async function deleteTrade({ id }: DeleteTradeProps) {
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
    .eq("source", "imported")
    .select();
  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}
