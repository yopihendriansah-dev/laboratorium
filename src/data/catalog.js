export const catalogItems = [
  { code: 'TST-CHM-01', name: 'Analisis Logam Berat Pb & Cd', full: 'Analisis Kadar Timbal (Pb) & Kadmium (Cd)', sub: 'LOD: 0.001 mg/kg • ICP-OES', method: 'SNI 01-2896-1998', matrix: 'Cair / Serbuk', tat: '3 Hari Kerja', price: 520000, cat: 'kimia pangan' },
  { code: 'TST-MB-04', name: 'Uji ALT & Koliform Total', full: 'Uji Angka Lempeng Total (ALT) & Koliform', sub: 'Kultur Mikrobiologi Aerob', method: 'ISO 4833-1:2013', matrix: 'Makanan, Minuman', tat: '5 Hari Kerja', price: 350000, cat: 'pangan', badge: 'Populer' },
  { code: 'TST-ENV-12', name: 'Paket Uji BOD5 & COD Limbah', full: 'Analisis BOD5 & COD Air Limbah', sub: 'Titrasi & Spektrofotometri UV-Vis', method: 'APHA 5210 B • 5220 D', matrix: 'Air Permukaan / Limbah', tat: '5 Hari Kerja', price: 680000, cat: 'lingkungan', badge: 'Express Available' },
  { code: 'TST-PHR-09', name: 'Uji Stabilitas Dipercepat ICH', full: 'Uji Stabilitas Dipercepat Sediaan Obat', sub: 'Chamber 40°C ± 2°C / 75% RH ± 5%', method: 'ICH Q1A(R2) Guideline', matrix: 'Tablet, Kapsul, Krim', tat: '14 Hari (Interim)', price: 2450000, cat: 'farmasi' },
  { code: 'TST-NUT-02', name: 'Kadar Vitamin C (HPLC-UV)', full: 'Analisis Kadar Vitamin C (Asam Askorbat)', sub: 'Kromatografi Cair Kinerja Tinggi', method: 'AOAC 967.21 / HPLC', matrix: 'Sirup, Jus, Suplemen', tat: '3 Hari Kerja', price: 420000, cat: 'pangan farmasi' },
]
export const filterChips = [
  { id: 'all', label: 'Semua Kategori (24)' },
  { id: 'pangan', label: 'Pangan & Minuman (8)' },
  { id: 'farmasi', label: 'Farmasi & Kosmetik (6)' },
  { id: 'lingkungan', label: 'Lingkungan & Air Limbah (5)' },
  { id: 'kimia', label: 'Bahan Kimia Industri (3)' },
  { id: 'klinis', label: 'Klinis & Toksikologi (2)' },
]
export function formatRupiah(n) { return 'Rp ' + n.toLocaleString('id-ID') }
