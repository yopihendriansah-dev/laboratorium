export default function MethodModal({ item, onClose }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-space-md" onClick={onClose}>
      <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-space-md bg-surface-container-low flex items-center justify-between">
          <h3 className="font-headline-sm">Detail Prosedur Analisis — {item.code}</h3>
          <button onClick={onClose} className="p-1 text-outline" type="button"><span className="material-symbols-outlined text-[20px]">close</span></button>
        </div>
        <div className="p-space-md flex flex-col gap-space-sm font-body-sm max-h-[75vh] overflow-y-auto">
          <div className="bg-surface-container-low p-space-sm rounded-lg">
            <span className="font-label-sm text-primary font-bold">INFORMASI AKREDITASI & INSTRUMEN</span>
            <p className="text-on-surface-variant">Metode {item.method} terakreditasi penuh KAN LP-749-IDN untuk matriks {item.matrix}.</p>
          </div>
          <ul className="list-disc pl-5 text-on-surface-variant space-y-1">
            <li>Minimal volume cair: 250 mL (botol HDPE).</li>
            <li>Minimal bobot serbuk: 50 gram.</li>
            <li>Sertakan MSDS bila beracun/korosif.</li>
          </ul>
        </div>
        <div className="p-space-sm bg-surface-container-low flex justify-end">
          <button onClick={onClose} className="bg-primary text-on-primary px-space-md py-1.5 rounded-lg" type="button">Tutup</button>
        </div>
      </div>
    </div>
  )
}
