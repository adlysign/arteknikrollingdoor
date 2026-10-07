import { useState } from 'react';
import { ArrowRight, Check, X, Shield, Wrench, MessageSquare } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/content';
import { RollingDoorProduct } from '../types';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<RollingDoorProduct | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'otomatis', label: 'Otomatis Industri' },
    { id: 'onesheet', label: 'One Sheet Ruko' },
    { id: 'perforated', label: 'Perforated Mall' },
    { id: 'aluminium', label: 'Aluminium Premium' },
    { id: 'servis', label: 'Servis & Sparepart' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="produk" className="py-16 lg:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Katalog Produk & Solusi Mekanikal
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Pilihan Rolling Door Standar Mutu SNI & Internasional
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dari kebutuhan gerai mall berestetika tinggi hingga pintu gerbang logistik industri berbeban ekstra berat. 
            Semua unit dirancang presisi dengan ketahanan jangka panjang.
          </p>
        </div>

        {/* Filter Bar (Interactive functional button segmented control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit mb-10 border border-slate-200">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Product Image with Fallback */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Price tag watermark bottom right */}
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-md border border-slate-700 text-xs font-mono font-bold text-amber-400">
                  {product.priceDisplay}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed metadata (anti-pill) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="capitalize font-semibold text-amber-600">{product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tebal {product.specs.thickness}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Quick specs highlights */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">Material: {product.specs.material}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">Garansi: {product.specs.warranty}</span>
                  </div>
                </div>

                {/* Card actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
                  >
                    Detail Spesifikasi
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik,%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(product.name)}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-lg transition-colors flex items-center justify-center"
                    title="Konsultasi WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Specification Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                  Lembar Spesifikasi Teknis
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {activeModalProduct.name}
                </h3>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  {activeModalProduct.priceDisplay}
                </div>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Tutup spesifikasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalProduct.description}
            </p>

            {/* Application */}
            <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900">
              <span className="font-bold">Direkomendasikan Untuk: </span>
              {activeModalProduct.bestFor}
            </div>

            {/* Technical Data Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Parameter Teknis & Material
              </h4>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-3 p-3 bg-slate-50">
                  <span className="text-slate-500 font-medium">Bahan Baku Slat</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.specs.material}</span>
                </div>
                <div className="grid grid-cols-3 p-3 bg-white">
                  <span className="text-slate-500 font-medium">Pilihan Ketebalan</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.thicknessOptions.join(', ')}</span>
                </div>
                <div className="grid grid-cols-3 p-3 bg-slate-50">
                  <span className="text-slate-500 font-medium">Dimensi Maksimal</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.specs.maxDimension}</span>
                </div>
                {activeModalProduct.specs.motorOptions && (
                  <div className="grid grid-cols-3 p-3 bg-white">
                    <span className="text-slate-500 font-medium">Opsi Motor Penggerak</span>
                    <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.specs.motorOptions}</span>
                  </div>
                )}
                <div className="grid grid-cols-3 p-3 bg-slate-50">
                  <span className="text-slate-500 font-medium">Sistem Penguncian</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.specs.lockingSystem}</span>
                </div>
                <div className="grid grid-cols-3 p-3 bg-white">
                  <span className="text-slate-500 font-medium">Ketentuan Garansi</span>
                  <span className="col-span-2 text-emerald-700 font-bold">{activeModalProduct.specs.warranty}</span>
                </div>
                <div className="grid grid-cols-3 p-3 bg-slate-50">
                  <span className="text-slate-500 font-medium">Pilihan Warna Finishing</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{activeModalProduct.specs.finishColor}</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Keunggulan Desain & Konstruksi
              </h4>
              <div className="space-y-1.5 text-xs text-slate-600">
                {activeModalProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik,%20saya%20ingin%20memesan%20atau%20survey%20untuk%20*${encodeURIComponent(activeModalProduct.name)}*`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan Pemesanan Ini via WhatsApp</span>
              </a>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
