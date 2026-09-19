export default function TopStatusBar() {
  return (
    <div className="w-full h-7 bg-surface-container-high px-gutter-desktop hidden sm:flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <div className="flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
        <span>Status Lab: <strong className="text-on-surface font-semibold">Terakreditasi KAN ISO/IEC 17025:2017</strong></span>
        <span className="text-outline-variant">•</span>
        <span className="inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Sistem Operasional Normal
        </span>
      </div>
      <div className="hidden md:flex items-center gap-space-md">
        <span className="font-numeric-data text-numeric-data">Server Node: ID-JKT-LAB01</span>
        <span className="text-outline-variant">|</span>
        <span className="font-numeric-data text-numeric-data">QC Status: Optimal (99.8%)</span>
      </div>
    </div>
  )
}
