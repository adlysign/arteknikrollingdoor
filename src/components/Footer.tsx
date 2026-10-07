import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-xs"></span>
              <span className="text-xl font-black text-white tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.legalName} – Spesialis pabrikasi, pemasangan, otomatisasi elektrik, dan layanan servis perbaikan rolling door industri, ruko, gudang, dan perumahan berstandar mutu tinggi.
            </p>
            <div className="pt-2 text-slate-400 space-y-1">
              <div>Workshop: {COMPANY_INFO.workshopAddress}</div>
              <div>Telp: {COMPANY_INFO.phone}</div>
            </div>
          </div>

          {/* Col 3: Produk */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kategori Produk
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Otomatis Industri
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door One Sheet Solid
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Perforated Mall
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Aluminium Anodized
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Motor Industri Shinsei Seiki
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">
                  Pemasangan Unit Baru
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">
                  Servis Panggilan Darurat 24 Jam
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">
                  Upgrade Manual ke Otomatis
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">
                  Maintenance Berkala B2B
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-amber-400 transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Bantuan & Survey */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Konsultasi & Survey
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#form-survey" className="hover:text-amber-400 transition-colors">
                  Jadwalkan Survey Gratis
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>WhatsApp Resmi</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hotline Panggilan</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
