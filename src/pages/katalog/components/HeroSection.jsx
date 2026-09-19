import TrackingWidget from './TrackingWidget'
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-lg">
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute right-1/3 -bottom-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-sm">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
            <span>KAN LP-749-IDN • ISO/IEC 17025:2017</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg tracking-tight leading-tight">Layanan Pengujian Laboratorium Terakreditasi ISO/IEC 17025:2017</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Akurasi analitis berstandar internasional untuk industri farmasi, pangan, lingkungan, dan komoditas kimia. Akses sertifikat analisis (CoA) digital terotentikasi kriptografis real-time.</p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            {[['speed', 'Turnaround Time Cepat'], ['qr_code_2', 'E-CoA Validitas QR'], ['ac_unit', 'Logistik Suhu Terkendali']].map(([i, t]) => (
              <div key={t} className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                <span className="material-symbols-outlined text-primary text-[18px]">{i}</span><span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <TrackingWidget />
      </div>
    </div>
  )
}
