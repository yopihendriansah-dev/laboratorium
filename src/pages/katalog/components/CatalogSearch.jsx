import { filterChips } from '../../../data/catalog'
export default function CatalogSearch({ q, setQ, cat, setCat }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Cari parameter uji..." type="text" />
      </div>
      <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
        {filterChips.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} type="button" className={c.id === cat ? 'px-space-md py-1.5 rounded-full bg-primary text-on-primary whitespace-nowrap' : 'px-space-md py-1.5 rounded-full bg-surface-container-high whitespace-nowrap'}>{c.label}</button>
        ))}
      </div>
    </div>
  )
}
