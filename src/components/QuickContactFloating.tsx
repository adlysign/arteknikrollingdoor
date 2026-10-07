import { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function QuickContactFloating() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Expanded quick contact options */}
      {isExpanded && (
        <div className="bg-slate-900 text-white rounded-xl p-3 shadow-2xl border border-slate-700 space-y-2 mb-1 animate-in fade-in slide-in-from-bottom-2 text-xs w-60">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-amber-400">Kontak Cepat AR Teknik</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white"
              aria-label="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20AR%20Teknik%20Rolling%20Door,%20saya%20ingin%20konsultasi`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <div className="truncate">
              <div>WhatsApp Chat Langsung</div>
              <div className="text-[10px] text-emerald-100">Respon dalam 5 menit</div>
            </div>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <div>Telepon Hotline</div>
              <div className="text-[10px] text-slate-400">{COMPANY_INFO.phone}</div>
            </div>
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex items-center gap-2.5 py-3 px-4.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 border-2 border-white/20"
        aria-label="Hubungi WhatsApp atau Telepon"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs tracking-wide">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
}
