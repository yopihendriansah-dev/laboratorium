import { formatRupiah } from '../../data/catalog'

export default function LayananTable({ rows, loading, source, onDelete }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="p-space-md bg-surface-container-low/60 flex items-center justify-between">
        <span className="font-headline-sm">Daftar Layanan ({loading ? '...' : rows.length})</span>
        <span className="font-label-sm text-on-surface-variant">Sumber: {source}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[820px]">
          <thead>
            <tr className="text-on-surface-variant font-label-sm text-label-sm">
              <th className="py-3 px-space-md">KODE & NAMA</th>
              <th className="py-3 px-space-sm">METODE</th>
              <th className="py-3 px-space-sm">TAT</th>
              <th className="py-3 px-space-sm text-right">TARIF</th>
              <th className="py-3 px-space-md text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="font-body-sm">
            {loading && <tr><td colSpan="5" className="p-space-md text-center text-on-surface-variant">Memuat data...</td></tr>}
            {!loading && rows.map((r) => (
              <tr key={r.code} className="border-t border-outline-variant/20 hover:bg-surface-container-low/50">
                <td className="py-3 px-space-md">
                  <span className="font-numeric-data font-bold text-primary block">{r.code}</span>
                  <span className="font-label-lg block">{r.name}</span>
                  <span className="text-[10px] text-outline">{r.sub}</span>
                </td>
                <td className="py-3 px-space-sm text-on-surface-variant">{r.method} • {r.matrix}</td>
                <td className="py-3 px-space-sm">{r.tat}</td>
                <td className="py-3 px-space-sm text-right font-bold">{formatRupiah(r.price)}</td>
                <td className="py-3 px-space-md text-center">
                  <button onClick={() => onDelete(r)} className="px-space-sm py-1.5 rounded-lg bg-error-container text-error font-label-md" type="button">Hapus</button>
                </td>
              </tr>
            ))}
            {!loading && rows.length === 0 && <tr><td colSpan="5" className="p-space-md text-center text-on-surface-variant">Tidak ada data.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
