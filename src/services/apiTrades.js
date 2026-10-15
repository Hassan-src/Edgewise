import supabase from "./supabase";

export async function getTrades() {
  const { data, error } = await supabase.from("trades").select("*");

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

export async function addEditTrade(newTrade, id) {
  console.log("newTradeData:", newTrade);
  console.log("id:", id);
  console.log("id type:", typeof id);
  // 1.Add/Edit trade
  let query;
  // A.Add
  if (!id) query = supabase.from("trades").insert([newTrade]);
  // B.Edit
  if (id) query = supabase.from("trades").update(newTrade).eq("id", id);

  const { data, error } = await query.select().single();

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
