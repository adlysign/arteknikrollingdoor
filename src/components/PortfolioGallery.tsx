import { useState } from 'react';
import { MapPin, Clock, Layers } from 'lucide-react';
import { PORTFOLIO } from '../data/content';

export default function PortfolioGallery() {
  const [activeSector, setActiveSector] = useState<string>('all');

  const sectors = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'gudang', label: 'Gudang & Industri' },
    { id: 'ruko', label: 'Ruko & Komersial' },
    { id: 'mall', label: 'Mall & Retail' },
  ];

  const filteredPortfolio = activeSector === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter((item) => item.sector === activeSector);

  return (
    <section id="portofolio" className="py-16 lg:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
              Bukti Pengalaman Kerja Nyata
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Portofolio Pemasangan di Berbagai Sektor
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Dokumentasi pengerjaan rolling door terpasang di pusat pergudangan, pusat perbelanjaan, dan kawasan komersial Jabodetabek serta Jawa Barat.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit border border-slate-200 shrink-0">
            {sectors.map((sec) => {
              const isActive = activeSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSector(sec.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPortfolio.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image Container with Fallback */}
              <div className="relative h-64 sm:h-72 bg-slate-900 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Location indicator */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700 font-mono text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{proj.completionTime}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    Klien: {proj.client}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Technical data chips as unboxed text */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Spesifikasi:</span>
                    <span className="font-medium text-slate-800 line-clamp-1">{proj.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Dimensi:</span>
                    <span className="font-medium text-slate-800">{proj.dimension}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
