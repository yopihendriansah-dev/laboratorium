export default function Header({ onOpenModal }) {
  return (
    <header className="w-full h-16 bg-surface-container-lowest/95 backdrop-blur-xl px-gutter-desktop flex items-center justify-between gap-space-lg border-b border-outline-variant/20">
      <div className="flex items-center gap-space-md">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined text-[22px]">biotech</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">PrecisionLab</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">LIMS Terintegrasi</span>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-space-lg hidden lg:block">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">search</span>
          <input
            className="w-full pl-9 pr-4 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-sm"
            placeholder="Cari kode sampel, batch ID, atau parameter pengujian..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button onClick={onOpenModal} className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-md py-2 rounded-lg transition-colors" type="button">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span className="hidden sm:inline">Pendaftaran Sampel</span>
          <span className="sm:hidden">Daftar</span>
        </button>
        <button aria-label="Notifikasi" className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-error px-1 text-[9px] font-bold text-on-error">3</span>
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm border-l border-outline-variant/30">
          <div className="text-right hidden sm:block">
            <p className="font-label-lg text-label-lg text-on-surface leading-tight">apt. Aisyah Putri, M.Si</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Lead Analyst / QC Specialist</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">AP</div>
        </div>
      </div>
    </header>
  )
}
