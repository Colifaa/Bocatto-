import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const storage = supabase.storage; // Agrega esta línea para crear una referencia al objeto storage

export { supabase, storage }; // Exporta ambos objetos