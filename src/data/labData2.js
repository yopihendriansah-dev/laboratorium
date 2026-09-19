export const instruments = [
  { name: 'HPLC Shimadzu LC-20AD', status: 'Operasional Normal', tone: 'normal', rightLabel: 'Next Kalibrasi', rightValue: '14 Hari Lagi' },
  { name: 'GC-MS Agilent 7890B', status: 'Running Sequence', tone: 'running', rightLabel: 'Batch Berjalan', rightValue: 'Batch #4 (Vial 18/48)' },
  { name: 'Spektrofotometer UV-Vis', status: 'Maintenance Terjadwal', tone: 'alert', rightLabel: 'Jadwal Servis', rightValue: 'Besok, 09:00' },
  { name: 'Timbangan Mettler Toledo', status: 'Terverifikasi Harian', tone: 'normal', rightLabel: 'Anak Timbang E2', rightValue: 'Δ 0.0001 g (OK)' },
]

export const testParams = [
  { label: 'Kadar Air (Gravimetri)', checked: true },
  { label: 'Logam Berat (AAS)', checked: true },
  { label: 'Uji ALT Mikrobiologi', checked: false },
  { label: 'Flavonoid Total (UV-Vis)', checked: false },
  { label: 'Pestisida (GC-MS)', checked: false },
  { label: 'Kadar Abu Total', checked: false },
]
