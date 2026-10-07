import { useState } from 'react';
import { Play, Pause, RotateCcw, Shield, Zap, Sparkles } from 'lucide-react';

type DoorType = 'otomatis-industri' | 'onesheet-solid' | 'perforated-mall' | 'aluminium-garage';

interface DoorConfig {
  name: string;
  categoryLabel: string;
  slatColor: string;
  slatBorderColor: string;
  isPerforated: boolean;
  isOneSheet: boolean;
  motorModel: string;
  openSpeed: string;
  idealApplication: string;
  windResistance: string;
}

const DOOR_CONFIGS: Record<DoorType, DoorConfig> = {
  'otomatis-industri': {
    name: 'Rolling Door Otomatis Industri Slat 1.2mm',
    categoryLabel: 'Heavy Duty Industrial',
    slatColor: 'bg-slate-300',
    slatBorderColor: 'border-slate-400',
    isPerforated: false,
    isOneSheet: false,
    motorModel: 'Shinsei Seiki US-800 Japan (800 kg)',
    openSpeed: '18 cm / detik',
    idealApplication: 'Gudang logistik, pabrik, loading dock trailer',
    windResistance: 'Kelas 4 (Tahan angin kencang hingga 120 km/jam)'
  },
  'onesheet-solid': {
    name: 'Rolling Door One Sheet Solid (Tanpa Sambungan)',
    categoryLabel: 'Commercial Silent Ruko',
    slatColor: 'bg-amber-50',
    slatBorderColor: 'border-amber-200',
    isPerforated: false,
    isOneSheet: true,
    motorModel: 'Spring Torsi Manual Ringan / Somfy Tubular',
    openSpeed: 'Manual enteng / Elektrik silent',
    idealApplication: 'Ruko modern, kios perkantoran, perumahan',
    windResistance: 'Standar ruko perkotaan'
  },
  'perforated-mall': {
    name: 'Rolling Door One Sheet Full Perforated',
    categoryLabel: 'Retail & Mall Outlet',
    slatColor: 'bg-slate-100',
    slatBorderColor: 'border-slate-300',
    isPerforated: true,
    isOneSheet: false,
    motorModel: 'Motor Shigeru 400kg / Manual Spring',
    openSpeed: '15 cm / detik',
    idealApplication: 'Gerai mall, butik fashion, toko perhiasan',
    windResistance: 'Optimal untuk sirkulasi udara indoor mall'
  },
  'aluminium-garage': {
    name: 'Rolling Door Slat Aluminium Anodized',
    categoryLabel: 'Anti-Rust Premium',
    slatColor: 'bg-zinc-600',
    slatBorderColor: 'border-zinc-500',
    isPerforated: false,
    isOneSheet: false,
    motorModel: 'Motor Eastman 600kg Elektrik',
    openSpeed: '16 cm / detik',
    idealApplication: 'Garasi residensial mewah, area pesisir, cold storage',
    windResistance: 'Aluminium Alloy 6063-T5 kokoh & ringan'
  }
};

