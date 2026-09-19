import { useState } from 'react'
import rows from '../data/samples'

export default function SampleTable() {
  const [checked, setChecked] = useState([])
  const all = checked.length === rows.length
  const toggleAll = () => setChecked(all ? [] : rows.map((r) => r.id))
  const toggleOne = (id) => setChecked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm flex-wrap">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Daftar Sampel Masuk (Accession Queue)</h2>
          <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm">Batch ID: #QC-2025-W12</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button className="inline-flex items-center gap-1 px-space-sm py-1.5 rounded bg-surface-container-low font-label-md text-label-md" type="button">
            <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span><span>Cetak Barcode</span>
          </button>
          <button className="inline-flex items-center gap-1 px-space-sm py-1.5 rounded bg-primary text-on-primary font-label-md text-label-md" type="button">
            <span className="material-symbols-outlined text-[16px]">person_add</span><span>Assign ke Teknisi</span>
          </button>
        </div>
      </div>
      <div className="px-space-md py-2 bg-surface-container-low flex flex-wrap items-center justify-between gap-2">
        <label className="flex items-center gap-1.5 font-label-sm text-label-sm cursor-pointer">
          <input type="checkbox" checked={all} onChange={toggleAll} className="rounded text-primary w-3.5 h-3.5" />
          <span>Pilih Semua (8 Ditampilkan)</span>
        </label>
        <span className="font-label-sm text-label-sm text-outline">Suhu Log: Terhubung Logger Bluetooth</span>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="text-outline font-label-sm text-label-sm uppercase tracking-wider">
              <th className="p-3 w-8 text-center">#</th>
              <th className="p-3">ID Barcode</th>
              <th className="p-3">Waktu Masuk</th>
              <th className="p-3">Klien</th>
              <th className="p-3">Jenis Sampel</th>
              <th className="p-3">Parameter</th>
              <th className="p-3">Suhu</th>
              <th className="p-3">Kondisi</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
            {rows.map((r) => (
              <tr key={r.id} className={r.warn ? 'bg-tertiary-fixed/20' : r.alt ? 'bg-surface-container-low/40' : ''}>
                <td className="p-3 text-center">
                  <input type="checkbox" checked={checked.includes(r.id)} onChange={() => toggleOne(r.id)} className="rounded text-primary w-3.5 h-3.5" />
                </td>
                <td className="p-3 whitespace-nowrap">
                  <span className={`font-numeric-data font-semibold ${r.warn ? 'text-tertiary' : 'text-primary'}`}>{r.id}</span>
                </td>
                <td className="p-3 whitespace-nowrap text-on-surface-variant">{r.time}</td>
                <td className="p-3 whitespace-nowrap font-medium">{r.client}</td>
                <td className="p-3 whitespace-nowrap"><span className="px-2 py-0.5 rounded bg-surface-container font-label-sm">{r.type}</span></td>
                <td className="p-3"><span className="line-clamp-1 text-on-surface-variant">{r.params}</span></td>
                <td className="p-3 whitespace-nowrap">{r.temp}</td>
                <td className="p-3 whitespace-nowrap">{r.cond}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  <button className="p-1 text-primary" type="button"><span className="material-symbols-outlined text-[18px]">print</span></button>
                  <button className="p-1 text-on-surface-variant" type="button"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-space-md py-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm flex-wrap gap-2">
        <span>Menampilkan 4 dari 28 sampel hari ini</span>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 rounded bg-primary text-on-primary" type="button">1</button>
          <button className="px-2 py-1 rounded bg-surface-container" type="button">2</button>
          <button className="px-2 py-1 rounded bg-surface-container" type="button">3</button>
        </div>
      </div>
    </div>
  )
}
