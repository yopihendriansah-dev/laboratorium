import { metrics } from '../data/labData'

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
      {metrics.map((m) => (
        <div key={m.id} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">{m.label}</span>
              <div className="flex items-baseline gap-space-xs mt-1">
                <span className={`font-headline-lg text-headline-lg font-numeric-data ${m.valueColor}`}>{m.value}</span>
                <span className="font-label-md text-label-md text-on-surface-variant">{m.unit}</span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-lg ${m.iconBg} flex items-center justify-center ${m.iconColor}`}>
              <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
            </div>
          </div>
          <div className="mt-space-md pt-space-xs">
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant">
              {m.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
