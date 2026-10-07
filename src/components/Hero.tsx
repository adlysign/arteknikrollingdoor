import { ArrowRight, Calculator, ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background subtle mesh & industrial motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400">
              <span>Spesialis Pabrikasi & Instalasi Pintu Gulung</span>
              <span aria-hidden="true">·</span>
              <span>Standar SNI & Industri</span>
              <span aria-hidden="true">·</span>
              <span>Layanan Darurat 24 Jam</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight [text-wrap:balance]">
              Pabrikasi, Pasang & Servis <span className="text-amber-400 underline decoration-amber-500/50 decoration-4 underline-offset-6">Rolling Door</span> Standar Mutu Industri
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Solusi perlindungan gedung, ruko, gudang logistik, mall, dan pabrik Anda. 
              Menggunakan baja galvalum tebal berstandar, mesin motor otomatis Shinsei Seiki / Eastman, 
              dikerjakan presisi oleh teknisi berpengalaman dengan garansi tertulis hingga 3 tahun.
            </p>

            {/* Trust points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Survey Lokasi & Pengukuran Gratis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pengerjaan Cepat 2 - 4 Hari Kerja</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Teknisi Khusus Melayani 24 Jam Panggilan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cakupan Jabodetabek & Seluruh Indonesia</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#form-survey"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Minta Survey & Penawaran Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Micro proof line */}
            <div className="pt-2 text-xs text-slate-400">
              Butuh servis darurat sekarang? Hubungi hotline teknisi:{' '}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-amber-300 font-semibold hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group">
              <img
                src="/src/assets/images/hero_rolling_door_industrial_1791349852425.jpg"
                alt="Pemasangan Rolling Door Otomatis Industri oleh AR Teknik"
                className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              {/* Overlay highlight info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-left">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  <span>Industrial Grade Series</span>
                  <span>Slat Baja 1.2 mm</span>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  Instalasi Rolling Door Otomatis Motor Shinsei Seiki 800kg dengan sensor pengaman photocell di Kawasan Industri Cikarang.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency: Credibility Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-tight">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
