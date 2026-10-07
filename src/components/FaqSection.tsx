import { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Pusat Informasi & Tanya Jawab
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan Seputar Rolling Door
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Berikut jawaban lengkap atas hal-hal yang paling sering ditanyakan oleh calon pelanggan kami.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-100 rounded-2xl text-center space-y-4 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900">
            Punya Pertanyaan Khusus Terkait Proyek Anda?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Konsultasikan langsung dengan kepala teknisi AR Teknik. Kami siap memberikan saran teknis pemilihan material dan estimasi anggaran yang paling tepat untuk Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik,%20saya%20ingin%20tanya%20seputar%20rolling%20door`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Langsung</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold text-xs rounded-lg transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-slate-600" />
              <span>Hubungi {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
