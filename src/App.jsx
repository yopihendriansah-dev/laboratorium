import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TopStatusBar from './components/TopStatusBar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RegistrationModal from './components/RegistrationModal'
import KatalogPage from './pages/katalog/KatalogPage'
import OperasionalPage from './pages/operasional/OperasionalPage'

function Placeholder({ title }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <h1 className="font-headline-md">{title}</h1>
      <p className="text-on-surface-variant font-body-sm">Halaman ini belum diimplementasikan. Gunakan navigasi untuk ke Katalog atau Operasional.</p>
    </div>
  )
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="bg-surface font-body-md text-on-surface min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
          <TopStatusBar />
          <Header onOpenModal={() => setModalOpen(true)} />
        </div>
        <Sidebar />
        <div className="lg:pl-64">
          <main className="relative pt-[92px] min-h-screen bg-surface w-full px-gutter-desktop py-space-lg">
            <div className="max-w-[1400px] mx-auto">
              <Routes>
                <Route path="/" element={<Navigate to="/katalog-layanan-tarif" replace />} />
                <Route path="/katalog-layanan-tarif" element={<KatalogPage />} />
                <Route path="/operasional" element={<OperasionalPage />} />
                <Route path="/portal-klien" element={<Placeholder title="Portal Klien & Hasil" />} />
                <Route path="/admin-qc" element={<Placeholder title="Admin, QC & Audit" />} />
              </Routes>
            </div>
          </main>
        </div>
        <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </BrowserRouter>
  )
}
