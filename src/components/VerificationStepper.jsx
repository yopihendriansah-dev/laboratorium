export default function VerificationStepper() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between mb-space-md">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Validasi KAN ISO 17025</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Verifikasi Berjenjang</h3>
        </div>
        <span className="px-2 py-0.5 rounded bg-primary-fixed text-[11px] font-semibold">Sample #0914</span>
      </div>
      <div className="relative pl-6 flex flex-col gap-space-md before:content-[''] before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-surface-container-high">
        <div className="relative">
          <span className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[12px]">done</span>
          </span>
          <div className="bg-surface-container-low p-space-sm rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md font-semibold">Tahap 1: Input Hasil Analis</span>
              <span className="text-[11px] text-outline">10:05 WIB</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Teknisi: <strong className="text-on-surface">Rian Nugraha, S.Si</strong></p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-primary text-[14px]">table_chart</span>
              <span>Selesai Input Raw Data AAS (Pb: 0.02 ppm)</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <span className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary-fixed flex items-center justify-center text-on-secondary">
            <span className="material-symbols-outlined text-[10px]">hourglass_top</span>
          </span>
          <div className="bg-surface-container-low p-space-sm rounded-lg border-l-4 border-secondary">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary font-semibold">Tahap 2: Verifikasi Supervisor</span>
              <span className="font-label-sm text-label-sm text-secondary font-bold">Review</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Penyelia: <strong className="text-on-surface">apt. Aisyah Putri, M.Si</strong></p>
            <p className="font-body-sm text-body-sm mt-1">Reviewing QC Duplo & Spike Recovery (<span className="font-semibold text-primary">98.4%</span>).</p>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 bg-primary text-on-primary py-1.5 px-2 rounded font-label-sm text-label-sm flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[15px]">verified</span><span>Setujui Hasil</span>
              </button>
              <button className="flex-1 bg-surface-container-lowest text-error py-1.5 px-2 rounded font-label-sm text-label-sm flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[15px]">replay</span><span>Re-uji</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <span className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-outline-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-[10px]">edit_document</span>
          </span>
          <div className="bg-surface-container-low/60 p-space-sm rounded-lg">
            <span className="font-label-md text-label-md text-outline font-medium">Tahap 3: Otorisasi Manajer Teknis</span>
            <p className="font-body-sm text-body-sm text-outline mt-0.5">Manajer Teknis: Dr. Hendra Kusuma</p>
            <div className="mt-1 flex items-center gap-1 font-label-sm text-label-sm text-outline">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Siap TTD Digital CoA setelah Tahap 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
