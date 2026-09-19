import { instruments } from '../data/labData2'

export default function InstrumentsPanel() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">precision_manufacturing</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Instrumen & Telemetri Lab</h3>
        </div>
        <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">Log Lengkap</a>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Pemantauan kalibrasi berkala dan utilisasi instrumen.</p>
      <div className="flex flex-col gap-space-sm">
        {instruments.map((ins) => (
          <div key={ins.name} className={`p-space-sm rounded-lg flex items-start justify-between gap-2 ${ins.tone === 'alert' ? 'bg-tertiary-fixed/30' : 'bg-surface-container-low'}`}>
            <div>
              <span className="font-label-md text-label-md font-semibold block">{ins.name}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{ins.status}</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-outline block">{ins.rightLabel}</span>
              <span className="font-label-sm text-label-sm font-semibold">{ins.rightValue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
