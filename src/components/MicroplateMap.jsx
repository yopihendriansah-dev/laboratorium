function wellClass(type) {
  if (type === 'active') return 'bg-primary text-on-primary'
  if (type === 'qc') return 'bg-secondary-container text-on-secondary-container font-semibold'
  if (type === 'spike') return 'bg-tertiary-fixed text-tertiary font-bold'
  return 'bg-surface-container'
}
const rows = [
  { label: 'A', wells: ['BLK|qc', 'S1|qc', 'S2|qc', '01|active', '02|active', '03|active', '04|active', '05|active', '06|active', 'SP1|spike', '|empty', '|empty'] },
  { label: 'B', wells: ['07|active', '08|active', '09|active', '10|active', 'D1|qc', 'D2|qc', '11|active', '12|active', '13|active', 'SP2|spike', '|empty', '|empty'] },
  { label: 'C', wells: ['14|active', '15|active', '16|active', '17|active', '18|active', '19|active', '20|active', '|empty', '|empty', '|empty', '|empty', '|empty'] },
]

export default function MicroplateMap() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-space-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">apps</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Pemetaan Tray / 96-Well Microplate (Batch HPLC #04)</h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Visualisasi posisi vial autosampler tervalidasi sebelum running.</p>
        </div>
        <div className="flex items-center gap-3 font-label-sm text-label-sm flex-wrap">
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary"></span>Aktif (36)</span>
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary-container"></span>QC (8)</span>
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-tertiary-fixed"></span>Spike (4)</span>
        </div>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[620px] bg-surface-container-low p-3 rounded-lg">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center gap-1.5 mb-1.5 last:mb-0">
              <span className="w-6 text-[10px] font-bold text-outline text-center">{row.label}</span>
              <div className="grid grid-cols-12 gap-1.5 flex-1">
                {row.wells.map((w, i) => {
                  const [text, type] = w.split('|')
                  return (
                    <div key={i} className={`h-6 rounded-full flex items-center justify-center text-[9px] font-numeric-data ${wellClass(type)}`}>
                      {text}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
