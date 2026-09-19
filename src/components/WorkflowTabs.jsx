import { useState } from 'react'
import { workflowTabs } from '../data/labData'

export default function WorkflowTabs() {
  const [active, setActive] = useState('registrasi')
  return (
    <div className="bg-surface-container-lowest rounded-xl p-1.5 shadow-sm mb-space-lg flex flex-wrap items-center gap-1">
      {workflowTabs.map((t) => {
        const isActive = t.id === active
        return (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            type="button"
            className={isActive
              ? 'flex-1 min-w-[190px] py-2 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm transition-all'
              : 'flex-1 min-w-[190px] py-2 px-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-2 transition-all'}
          >
            <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
            <span>{t.label}</span>
            {t.count && (
              <span className={`ml-1 px-1.5 rounded-full text-[10px] font-bold ${isActive ? 'bg-white/20' : 'bg-surface-container-high'}`}>{t.count}</span>
            )}
            {t.dot && <span className="w-2 h-2 rounded-full bg-primary ml-1"></span>}
          </button>
        )
      })}
    </div>
  )
}
