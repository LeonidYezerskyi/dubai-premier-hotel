import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rngsxemvajihxgcznqrx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ3N4ZW12YWppaHhnY3pucXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MDA0MTAsImV4cCI6MjA4ODk3NjQxMH0.NlsBOgFbY-QMh25A19Nm8mOm2oAKiQIUrOtjCO1KDcU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// const supabaseKey = process.env.SUPABASE_KEY;
