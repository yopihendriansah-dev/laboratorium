const fields = [
  ['code', 'Kode * (cth: TST-NEW-01)', 'text'],
  ['name', 'Nama singkat *', 'text'],
  ['full', 'Nama lengkap', 'text'],
  ['sub', 'Deskripsi', 'text'],
  ['method', 'Metode baku', 'text'],
  ['matrix', 'Matriks', 'text'],
  ['tat', 'TAT', 'text'],
  ['price', 'Tarif (Rp) *', 'number'],
  ['badge', 'Badge (opsional)', 'text'],
]

export const emptyForm = { code: '', name: '', full: '', sub: '', method: '', matrix: '', tat: '3 Hari Kerja', price: '', cat: 'pangan', badge: '' }

export default function LayananForm({ form, setForm, saving, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md grid grid-cols-1 md:grid-cols-3 gap-space-sm">
      {fields.map(([k, label, type]) => (
        <label key={k} className="flex flex-col gap-1 font-label-md text-label-md">{label}
          <input value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
            className="p-2 rounded-lg bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-primary"
            type={type} min={type === 'number' ? '0' : undefined} />
        </label>
      ))}
      <label className="flex flex-col gap-1 font-label-md text-label-md">Kategori
        <select value={form.cat} onChange={(e) => setForm({ ...form, cat: e.target.value })} className="p-2 rounded-lg bg-surface-container-low">
          <option value="pangan">Pangan & Minuman</option>
          <option value="farmasi">Farmasi & Kosmetik</option>
          <option value="lingkungan">Lingkungan & Air Limbah</option>
          <option value="kimia">Bahan Kimia Industri</option>
          <option value="klinis">Klinis & Toksikologi</option>
        </select>
      </label>
      <div className="md:col-span-3 flex justify-end gap-space-xs">
        <button type="button" onClick={() => setForm(emptyForm)} className="px-space-md py-2 rounded-lg bg-surface-container-high font-label-md">Reset</button>
        <button type="submit" disabled={saving} className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md disabled:opacity-50">
          {saving ? 'Menyimpan...' : 'Simpan ke Database'}
        </button>
      </div>
    </form>
  )
}
