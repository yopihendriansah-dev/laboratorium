import { catalogItems, formatRupiah } from '../../../data/catalog'
export default function CatalogRows({ q, cat, onAdd, onDetail }) {
  const query = q.toLowerCase().trim()
  const rows = catalogItems.filter((r) => (cat === 'all' || r.cat.includes(cat)) && (!query || r.full.toLowerCase().includes(query) || r.code.toLowerCase().includes(query)))
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-md bg-surface-container-low/60 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">science</span>
          <span className="font-headline-sm text-headline-sm">Daftar Parameter Uji & Tarif Baku</span>
        </div>
        <span className="font-label-sm text-on-surface-variant">Menampilkan <strong className="text-on-surface">{rows.length}</strong> Layanan</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[820px]">
          <thead>
            <tr className="text-on-surface-variant font-label-sm text-label-sm">
              <th className="py-3 px-space-md">KODE & PARAMETER</th>
              <th className="py-3 px-space-sm">METODE</th>
              <th className="py-3 px-space-sm">MATRIKS</th>
              <th className="py-3 px-space-sm">TAT</th>
              <th className="py-3 px-space-sm text-right">TARIF</th>
              <th className="py-3 px-space-md text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="font-body-sm text-body-sm">
            {rows.map((r) => (
              <tr key={r.code} className="hover:bg-surface-container-low/50 border-t border-outline-variant/20">
                <td className="py-3.5 px-space-md">
                  <span className="font-numeric-data font-bold text-primary block">{r.code}</span>
                  <span className="font-label-lg block">{r.name}</span>
                  <span className="text-[10px] text-outline">{r.sub}</span>
                </td>
                <td className="py-3.5 px-space-sm text-on-surface-variant">{r.method}</td>
                <td className="py-3.5 px-space-sm">{r.matrix}</td>
                <td className="py-3.5 px-space-sm">{r.tat}</td>
                <td className="py-3.5 px-space-sm text-right font-bold">{formatRupiah(r.price)}</td>
                <td className="py-3.5 px-space-md text-center">
                  <button onClick={() => onDetail(r)} className="p-1.5 text-on-surface-variant" type="button"><span className="material-symbols-outlined text-[18px]">info</span></button>
                  <button onClick={() => onAdd(r)} className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md ml-1" type="button">+ Pesan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