export default function InteractiveDoorSimulator() {
  const [selectedType, setSelectedType] = useState<DoorType>('otomatis-industri');
  // doorOpenPercent: 0 = fully closed, 100 = fully open (rolled up into drum)
  const [doorOpenPercent, setDoorOpenPercent] = useState<number>(30);
  const [isMotorMoving, setIsMotorMoving] = useState<boolean>(false);

  const currentConfig = DOOR_CONFIGS[selectedType];

  const handleOpenFully = () => {
    setIsMotorMoving(true);
    setDoorOpenPercent(95);
    setTimeout(() => setIsMotorMoving(false), 800);
  };

  const handleCloseFully = () => {
    setIsMotorMoving(true);
    setDoorOpenPercent(0);
    setTimeout(() => setIsMotorMoving(false), 800);
  };

  const handleHalfOpen = () => {
    setIsMotorMoving(true);
    setDoorOpenPercent(50);
    setTimeout(() => setIsMotorMoving(false), 800);
  };

  // Generate slats representation
  const totalSlats = 16;
  // Calculate how many slats are rolled up inside drum
  const rolledUpSlatsCount = Math.floor((doorOpenPercent / 100) * totalSlats);
  const visibleSlatsCount = totalSlats - rolledUpSlatsCount;

  return (
    <section id="simulasi" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Simulasi Interaktif Pintu
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Uji Coba Visual Operasional Rolling Door
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Pilih model rolling door dan kendalikan bukaan pintu secara langsung. Pelajari bagaimana mekanisme gulungan slat, lubang perforasi mall, dan motor otomatis bekerja melindungi properti Anda.
          </p>
        </div>

        {/* Model Selector Tabs (Interactive functional buttons) */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-800 rounded-xl max-w-fit border border-slate-700">
          {(Object.keys(DOOR_CONFIGS) as DoorType[]).map((key) => {
            const config = DOOR_CONFIGS[key];
            const isActive = selectedType === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {config.categoryLabel}
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace: Left = Door Visualizer, Right = Controller & Technical Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Door Frame (Industrial Mockup) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
            
            {/* Top Rolling Hood Box (Drum Penggulung) */}
            <div className="relative mb-2">
              <div className="h-16 sm:h-20 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-t-lg border-b-2 border-amber-500/70 p-3 flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-500 bg-slate-900 flex items-center justify-center relative">
                    {/* Rotating Drum Axis Wheel */}
                    <div
                      className={`w-7 h-7 rounded-full border-2 border-amber-400 border-dashed transition-transform duration-700 ${
                        isMotorMoving ? 'rotate-180 animate-spin' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Box Penutup / Drum As Pipa</div>
                    <div className="text-[11px] text-amber-400 font-mono">
                      {isMotorMoving ? 'Motor Aktif Berputar...' : 'Status: Standby Terkunci'}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-mono">Bukaan Daun:</span>
                  <span className="text-sm font-extrabold text-amber-400 font-mono tabular-nums">
                    {doorOpenPercent}% Terbuka
                  </span>
                </div>
              </div>
            </div>

            {/* Door Portal Frame with Guide Rails on sides */}
            <div className="relative h-[360px] sm:h-[420px] bg-slate-900 rounded-b-lg border-x-8 border-slate-700 overflow-hidden flex flex-col justify-end">
              
              {/* Background Interior (e.g., inside shop or warehouse) */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between p-6 pointer-events-none">
                <div className="text-xs text-slate-500 uppercase tracking-widest font-mono text-center">
                  Area Dalam Bangunan (Interior Showroom / Gudang)
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
                  <span>[Sensor Photocell Kiri]</span>
                  <span>Lantai Kerja Beton / Finishing Epoksi</span>
                  <span>[Sensor Photocell Kanan]</span>
                </div>
              </div>

              {/* Rolling Slats Layer (moves up/down based on doorOpenPercent) */}
              <div
                className="w-full transition-all duration-700 ease-out flex flex-col justify-start relative z-10 shadow-2xl"
                style={{
                  height: `${100 - doorOpenPercent}%`,
                }}
              >
                {/* One sheet vs Multi slat rendering */}
                {currentConfig.isOneSheet ? (
                  <div className={`w-full h-full ${currentConfig.slatColor} relative border-t-4 border-slate-500 shadow-md flex flex-col justify-between p-4 overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,rgba(0,0,0,0.06)_100%)] [background-size:100%_40px] pointer-events-none" />
                    <div className="text-slate-700/80 text-xs font-semibold uppercase tracking-wider text-center pt-2">
                      Permukaan Utuh One Sheet (Bebas Sambungan Plat)
                    </div>
                    {/* Silencer edge indicators */}
                    <div className="absolute left-1 top-0 bottom-0 w-2 bg-slate-600/30 rounded-xs" title="Nylon Silencer Strip" />
                    <div className="absolute right-1 top-0 bottom-0 w-2 bg-slate-600/30 rounded-xs" title="Nylon Silencer Strip" />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col overflow-hidden bg-slate-400">
                    {Array.from({ length: totalSlats }).map((_, i) => {
                      if (i >= visibleSlatsCount) return null;
                      return (
                        <div
                          key={i}
                          className={`w-full flex-1 border-b ${currentConfig.slatBorderColor} ${currentConfig.slatColor} flex items-center justify-center relative overflow-hidden`}
                        >
                          {/* Perforated holes pattern if perforated */}
                          {currentConfig.isPerforated ? (
                            <div className="w-full h-full flex items-center justify-around opacity-60">
                              {Array.from({ length: 18 }).map((_, dotIdx) => (
                                <div key={dotIdx} className="w-1 h-1 rounded-full bg-slate-900/60" />
                              ))}
                            </div>
                          ) : (
                            <div className="w-full h-[1px] bg-white/20 absolute top-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Bottom Rail Bar (Bilah Bawah Pengunci) */}
                <div className="h-10 sm:h-12 bg-slate-800 border-t-2 border-slate-600 border-b-4 border-amber-500 px-4 flex items-center justify-between text-slate-300 font-mono text-xs">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-bold">Bottom Rail T-Lock</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {doorOpenPercent === 0 ? 'Terkunci Rapat' : 'Posisi Bergerak'}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom guide info */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span>Rel Samping Wind-Lock U-Profile</span>
              <span>Karet Bantalan Peredam Getaran Dasar</span>
            </div>

          </div>

          {/* Controller & Technical Specs Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Control Panel Box */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg space-y-5">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Panel Kontrol Operasional</h3>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-sm">
                  Simulasi Remote
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={handleOpenFully}
                  disabled={doorOpenPercent === 95}
                  className="py-3 px-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Play className="w-4 h-4 rotate-270" />
                  <span>Buka Penuh (95%)</span>
                </button>
                <button
                  onClick={handleHalfOpen}
                  className="py-3 px-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <Pause className="w-4 h-4" />
                  <span>Buka 50%</span>
                </button>
                <button
                  onClick={handleCloseFully}
                  disabled={doorOpenPercent === 0}
                  className="py-3 px-2 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-500 text-white flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Tutup Rapat (0%)</span>
                </button>
              </div>

              {/* Manual Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Atur Manual Ketinggian:</span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums">
                    {doorOpenPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={doorOpenPercent}
                  onChange={(e) => setDoorOpenPercent(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-700 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>0% (Tutup)</span>
                  <span>50% (Sedang)</span>
                  <span>95% (Buka Maksimal)</span>
                </div>
              </div>
            </div>

            {/* Specifications for Selected Door */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {currentConfig.categoryLabel}
                </div>
                <h4 className="text-lg font-bold text-white mt-1">
                  {currentConfig.name}
                </h4>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-700/80 pt-3">
                <div className="flex justify-between py-1 border-b border-slate-700/40">
                  <span className="text-slate-400">Motor Elektrik:</span>
                  <span className="font-medium text-white text-right">{currentConfig.motorModel}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/40">
                  <span className="text-slate-400">Kecepatan Buka:</span>
                  <span className="font-mono text-amber-300">{currentConfig.openSpeed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/40">
                  <span className="text-slate-400">Ketahanan Angin:</span>
                  <span className="font-medium text-white text-right">{currentConfig.windResistance}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Aplikasi Ideal:</span>
                  <span className="font-medium text-slate-200 text-right max-w-[200px]">{currentConfig.idealApplication}</span>
                </div>
              </div>

              <a
                href="#form-survey"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Konsultasikan Model Ini ke Teknisi</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
