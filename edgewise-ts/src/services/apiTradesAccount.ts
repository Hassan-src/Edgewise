import supabase from "./supabase";
import type { Database } from "../types/database.types";

type TradeAccountInsert =
  Database["public"]["Tables"]["trading_accounts"]["Insert"];
type TradeAccountUpdate =
  Database["public"]["Tables"]["trading_accounts"]["Update"];

export async function getAccounts() {
  const { data, error } = await supabase.from("trading_accounts").select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not get the account");
  }
  return data;
}

type AddEditAccount =
  | {
      newAccount: TradeAccountInsert;
      id?: undefined;
    }
  | {
      newAccount: TradeAccountUpdate;
      id: number;
    };

export async function addEditAccount({ newAccount, id }: AddEditAccount) {
  // 1.Add/Edit trade
  const query =
    id === undefined
      ? supabase.from("trading_accounts").insert(newAccount)
      : supabase.from("trading_accounts").update(newAccount).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}
