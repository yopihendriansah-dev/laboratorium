import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

let client = null
if (isSupabaseConfigured) {
  client = createClient(url, anonKey)
} else {
  console.warn('[Supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY belum diisi di .env — halaman katalog-pemasaran jalan dalam mode lokal.')
}

export const supabase = client
