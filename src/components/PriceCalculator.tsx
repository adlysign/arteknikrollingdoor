import { useState, useId } from 'react';
import { Calculator, MessageSquare, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface DoorPricingTier {
  id: string;
  name: string;
  pricePerM2: number;
  category: string;
  recommendedThickness: string;
  description: string;
  defaultMotorNeeded: boolean;
}

const PRICING_TIERS: DoorPricingTier[] = [
  {
    id: 'otomatis-industri',
    name: 'Rolling Door Otomatis Industri Slat 1.0mm - 1.2mm',
    pricePerM2: 1350000,
    category: 'Pabrik & Gudang',
    recommendedThickness: '1.0 mm s/d 1.2 mm',
    description: 'Baja galvalum tebal dengan wind-lock guide rail anti terpaan angin badai.',
    defaultMotorNeeded: true
  },
  {
    id: 'onesheet-solid',
    name: 'Rolling Door One Sheet Solid (Tanpa Sambungan)',
    pricePerM2: 580000,
    category: 'Ruko & Toko',
    recommendedThickness: '0.55 mm Zincalume',
    description: 'Permukaan mulus tanpa sambungan, dilengkapi nylon silencer belt senyap.',
    defaultMotorNeeded: false
  },
  {
    id: 'onesheet-perforated',
    name: 'Rolling Door One Sheet Full / Semi Perforated',
    pricePerM2: 680000,
    category: 'Mall & Retail',
    recommendedThickness: '0.60 mm Galvalum',
    description: 'Berlubang mikro estetis, tembus pandang etalase toko & ventilasi udara lancar.',
    defaultMotorNeeded: false
  },
  {
    id: 'aluminium-premium',
    name: 'Rolling Door Slat Aluminium Anti Karat',
    pricePerM2: 780000,
    category: 'Garasi & Daerah Lembap',
    recommendedThickness: '0.9 mm Aluminium Alloy',
    description: '100% Bebas karat selamanya, finishing anodized mewah, sangat ringan.',
    defaultMotorNeeded: false
  },
  {
    id: 'besi-ekonomis',
    name: 'Rolling Door Besi Slat Standar (Ekonomis)',
    pricePerM2: 420000,
    category: 'Kios & Pasar',
    recommendedThickness: '0.45 mm Besi Cat',
    description: 'Solusi hemat biaya untuk ruko kecil, pasar, dan gudang semi-permanen.',
    defaultMotorNeeded: false
  }
];

export default function PriceCalculator() {
  const [selectedTierId, setSelectedTierId] = useState<string>('otomatis-industri');
  const [width, setWidth] = useState<number>(3.5);
  const [height, setHeight] = useState<number>(3.2);
  
  // Options
  const [includeMotor, setIncludeMotor] = useState<boolean>(true);
  const [includeSensor, setIncludeSensor] = useState<boolean>(false);
  const [includeChainHoist, setIncludeChainHoist] = useState<boolean>(true);
  const [includeOldDismantle, setIncludeOldDismantle] = useState<boolean>(false);
  const [cityLocation, setCityLocation] = useState<string>('Jakarta & Tangerang');

  const selectedTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[0];

  // Calculation logic
  // Effective door area with 0.5m top rolling box allowance
  const calculatedHeight = height + 0.4; // 40cm allowance for rolling drum hood
  const rawArea = width * calculatedHeight;
  // Minimum chargeable area in rolling door industry is typically 6.0 m2
  const effectiveArea = Math.max(6.0, Number(rawArea.toFixed(2)));

  const materialCost = Math.round(effectiveArea * selectedTier.pricePerM2);
  const motorCost = includeMotor ? 4500000 : 0; // Shinsei Seiki / Eastman heavy duty motor + 2 remotes + push button
  const sensorCost = includeSensor ? 850000 : 0; // Photocell anti jepit
  const chainHoistCost = (includeMotor && includeChainHoist) ? 0 : (includeChainHoist ? 650000 : 0); // usually included in industrial motor package, otherwise add manual hoist
  const dismantleCost = includeOldDismantle ? 350000 : 0; // Jasa bongkar pintu lama

  const totalEstimate = materialCost + motorCost + sensorCost + chainHoistCost + dismantleCost;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const generateWhatsAppMessage = () => {
    const text = `Halo AR Teknik Rolling Door, saya ingin konsultasi estimasi harga:%0A%0A` +
      `*Detail Rencana Pintu:*%0A` +
      `• Jenis: ${selectedTier.name}%0A` +
      `• Ukuran Bersih: Lebar ${width} m x Tinggi ${height} m%0A` +
      `• Luas Efektif: ${effectiveArea} m²%0A` +
      `• Mesin Motor Otomatis: ${includeMotor ? 'Ya (+ Motor Shinsei/Eastman & Remote)' : 'Tidak (Manual Spring)'}%0A` +
      `• Sensor Photocell Anti-Jepit: ${includeSensor ? 'Ya' : 'Tidak'}%0A` +
      `• Bongkar Pintu Lama: ${includeOldDismantle ? 'Ya' : 'Tidak'}%0A` +
      `• Lokasi Proyek: ${cityLocation}%0A` +
      `• Perkiraan Estimasi: ${formatRupiah(totalEstimate)}%0A%0A` +
      `Mohon jadwal survey lokasi atau penawaran resmi (Quotation) untuk proyek ini. Terima kasih!`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  const widthId = useId();
  const heightId = useId();
  const locationId = useId();

  return (
    <section id="kalkulator" className="py-16 lg:py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Estimator Cepat Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Kalkulator Estimasi Biaya Rolling Door
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dapatkan gambaran anggaran biaya pemasangan rolling door secara langsung. 
            Hasil perhitungan dapat langsung diteruskan ke tim teknis AR Teknik untuk penjadwalan survey lokasi gratis.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* 1. Pilih Jenis Rolling Door */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Pilih Jenis Rolling Door
              </label>
              <div className="space-y-2.5">
                {PRICING_TIERS.map((tier) => {
                  const isChecked = tier.id === selectedTierId;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        setSelectedTierId(tier.id);
                        if (tier.defaultMotorNeeded) setIncludeMotor(true);
                      }}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isChecked ? 'border-amber-600 bg-amber-600' : 'border-slate-400'
                          }`}>
                            {isChecked && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="text-sm font-bold text-slate-900">{tier.name}</span>
                        </div>
                        <p className="text-xs text-slate-500 pl-5">{tier.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-extrabold text-amber-700 tabular-nums">
                          {formatRupiah(tier.pricePerM2)}
                        </div>
                        <div className="text-[10px] text-slate-500">per m²</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Dimensi Ukuran */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Masukkan Dimensi Lubang Pintu (Meter)
                </label>
                <span className="text-xs text-slate-500">Min. hitungan 6 m²</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <label htmlFor={widthId} className="cursor-pointer">Lebar Bersih (Opening)</label>
                    <span className="font-mono font-bold text-slate-900 tabular-nums">{width} m</span>
                  </div>
                  <input
                    id={widthId}
                    type="range"
                    min="1.5"
                    max="10.0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>1.5 m</span>
                    <span>5.0 m</span>
                    <span>10.0 m</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <label htmlFor={heightId} className="cursor-pointer">Tinggi Bersih (Opening)</label>
                    <span className="font-mono font-bold text-slate-900 tabular-nums">{height} m</span>
                  </div>
                  <input
                    id={heightId}
                    type="range"
                    min="1.8"
                    max="7.0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>1.8 m</span>
                    <span>4.0 m</span>
                    <span>7.0 m</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Luas Efektif (+ 40cm gulungan as):</span>
                </div>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  {effectiveArea} m²
                </span>
              </div>
            </div>

            {/* 3. Aksesoris Tambahan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Tambahan Perlengkapan & Opsi
              </label>
              <div className="space-y-2">
                
                {/* Motor Elektrik */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeMotor}
                      onChange={(e) => setIncludeMotor(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded-sm focus:ring-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Mesin Motor Elektrik Shinsei / Eastman</div>
                      <div className="text-slate-500 text-[11px]">Termasuk push button, braket as, dan 2 unit remote wireless</div>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 font-mono shrink-0">+ Rp 4.500.000</span>
                </label>

                {/* Sensor Photocell */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeSensor}
                      onChange={(e) => setIncludeSensor(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded-sm focus:ring-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Sensor Photocell Anti-Jepit (Safety Sensor)</div>
                      <div className="text-slate-500 text-[11px]">Pintu otomatis berhenti & naik kembali saat ada objek di bawahnya</div>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 font-mono shrink-0">+ Rp 850.000</span>
                </label>

                {/* Bongkar Pintu Lama */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeOldDismantle}
                      onChange={(e) => setIncludeOldDismantle(e.target.checked)}
                      className="w-4 h-4 text-amber-500 rounded-sm focus:ring-amber-400"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Jasa Bongkar Daun Pintu Rolling Door Lama</div>
                      <div className="text-slate-500 text-[11px]">Pembersihan dan pembongkaran pipa lama sebelum pasang unit baru</div>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 font-mono shrink-0">+ Rp 350.000</span>
                </label>

              </div>
            </div>

            {/* 4. Lokasi Proyek */}
            <div>
              <label htmlFor={locationId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 cursor-pointer">
                4. Wilayah Lokasi Pemasangan
              </label>
              <select
                id={locationId}
                value={cityLocation}
                onChange={(e) => setCityLocation(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500"
              >
                <option value="Jakarta & Tangerang">DKI Jakarta & Kota Tangerang (Survey Bebas Biaya)</option>
                <option value="Bekasi & Cikarang">Bekasi & Kawasan Industri Cikarang (Survey Bebas Biaya)</option>
                <option value="Depok & Bogor">Depok, Cibinong & Kota Bogor (Survey Bebas Biaya)</option>
                <option value="Karawang">Karawang KIIC & Suryacipta</option>
                <option value="Luar Jabodetabek">Luar Jabodetabek (Kirim Material / Tim Khusus)</option>
              </select>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Ringkasan Estimasi Biaya
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {selectedTier.name}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  Ukuran: Lebar {width} m × Tinggi {height} m ({effectiveArea} m²)
                </div>
              </div>

              {/* Cost breakdown */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between items-center">
                  <span>Daun Pintu & Rangka ({effectiveArea} m²):</span>
                  <span className="font-mono font-semibold text-white tabular-nums">
                    {formatRupiah(materialCost)}
                  </span>
                </div>

                {includeMotor && (
                  <div className="flex justify-between items-center">
                    <span>Motor Elektrik + 2 Remote:</span>
                    <span className="font-mono font-semibold text-amber-400 tabular-nums">
                      {formatRupiah(motorCost)}
                    </span>
                  </div>
                )}

                {includeSensor && (
                  <div className="flex justify-between items-center">
                    <span>Sensor Safety Photocell:</span>
                    <span className="font-mono font-semibold text-amber-400 tabular-nums">
                      {formatRupiah(sensorCost)}
                    </span>
                  </div>
                )}

                {includeOldDismantle && (
                  <div className="flex justify-between items-center">
                    <span>Jasa Pembongkaran Pintu Lama:</span>
                    <span className="font-mono font-semibold text-white tabular-nums">
                      {formatRupiah(dismantleCost)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center text-slate-400 pt-1">
                  <span>Jasa Pemasangan & Setting Rel:</span>
                  <span className="text-emerald-400 font-medium">Termasuk (Gratis Pasang)</span>
                </div>

                <div className="flex justify-between items-center text-slate-400">
                  <span>Survey Lokasi & Pengukuran:</span>
                  <span className="text-emerald-400 font-medium">100% Gratis</span>
                </div>
              </div>

              {/* Total Estimated Box */}
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <div className="text-xs text-slate-400 font-medium">Total Perkiraan Biaya:</div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight tabular-nums">
                  {formatRupiah(totalEstimate)}
                </div>
                <div className="text-[11px] text-slate-400">
                  *Harga estimasi belum termasuk PPN 11% bila dibutuhkan faktur pajak perusahaan (B2B).
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-md active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Estimasi ke WhatsApp Teknisi</span>
                </a>

                <a
                  href="#form-survey"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg transition-colors border border-slate-700"
                >
                  <span>Minta Jadwal Survey Lokasi Resmi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Included Benefits */}
              <div className="border-t border-slate-800 pt-4 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Garansi Resmi Mesin hingga 3 Tahun</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bahan Zincalume & Baja SNI Asli</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Waktu Pabrikasi Cepat 2 - 4 Hari Kerja</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
