import { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 group"
          >
            <span className="w-2.5 h-6 bg-amber-500 rounded-xs transition-transform group-hover:scale-y-110"></span>
            <span>{COMPANY_INFO.name}</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#produk" className="hover:text-amber-600 transition-colors">
              Produk
            </a>
            <a href="#layanan" className="hover:text-amber-600 transition-colors">
              Layanan
            </a>
            <a href="#simulasi" className="hover:text-amber-600 transition-colors">
              Simulasi Pintu
            </a>
            <a href="#kalkulator" className="hover:text-amber-600 transition-colors">
              Kalkulator Biaya
            </a>
            <a href="#portofolio" className="hover:text-amber-600 transition-colors">
              Portofolio
            </a>
            <a href="#faq" className="hover:text-amber-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik%20Rolling%20Door,%20saya%20ingin%20konsultasi%20pemasangan%20/%20servis`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi WhatsApp</span>
            </a>
            <a
              href="#form-survey"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Survey Gratis</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg"
              aria-label="Hubungi WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#produk"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Katalog Produk & Spesifikasi
          </a>
          <a
            href="#layanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Layanan & Servis 24 Jam
          </a>
          <a
            href="#simulasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Simulasi Operasional Pintu
          </a>
          <a
            href="#kalkulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Kalkulator Biaya Rolling Door
          </a>
          <a
            href="#portofolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Portofolio Proyek Terpasang
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Tanya Jawab (FAQ)
          </a>
          <a
            href="#form-survey"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
          >
            Permintaan Survey Gratis
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik%20Rolling%20Door,%20saya%20butuh%20survey%20lokasi`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold rounded-lg text-sm"
            >
              Chat WhatsApp Langsung ({COMPANY_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
