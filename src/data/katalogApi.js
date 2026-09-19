import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { catalogItems } from './catalog'

const TABLE = 'katalog_layanan'

function toRow(r) {
  return {
    id: r.id, code: r.code, name: r.name,
    full: r.full_name || r.name, sub: r.description || '',
    method: r.method || '-', matrix: r.matrix || '-',
    tat: r.tat || '-', price: Number(r.price) || 0,
    cat: r.category || 'pangan', badge: r.badge || null,
  }
}

export async function fetchLayanan() {
  if (!isSupabaseConfigured) {
    return { data: catalogItems, source: 'local', error: null }
  }
  const { data, error } = await supabase
    .from(TABLE).select('*').eq('is_active', true)
    .order('sort_order', { ascending: true })
  if (error) return { data: catalogItems, source: 'local', error }
  return { data: (data || []).map(toRow), source: 'supabase', error: null }
}

export async function insertLayanan(p) {
  const { data, error } = await supabase.from(TABLE).insert([{
    code: p.code, name: p.name, full_name: p.full || p.name,
    description: p.sub || '', method: p.method || '',
    matrix: p.matrix || '', tat: p.tat || '3 Hari Kerja',
    price: Number(p.price) || 0, category: p.cat || 'pangan',
    badge: p.badge || null, is_active: true,
  }]).select().single()
  if (error) throw error
  return toRow(data)
}

export async function removeLayanan(row) {
  const { error } = await supabase.from(TABLE).delete().eq('id', row.id)
  if (error) throw error
}

export function formatRupiah(n) { return 'Rp ' + Number(n || 0).toLocaleString('id-ID') }
