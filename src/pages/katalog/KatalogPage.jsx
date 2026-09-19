import { useState } from 'react'
import HeroSection from './components/HeroSection'
import CatalogSearch from './components/CatalogSearch'
import CatalogRows from './components/CatalogRows'
import OrderForm from './components/OrderForm'
import MethodModal from './components/MethodModal'
import { formatRupiah } from '../../data/catalog'

export default function KatalogPage() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const [items, setItems] = useState([{ code: 'TST-CHM-01', name: 'Logam Berat Pb & Cd', price: 520000, tat: '3 Hari' }])
  const [qty, setQty] = useState(1)
  const [method, setMethod] = useState('dropoff')
  const [detail, setDetail] = useState(null)

  const add = (r) => setItems((p) => (p.find((x) => x.code === r.code) ? p : [...p, { code: r.code, name: r.name, price: r.price, tat: r.tat }]))

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        <div className="xl:col-span-8 flex flex-col gap-space-md">
          <CatalogSearch q={q} setQ={setQ} cat={cat} setCat={setCat} />
          <CatalogRows q={q} cat={cat} onAdd={add} onDetail={setDetail} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[['verified', 'Akreditasi KAN', 'Sertifikasi LP-749-IDN diakui BPOM, KLHK, Kemenkes & Bea Cukai.'], ['shield_with_heart', 'Validasi CoA QR', 'QR Code unik SHA-256 anti pemalsuan di setiap CoA.'], ['thermostat', 'Cold Chain Fleet', 'Coolbox kalibrasi logger suhu 2–8°C atau -20°C.']].map(([i, t, d]) => (
              <div key={t} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">{i}</span>
                <h3 className="font-headline-sm mt-1">{t}</h3>
                <p className="font-body-sm text-on-surface-variant">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:col-span-4">
          <OrderForm items={items} onRemove={(c) => setItems((p) => p.filter((x) => x.code !== c))} qty={qty} setQty={setQty} method={method} setMethod={setMethod} onCheckout={(t) => alert('Permohonan ' + items.length + ' parameter total ' + formatRupiah(t) + ' berhasil diajukan.')} />
        </div>
      </div>
      <MethodModal item={detail} onClose={() => setDetail(null)} />
    </div>
  )
}
