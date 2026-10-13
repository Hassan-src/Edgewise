import supabase from "./supabase";

export async function getTrades() {
  const { data, error } = await supabase.from("trades").select("*");

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}

export async function addTrade(newTrade) {
  const { data, error } = await supabase
    .from("trades")
    .insert([newTrade])
    .select();
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
