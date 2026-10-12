import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ocvchvndsspatuqzolup.supabase.co";
const supabaseKey = "sb_publishable_REgvbvr5Hmgic393A5mS2w_K5O6RDe8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
