import { useState } from 'react'
import MetricsGrid from '../../components/MetricsGrid'
import WorkflowTabs from '../../components/WorkflowTabs'
import SampleTable from '../../components/SampleTable'
import MicroplateMap from '../../components/MicroplateMap'
import VerificationStepper from '../../components/VerificationStepper'
import InstrumentsPanel from '../../components/InstrumentsPanel'
import RegistrationModal from '../../components/RegistrationModal'

export default function OperasionalPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs text-secondary mb-1">
            <span className="material-symbols-outlined text-[16px]">biotech</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Modul Operasional & Kontrol Alur Uji</span>
          </div>
          <h1 className="font-headline-md text-headline-md tracking-tight">Manajemen Pengujian & Log Penerimaan Sampel</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Monitoring antrean accessioning, chain-of-custody, dan otorisasi bertingkat ISO/IEC 17025.</p>
        </div>
        <div className="flex items-center gap-space-sm">
          <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-lg px-space-md py-2.5 rounded" type="button">
            <span className="material-symbols-outlined text-[18px]">add_box</span><span>+ Registrasi Sampel Baru</span>
          </button>
          <button className="inline-flex items-center gap-space-xs bg-surface-container-lowest font-label-md px-space-md py-2.5 rounded" type="button">
            <span className="material-symbols-outlined text-[18px]">print</span><span className="hidden sm:inline">Cetak Antrean Barcode</span>
          </button>
        </div>
      </div>
      <MetricsGrid />
      <WorkflowTabs />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
        <div className="xl:col-span-8 flex flex-col gap-space-lg">
          <SampleTable />
          <MicroplateMap />
        </div>
        <div className="xl:col-span-4 flex flex-col gap-space-lg">
          <VerificationStepper />
          <InstrumentsPanel />
        </div>
      </div>
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
