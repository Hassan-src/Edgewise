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
