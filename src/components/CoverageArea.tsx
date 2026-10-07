import { MapPin, Navigation, Phone, Mail, Clock, Building } from 'lucide-react';
import { COMPANY_INFO, COVERAGE_CITIES } from '../data/content';

export default function CoverageArea() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Workshop Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
                Kontak & Lokasi Fisik
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Kantor Operasional & Workshop Pabrikasi
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Kami memiliki workshop fabrikasi mandiri dan armada teknisi mobile yang siap menjangkau lokasi Anda dengan cepat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <Building className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">Kantor Pemasaran:</div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">{COMPANY_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">Workshop & Gudang Sparepart:</div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">{COMPANY_INFO.workshopAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">Jam Layanan:</div>
                  <div className="text-slate-600 mt-0.5">{COMPANY_INFO.operationalHours}</div>
                  <div className="text-amber-700 font-semibold mt-0.5">{COMPANY_INFO.emergencyService}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">Telepon & WhatsApp:</div>
                  <div className="text-slate-700 font-mono font-medium mt-0.5">
                    {COMPANY_INFO.phone} / 0813-7766-5544
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">Email Korespondensi:</div>
                  <div className="text-slate-700 font-mono mt-0.5">{COMPANY_INFO.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Geographic Service Coverage */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
                Wilayah Operasional
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Jangkauan Wilayah Survey & Pemasangan
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Layanan bebas biaya survey berlaku untuk seluruh area Jabodetabek. Untuk pengadaan proyek luar kota dan luar pulau, kami menyediakan pengiriman material lengkap panduan instalasi atau pengiriman tim teknisi instalasi terpadu.
              </p>
            </div>

            {/* Coverage Cities Grid (Clean Unboxed Grid) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Area Layanan Prioritas & Survey Cepat:</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                {COVERAGE_CITIES.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="font-medium truncate">{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                <span>📍 Lokasi proyek Anda di luar daftar di atas?</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik,%20apakah%20melayani%20proyek%20di%20luar%20kota?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 underline"
                >
                  Tanyakan Jadwal Proyek Luar Kota
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
