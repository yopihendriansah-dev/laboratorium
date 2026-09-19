import { useEffect, useState } from 'react'
import { fetchLayanan, insertLayanan, removeLayanan } from '../../data/katalogApi'
import { filterChips } from '../../data/catalog'
import { isSupabaseConfigured } from '../../lib/supabase'
import LayananForm, { emptyForm } from './LayananForm'
import LayananTable from './LayananTable'

export default function KatalogPemasaranPage() {
  const [rows, setRows] = useState([])
  const [source, setSource] = useState('local')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [show, setShow] = useState(false)

  async function load() {
    setLoading(true)
    const res = await fetchLayanan()
    setRows(res.data); setSource(res.source)
    setErr(res.error ? res.error.message : null)
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const query = q.toLowerCase().trim()
  const list = rows.filter((r) =>
    (cat === 'all' || (r.cat || '').includes(cat)) &&
    (!query || r.code.toLowerCase().includes(query) || r.name.toLowerCase().includes(query) || (r.full || '').toLowerCase().includes(query)))

  async function onSubmit(e) {
    e.preventDefault()
    if (!form.code.trim() || !form.name.trim() || !form.price) { alert('Kode, nama, dan tarif wajib diisi.'); return }
    if (!isSupabaseConfigured) { alert('Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di .env dulu.'); return }
    setSaving(true)
    try {
      const row = await insertLayanan({ ...form, price: Number(form.price) })
      setRows((p) => [...p, row]); setForm(emptyForm); setShow(false)
    } catch (ex) { alert('Gagal menyimpan: ' + ex.message) }
    setSaving(false)
  }

  async function onDelete(row) {
    if (!confirm('Hapus ' + row.code + '?')) return
    if (row.id && isSupabaseConfigured) {
      try { await removeLayanan(row) } catch (ex) { alert('Gagal hapus: ' + ex.message); return }
    }
    setRows((p) => p.filter((x) => x.code !== row.code))
  }

  return (
    <div className="flex flex-col w-full gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Katalog Pemasaran • Supabase</span>
        <h1 className="font-headline-md text-headline-md">Katalog Layanan & Tarif Pemasaran</h1>
        <p className="font-body-sm text-on-surface-variant">Sumber data: <strong className={source === 'supabase' ? 'text-primary' : 'text-tertiary'}>{source === 'supabase' ? 'Supabase (live)' : 'Lokal (fallback — .env belum diisi)'}</strong></p>
        {!isSupabaseConfigured && (
          <div className="mt-space-sm p-space-sm rounded-lg bg-tertiary-fixed/30 font-body-sm">
            Isi <code>VITE_SUPABASE_URL</code> & <code>VITE_SUPABASE_ANON_KEY</code> di <code>.env</code>, lalu jalankan <code>supabase/schema.sql</code> di SQL Editor Supabase.
          </div>
        )}
        {err && <div className="mt-space-sm p-space-sm rounded-lg bg-error-container font-body-sm">Gagal memuat Supabase ({err}) — data lokal ditampilkan.</div>}
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
        <div className="flex flex-col md:flex-row gap-space-sm">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cari kode / nama..." type="text" />
          </div>
          <button onClick={() => setShow((v) => !v)} className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md" type="button">{show ? 'Tutup Form' : '+ Tambah Layanan'}</button>
          <button onClick={load} className="px-space-md py-2 rounded-lg bg-surface-container-high font-label-md" type="button">Muat Ulang</button>
        </div>
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
          {filterChips.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} type="button" className={c.id === cat ? 'px-space-md py-1.5 rounded-full bg-primary text-on-primary whitespace-nowrap' : 'px-space-md py-1.5 rounded-full bg-surface-container-high whitespace-nowrap'}>{c.label}</button>
          ))}
        </div>
      </div>
      {show && <LayananForm form={form} setForm={setForm} saving={saving} onSubmit={onSubmit} />}
      <LayananTable rows={list} loading={loading} source={source} onDelete={onDelete} />
    </div>
  )
}
