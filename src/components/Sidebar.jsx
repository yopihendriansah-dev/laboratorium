import { NavLink } from 'react-router-dom'
const links = [
  { to: '/katalog-layanan-tarif', label: 'Katalog & Pemesanan', icon: 'grid_view' },
  { to: '/katalog-pemasaran', label: 'Katalog Pemasaran (DB)', icon: 'storefront' },
  { to: '/operasional', label: 'Operasional Lab', icon: 'biotech' },
  { to: '/portal-klien', label: 'Portal Klien & Hasil', icon: 'folder_shared' },
  { to: '/admin-qc', label: 'Admin, QC & Audit', icon: 'security' },
]
export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-[92px] h-[calc(100vh-92px)] w-64 bg-surface-container-lowest z-40 flex-col justify-between py-space-md border-r border-outline-variant/20">
      <div className="flex flex-col gap-space-md px-space-sm">
        <div className="px-space-sm">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Navigasi Terintegrasi</span>
        </div>
        <nav className="flex flex-col gap-space-xs">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} className={({ isActive }) => isActive
              ? 'flex items-center gap-space-sm px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-semibold shadow-sm transition-all'
              : 'flex items-center gap-space-sm px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-body-md text-body-md transition-all'}>
              <span className="material-symbols-outlined text-[20px]">{l.icon}</span>
              <span>{l.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="px-space-md pt-space-md border-t border-outline-variant/20">
        <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
            <span>Reagen Stock Alert</span>
            <span className="text-error font-semibold">2 Low</span>
          </div>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-4/5 rounded-full"></div>
          </div>
          <p className="text-[10px] text-outline mt-1">Batch QC L-889 verifikasi siap</p>
        </div>
      </div>
    </aside>
  )
}
