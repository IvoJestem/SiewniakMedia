import { useState } from 'react';

const contactData = {
  email: 'kubasiewniak1@gmail.com',
  location: 'Śląsk / Katowice, Polska',
  instagramUrl: 'https://www.instagram.com/siewniakfilms/',
  tiktokUrl: 'https://tiktok.com/@huderlokyt/',
  portraitImage: 'img/5.jpg',
};

export default function ContactTab() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fadeIn max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
        
        {/* LEWA KOLUMNA: TYTUŁ I OPIS */}
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-6">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 04</span>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85]">
              KONTAKT
            </h1>
          </div>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
            STWÓRZMY COŚ <br /> WYJĄTKOWEGO RAZEM.
          </p>
          <p className="text-[11px] text-zinc-500 font-mono leading-relaxed pt-2">
            Planujesz projekt, potrzebujesz dynamicznej relacji wideo z meczu lub stałej obsługi social media? Wybierz najwygodniejszy sposób kontaktu i napisz bezpośrednio.
          </p>
          
          <div className="pt-6 border-t border-zinc-900 font-mono text-[9px] uppercase tracking-widest space-y-2">
            <p className="flex items-center gap-2 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              STATUS: DOSTĘPNY NA ZLECENIA
            </p>
            <p className="text-zinc-600">CZAS ODPOWIEDZI: ZWYKLE DO 24H</p>
          </div>
        </div>

        {/* ŚRODKOWA KOLUMNA: DIRECT CONTACT HUB (ZASTĘPSTWO FORMULARZA) */}
        <div className="lg:col-span-4 space-y-4 font-mono text-[10px]">
          
          {/* KAFELEK 1: POCZTA EMAIL */}
          <div className="border border-zinc-900 bg-[#080808]/80 p-6 rounded-sm space-y-5 hover:border-zinc-700 transition">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 uppercase tracking-widest text-[9px]">/ 01 BEZPOŚREDNI EMAIL</span>
              <span className="text-zinc-700 text-[9px]">POCZTA</span>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider pb-1">ADRES ODBIORCY</p>
              <p className="text-sm font-bold text-white tracking-tight select-all">
                {contactData.email}
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 py-3 px-4 border border-zinc-800 bg-zinc-950 text-white text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition cursor-pointer text-center font-bold"
              >
                {copied ? 'SKOPIOWANO DO SCHOWKA ✓' : 'SKOPIUJ ADRES EMAIL'}
              </button>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 border border-zinc-800 bg-zinc-900 text-zinc-300 text-[10px] uppercase tracking-widest hover:border-zinc-600 hover:text-white transition flex items-center justify-center"
                title="Otwórz kompozytor w Gmailu"
              >
                ↗
              </a>
            </div>
          </div>

          {/* KAFELEK 2: INSTAGRAM DIRECT */}
          <div className="border border-zinc-900 bg-[#080808]/80 p-6 rounded-sm space-y-5 hover:border-zinc-700 transition">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 uppercase tracking-widest text-[9px]">/ 02 NAJSZYBSZY KONTAKT</span>
              <span className="text-zinc-700 text-[9px]">DM</span>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider pb-1">INSTAGRAM</p>
              <p className="text-sm font-bold text-white tracking-tight">@siewniakfilms</p>
            </div>
            <a
              href={contactData.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 border border-zinc-800 bg-zinc-950 text-white text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition cursor-pointer text-center block font-bold"
            >
              NAPISZ WIADOMOŚĆ NA INSTAGRAMIE →
            </a>
          </div>

          {/* KAFELEK 3: TIKTOK */}
          <div className="border border-zinc-900 bg-[#080808]/80 p-5 rounded-sm flex items-center justify-between hover:border-zinc-700 transition">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest text-[8px] block">TIKTOK</span>
              <span className="text-white text-xs font-bold">@huderlokyt</span>
            </div>
            <a
              href={contactData.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 border border-zinc-800 text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white hover:border-zinc-600 transition"
            >
              ZOBACZ PROFIL ↗
            </a>
          </div>

        </div>

        {/* PRAWA KOLUMNA 1: SZCZEGÓŁY BAZY I SOCIALI */}
        <div className="lg:col-span-2 font-mono text-[10px] space-y-12">
          <div className="space-y-6">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">
              LOKALIZACJA
            </span>
            <div className="space-y-1">
              <span className="uppercase tracking-widest text-zinc-500 block">OBSZAR DZIAŁANIA</span>
              <p className="text-zinc-200 leading-relaxed">
                {contactData.location.split(' / ')[0]} / <br />
                {contactData.location.split(' / ')[1]}
              </p>
              <p className="text-zinc-600 text-[9px] pt-1">Dyspozycyjność w całej Polsce</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">
              SOCIAL MEDIA
            </span>
            <div className="space-y-3 text-zinc-300">
              <a 
                href={contactData.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between hover:text-white transition group"
              >
                <span className="text-zinc-500 group-hover:text-zinc-300">IG</span> 
                <span>Instagram ↗</span>
              </a>
              <a 
                href={contactData.tiktokUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between hover:text-white transition group"
              >
                <span className="text-zinc-500 group-hover:text-zinc-300">TT</span> 
                <span>TikTok ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* PRAWA KOLUMNA 2: PORTRET AUTORA */}
        <div className="lg:col-span-3 flex justify-end h-full">
          <div className="group relative w-full max-w-75 aspect-1/2 overflow-hidden border border-zinc-900 rounded-sm cursor-pointer">
            <img 
              src={contactData.portraitImage} 
              alt="Twórca wideo" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute top-8 right-8 text-right font-mono text-[9px] text-zinc-500 uppercase tracking-widest space-y-1 pointer-events-none">
              <p>SPORT.</p>
              <p>EMOCJE.</p>
              <p className="text-white">OBRAZ.</p>
              <p className="text-white">HISTORIA.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}