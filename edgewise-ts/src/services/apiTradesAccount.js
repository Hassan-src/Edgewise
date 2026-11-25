import supabase from "./supabase";

export async function getAccounts() {
  const { data, error } = await supabase.from("trading_accounts").select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not get the account");
  }
  return data;
}

export async function addEditAccount(newAccount, id) {
  // 1.Add/Edit trade
  let query = supabase.from("trading_accounts");
  // A.Add
  if (!id) query = query.insert([newAccount]);
  // B.Edit
  if (id) query = query.update(newAccount).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("could not get the data");
  }
  return data;
}
