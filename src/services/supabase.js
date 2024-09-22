import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eoryjxbgwwgkzrxxejxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvcnlqeGJnd3dna3pyeHhlanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTU2MjUsImV4cCI6MjA0MTU3MTYyNX0.q8gXT6Y07PNgU7GFcy-Lu0CnGRwRUjRSW7vfQ5ciSjE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
