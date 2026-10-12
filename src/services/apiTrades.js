import supabase from "./supabase";

export async function getTrades() {
  const { data, error } = await supabase.from("trades").select("*");

  if (error) {
    console.log(error);
    throw new Error("could not get the data");
  }
  return data;
}
