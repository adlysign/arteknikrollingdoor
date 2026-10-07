import { useState } from 'react';
import { Send, CheckCircle, ShieldCheck, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { LeadFormData } from '../types';

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    whatsappNumber: '',
    projectCity: 'Jakarta',
    serviceType: 'Pemasangan Unit Baru',
    doorType: 'Rolling Door Otomatis Industri',
    estimatedWidth: '',
    estimatedHeight: '',
    urgency: 'Standar (Dalam 1 Minggu)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMessage('Mohon cantumkan nama lengkap Anda.');
      return;
    }
    if (!formData.whatsappNumber.trim() || formData.whatsappNumber.length < 8) {
      setErrorMessage('Mohon cantumkan nomor WhatsApp aktif yang valid.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `*PERMINTAAN SURVEY & PENAWARAN (WEBSITE)*%0A%0A` +
      `• *Nama*: ${formData.fullName}%0A` +
      `• *No. WhatsApp*: ${formData.whatsappNumber}%0A` +
      `• *Lokasi Proyek*: ${formData.projectCity}%0A` +
      `• *Jenis Layanan*: ${formData.serviceType}%0A` +
      `• *Tipe Pintu*: ${formData.doorType}%0A` +
      `• *Perkiraan Ukuran*: Lebar ${formData.estimatedWidth || '-'} m x Tinggi ${formData.estimatedHeight || '-'} m%0A` +
      `• *Tingkat Kebutuhan*: ${formData.urgency}%0A` +
      `• *Catatan Tambahan*: ${formData.notes || 'Tidak ada catatan'}%0A%0A` +
      `Mohon dihubungi untuk konfirmasi jadwal survey lokasi gratis. Terima kasih!`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="form-survey" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Briefing & Trust Value */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider">
              Konsultasi & Survey Lokasi
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
              Dapatkan Penawaran Resmi & Jadwal Survey Gratis
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Isi data rencana proyek Anda di samping. Tim teknis AR Teknik akan menghubungi Anda dalam waktu maksimal 30 menit untuk konfirmasi jadwal survey ke lokasi.
            </p>

            <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Apa yang Anda Dapatkan Saat Survey?
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pengukuran akurat dimensi opening dengan meteran laser digital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pemeriksaan kondisi struktur kolom beton & kelistrikan motor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Katalog sampel potongan fisik plat baja galvalum & aluminium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Surat Penawaran Harga (RAB) resmi bertanda tangan & berstempel</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Data Anda aman dan hanya digunakan untuk keperluan survey resmi AR Teknik.</span>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-8 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Permintaan Anda Berhasil Dikirim!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Terima kasih Bapak/Ibu <span className="font-semibold text-slate-900">{formData.fullName}</span>. 
                    Customer Engineer AR Teknik segera menghubungi nomor WhatsApp Anda di <span className="font-semibold text-slate-900">{formData.whatsappNumber}</span>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan Kirim Format Ini ke WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Formulir Permintaan Survey & Penawaran
                  </h3>
                  <p className="text-xs text-slate-500">
                    Gratis survey dan konsultasi untuk seluruh wilayah Jabodetabek.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap / Perusahaan *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Contoh: Bpk. Hendra / PT. Logistik Jaya"
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="Contoh: 081288990123"
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City Location */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kota / Lokasi Proyek
                    </label>
                    <select
                      name="projectCity"
                      value={formData.projectCity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                    >
                      <option value="Jakarta Barat">Jakarta Barat</option>
                      <option value="Jakarta Pusat">Jakarta Pusat</option>
                      <option value="Jakarta Selatan">Jakarta Selatan</option>
                      <option value="Jakarta Timur">Jakarta Timur</option>
                      <option value="Jakarta Utara">Jakarta Utara</option>
                      <option value="Kota Tangerang">Kota Tangerang</option>
                      <option value="Tangerang Selatan">Tangerang Selatan / BSD</option>
                      <option value="Bekasi & Cikarang">Bekasi / Cikarang</option>
                      <option value="Depok">Depok</option>
                      <option value="Bogor">Bogor</option>
                      <option value="Karawang">Karawang</option>
                      <option value="Luar Jabodetabek">Lainnya / Luar Kota</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kebutuhan Layanan
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                    >
                      <option value="Pemasangan Unit Baru">Pemasangan Unit Baru</option>
                      <option value="Servis / Perbaikan Darurat">Servis / Perbaikan Darurat</option>
                      <option value="Upgrade Manual ke Otomatis">Upgrade Manual ke Otomatis (Motor)</option>
                      <option value="Kontrak Perawatan Berkala B2B">Kontrak Perawatan Berkala B2B</option>
                      <option value="Penggantian Sparepart / Per">Penggantian Sparepart / Per</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Door Type */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tipe Rolling Door
                    </label>
                    <select
                      name="doorType"
                      value={formData.doorType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                    >
                      <option value="Rolling Door Otomatis Industri">Otomatis Industri</option>
                      <option value="Rolling Door One Sheet Solid">One Sheet Solid</option>
                      <option value="Rolling Door One Sheet Perforated">Perforated Mall</option>
                      <option value="Rolling Door Aluminium">Aluminium Premium</option>
                      <option value="Rolling Door Besi Slat">Besi Slat Standar</option>
                      <option value="Belum Tahu (Butuh Saran)">Belum Tahu (Butuh Saran)</option>
                    </select>
                  </div>

                  {/* Estimated Width */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Perkiraan Lebar (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="estimatedWidth"
                      value={formData.estimatedWidth}
                      onChange={handleChange}
                      placeholder="Cth: 3.5"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  {/* Estimated Height */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Perkiraan Tinggi (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="estimatedHeight"
                      value={formData.estimatedHeight}
                      onChange={handleChange}
                      placeholder="Cth: 3.2"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Catatan Tambahan / Detail Kendala (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Contoh: Butuh survey hari Sabtu jam 10 pagi, atau pintu anjlok sebelah..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Survey Sekarang</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
