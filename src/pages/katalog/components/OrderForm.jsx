import { formatRupiah } from '../../../data/catalog'
export default function OrderForm({ items, onRemove, qty, setQty, method, setMethod, onCheckout }) {
  const sum = items.reduce((a, b) => a + b.price, 0)
  const sub = sum * qty
  const log = method === 'pickup' ? 150000 : 0
  const tax = Math.round((sub + log) * 0.11)
  const total = sub + log + tax
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md sticky top-[108px]">
      <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[22px]">shopping_cart_checkout</span>
          <div>
            <h2 className="font-headline-sm text-headline-sm">Formulir Pemesanan Cepat</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Estimasi biaya & penjadwalan</p>
          </div>
        </div>
        <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[12px] flex items-center justify-center font-bold">{items.length}</span>
      </div>
      <div className="flex flex-col gap-space-xs max-h-48 overflow-y-auto">
        {items.length === 0 && <div className="py-4 text-center text-on-surface-variant font-body-sm">Belum ada parameter dipilih.</div>}
        {items.map((it) => (
          <div key={it.code} className="p-space-xs bg-surface-container-low rounded-lg flex items-center justify-between gap-space-xs">
            <div className="min-w-0">
              <span className="font-label-md truncate block">{it.name}</span>
              <span className="text-[11px] text-on-surface-variant">{it.code} • {it.tat}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-numeric-data font-semibold text-primary">{formatRupiah(it.price)}</span>
              <button onClick={() => onRemove(it.code)} type="button" className="text-outline hover:text-error"><span className="material-symbols-outlined text-[16px]">close</span></button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-space-xs">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-9 rounded-lg bg-surface-container-high font-bold" type="button">-</button>
        <input value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} className="flex-1 text-center py-1.5 bg-surface-container-low rounded-lg" type="number" min="1" />
        <button onClick={() => setQty(qty + 1)} className="w-9 h-9 rounded-lg bg-surface-container-high font-bold" type="button">+</button>
      </div>
      <div className="grid gap-space-xs">
        <label className="flex gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
          <input type="radio" checked={method === 'dropoff'} onChange={() => setMethod('dropoff')} className="mt-0.5 text-primary" />
          <span className="font-label-md font-semibold">Drop-off Mandiri (Gratis)</span>
        </label>
        <label className="flex gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
          <input type="radio" checked={method === 'pickup'} onChange={() => setMethod('pickup')} className="mt-0.5 text-primary" />
          <span className="font-label-md font-semibold">Jemput Coolbox (+Rp 150.000)</span>
        </label>
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs font-body-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>{formatRupiah(sub)}</span></div>
        <div className="flex justify-between"><span>Logistik</span><span>{formatRupiah(log)}</span></div>
        <div className="flex justify-between"><span>PPN (11%)</span><span>{formatRupiah(tax)}</span></div>
        <div className="pt-space-xs border-t border-surface-container-highest flex justify-between items-center">
          <span className="font-label-lg font-semibold">Total Estimasi</span>
          <span className="font-headline-sm text-primary font-bold">{formatRupiah(total)}</span>
        </div>
      </div>
      <button onClick={() => onCheckout(total)} className="w-full bg-primary text-on-primary font-label-lg py-3 rounded-lg flex items-center justify-center gap-space-xs" type="button">
        <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span><span>Ajukan Permohonan Pengujian</span>
      </button>
    </div>
  )
}
