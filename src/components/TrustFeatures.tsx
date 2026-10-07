import { ShieldCheck, Award, Wrench, Ruler, Headphones, Banknote } from 'lucide-react';

export default function TrustFeatures() {
  const points = [
    {
      icon: Ruler,
      title: 'Survey & Pengukuran Gratis',
      desc: 'Teknisi kami datang ke lokasi Anda membawa sampel fisik material, mengukur opening secara presisi tanpa dipungut biaya apapun.'
    },
    {
      icon: Award,
      title: 'Material 100% Standar SNI',
      desc: 'Hanya menggunakan plat baja galvalum, zincalume, dan aluminium berstandar pabrikasi resmi, bukan plat tipis non-standar.'
    },
    {
      icon: ShieldCheck,
      title: 'Garansi Resmi Tertulis',
      desc: 'Setiap instalasi unit baru disertai kartu garansi resmi hingga 3 tahun untuk mesin motor industri dan 1 tahun untuk mekanisme daun.'
    },
    {
      icon: Headphones,
      title: 'Layanan Tanggap 24 Jam',
      desc: 'Armada servis siaga meluncur kapanpun pintu rolling door Anda mengalami gangguan mendadak di jam sibuk operasional.'
    },
    {
      icon: Wrench,
      title: 'Sparepart Asli Ready Stock',
      desc: 'Stok suku cadang melimpah: motor Shinsei Seiki, Eastman, Shigeru, spring per baja torsi, remote control, dan bearing industri.'
    },
    {
      icon: Banknote,
      title: 'Harga Pabrikasi Transparan',
      desc: 'Harga langsung dari bengkel produksi tanpa perantara. Rincian penawaran (RAB) jelas dan mengikat tanpa biaya siluman.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Standar Mutu & Kepercayaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Mengapa Ratusan Pemilik Bisnis & Kontraktor Memilih AR Teknik?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Komitmen kami adalah menghadirkan pintu keamanan yang kuat, tahan lama, dan bekerja mulus tanpa membuat Anda khawatir dengan biaya perbaikan berulang.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-amber-400 transition-colors space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
