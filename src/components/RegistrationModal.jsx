import { useState } from 'react'
import { testParams } from '../data/labData2'

export default function RegistrationModal({ open, onClose }) {
  const [params, setParams] = useState(testParams)
  if (!open) return null
  const toggle = (i) => setParams((p) => p.map((x, idx) => (idx === i ? { ...x, checked: !x.checked } : x)))
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <div className="px-space-lg py-space-md bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">add_task</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm leading-tight">Formulir Intake & Kondisi Fisik Sampel</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">SOP KAN ISO/IEC 17025 Bagian 7.4</span>
            </div>
          </div>
          <button className="p-1.5 rounded hover:bg-surface-container-high" onClick={onClose} type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="p-space-lg overflow-y-auto flex flex-col gap-space-md">
          <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-outline block">Auto-Generated Barcode ID</span>
              <span className="font-numeric-data font-bold text-primary text-[15px]">SMPL-2025-0918-B1</span>
            </div>
            <span className="px-2 py-1 bg-surface-container-lowest rounded text-outline text-[12px]">Waktu: 11:32:04 WIB</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label className="block font-label-md text-label-md mb-1">Pilih Klien / Instansi *</label>
              <select className="w-full bg-surface-container-low p-2 rounded font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option>PT NutriFood Nusantara</option>
                <option>PT Farma Sejahtera</option>
                <option>BLK Provinsi Jawa Barat</option>
                <option>PT Herbal Nusantara Alam</option>
              </select>
            </div>
            <div>
              <label className="block font-label-md text-label-md mb-1">Matriks / Jenis Sampel *</label>
              <input defaultValue="Ekstrak Daun Kelor" className="w-full bg-surface-container-low p-2 rounded font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
            </div>
            <div>
              <label className="block font-label-md text-label-md mb-1">Suhu Saat Diterima (°C) *</label>
              <input defaultValue="4.0" className="w-full bg-surface-container-low p-2 rounded font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
            </div>
            <div>
              <label className="block font-label-md text-label-md mb-1">Integritas Kemasan & Segel *</label>
              <select className="w-full bg-surface-container-low p-2 rounded font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Segel Utuh & Tidak Bocor (Sesuai)</option>
                <option>Segel Rusak / Terbuka Sebagian</option>
                <option>Volume Kurang dari Syarat Uji</option>
                <option>Kemasan Pecah / Terkontaminasi</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-label-md text-label-md mb-1">Parameter Uji yang Diminta *</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-surface-container-low p-space-sm rounded-lg">
              {params.map((prm, i) => (
                <label key={prm.label} className="flex items-center gap-2 font-label-sm text-label-sm cursor-pointer">
                  <input type="checkbox" checked={prm.checked} onChange={() => toggle(i)} className="rounded text-primary" />
                  <span>{prm.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-label-md text-label-md mb-1">Catatan Fisik / Analis Intake</label>
            <textarea className="w-full bg-surface-container-low p-2 rounded font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" rows="2" placeholder="Catat anomali warna, endapan, atau instruksi khusus..."></textarea>
          </div>
        </div>
        <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
          <button className="px-space-md py-2 rounded bg-surface-container-lowest font-label-md text-label-md" onClick={onClose} type="button">Batal</button>
          <div className="flex items-center gap-space-xs">
            <button className="px-space-md py-2 rounded bg-surface-container-lowest text-primary font-label-md text-label-md" onClick={onClose} type="button">Simpan Draft</button>
            <button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1.5" onClick={onClose} type="button">
              <span className="material-symbols-outlined text-[16px]">print</span><span>Simpan & Cetak Barcode</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
