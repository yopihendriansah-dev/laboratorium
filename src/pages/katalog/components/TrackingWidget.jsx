import { useState } from 'react'
export default function TrackingWidget() {
  const [code, setCode] = useState('PLB-2025-0842')
  const [pulse, setPulse] = useState(false)
  const track = () => { if (!code.trim()) return; setPulse(true); setTimeout(() => setPulse(false), 700) }
  return (
    <div className="lg:col-span-5 bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">manage_search</span>
          <span className="font-label-lg text-label-lg text-on-surface">Lacak Status Sampel Real-Time</span>
        </div>
        <span className="px-space-xs py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Publik</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Masukkan nomor resi atau kode sampel untuk memantau rantai pengujian analitis.</p>
      <div className="flex items-center gap-space-xs mt-1">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">barcode_scanner</span>
          <input value={code} onChange={(e) => setCode(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-lg font-numeric-data text-numeric-data focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Contoh: PLB-2025-0842" type="text" />
        </div>
        <button onClick={track} className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-2 rounded-lg flex items-center gap-1 shadow-sm" type="button">
          <span className="material-symbols-outlined text-[16px]">travel_explore</span><span>Lacak Sampel</span>
        </button>
      </div>
      <div className={`bg-surface-container-lowest p-space-sm rounded-lg mt-space-xs shadow-sm flex flex-col gap-space-xs transition-all ${pulse ? 'ring-2 ring-primary ring-offset-1' : ''}`}>
        <div className="flex items-center justify-between">
          <span className="font-numeric-data text-numeric-data font-semibold text-primary">Batch: {code}-ENV</span>
          <span className="px-space-xs py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-[10px]">Dalam Pengujian</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant text-[11px]">
          <span>Matriks: Air Limbah Outlet</span>
          <span className="font-numeric-data">Target: 26 Feb 2025, 16:00</span>
        </div>
        <div className="relative w-full pt-3 pb-1">
          <div className="absolute top-5 left-3 right-3 h-0.5 bg-surface-container-highest"></div>
          <div className="absolute top-5 left-3 w-3/5 h-0.5 bg-primary"></div>
          <div className="relative flex items-center justify-between">
            {['Diterima', 'Preparasi'].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center shadow-sm">✓</span>
                <span className="text-[9px] mt-1">{s}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center animate-pulse shadow-sm">3</span>
              <span className="text-[9px] text-primary font-bold mt-1">Spektro (Aktif)</span>
            </div>
            {['Validasi QC', 'CoA Siap'].map((s, i) => (
              <div key={s} className="flex flex-col items-center">
                <span className="w-5 h-5 rounded-full bg-surface-container-highest text-outline text-[10px] flex items-center justify-center">{4 + i}</span>
                <span className="text-[9px] text-outline mt-1">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
