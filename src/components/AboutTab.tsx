interface AboutTabProps {
  onGoToContact: () => void;
}

const aboutData = {
  heroImage: 'img/5.jpg',
  philosophyImageLeft: 'img/1.jpg',
  philosophyImageRight: 'img/2.jpg',
  bioText:
    'Jestem twórcą wideo i koordynatorem social mediów z pasją do opowiadania prawdziwych historii. Zamieniam pot, emocje na trybunach i walkę na boisku w kinowe, pionowe formaty.',
  philosophyText:
    'Każdy mecz, każdy trening, każdy moment za kulisami ma swoją historię. Jestem tam po to, żeby ją uchwycić — surową, prawdziwą i kinową.',
  stats: {
    years: '3+',
    projects: '50+',
    views: '100K+',
  },
  trustedBy: [
    'ZAGŁĘBIE SOSNOWIEC',
    'ON LEMON',
    'FREAK PARK',
    'LOOPZ PARK',
    'HUDERLOK',
  ],
  services: [
    {
      num: '01',
      title: 'RELACJA Z DNIA MECZOWEGO',
      desc: 'Pełna obsługa wideo w dniu meczowym. Praca z poziomu murawy i parkietu, emocje z trybun, kulisy szatni oraz dynamiczne ujęcia akcji.',
      deliverables: ['Formaty Reels / TikTok (9:16)', 'Skróty i najciekawsze akcje', 'Ekspresowy montaż w 24h'],
    },
    {
      num: '02',
      title: 'PIONOWE FORMATY I REELS',
      desc: 'Krótkie, dynamiczne formy wideo skrojone pod algorytmy Instagrama i TikToka. Szybkie tempo montażu, autorski sound design oraz precyzyjny color grading.',
      deliverables: ['Format pionowy 9:16', 'Projektowanie dźwięku i efekty SFX', 'Pakiety rolek na cały tydzień'],
    },
    {
      num: '03',
      title: 'SPOTY REKLAMOWE I PROMO MAREK',
      desc: 'Prezentacje nowych kompletów strojów, ogłoszenia transferowe, spoty wizerunkowe dla marek sportowych i materiały promocyjne klubów.',
      deliverables: ['Spoty wizerunkowe', 'Prezentacje sponsorów', 'Formaty poziome 16:9 oraz pionowe 9:16'],
    },
  ],
};

export default function AboutTab({ onGoToContact }: AboutTabProps) {
  return (
    <div className="animate-fadeIn max-w-375 mx-auto w-full space-y-24 py-4">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 03</span>
            <h1 className="text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              O MNIE <br />
              <span className="text-zinc-600">I TWÓRCZOŚCI</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
              SPORT. EMOCJE. LUDZIE.<br /> TO WŁAŚNIE UCHWYCAM.
            </p>
            <p className="text-[11px] text-zinc-500 font-mono leading-relaxed max-w-[320px]">
              {aboutData.bioText}
            </p>
          </div>

          <div className="pt-4 flex items-center gap-5">
            <button 
              onClick={onGoToContact} 
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group cursor-pointer"
            >
              <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
            </button>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">NAWIĄŻMY WSPÓŁPRACĘ</span>
          </div>
        </div>

        <div className="lg:col-span-3 flex justify-center">
          <div className="relative w-full max-w-75 h-115 border border-zinc-800 bg-[#0a0a0a] rounded-sm overflow-hidden flex flex-col justify-between">
            <img 
              src={aboutData.heroImage} 
              alt="Twórca wideo" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
            
            <div className="relative z-10 p-6 flex flex-col justify-end h-full font-mono text-[9px] text-zinc-400 uppercase tracking-widest space-y-1">
              <p>LEPSZY</p>
              <p>CONTENT</p>
              <p>WIĘKSZE</p>
              <p>CELE</p>
              <p className="text-white font-black text-sm pt-3">SM.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-6 pl-0 xl:pl-4">
          <div className="sm:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">KIM JESTEM</span>
              <h2 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                TWÓRCA Z <br />PASJĄ DO SPORTU
              </h2>
              <p className="text-[11px] font-mono text-zinc-500 leading-relaxed pt-1">
                Zawsze ciągnęło mnie do sportu — tej nieokiełznanej energii, walki i pasji. Połączyłem to z okiem kamery i tworzę materiały, które pomagają sportowcom, drużynom oraz markom opowiadać ich historię poprzez angażujące formaty social media.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.5" />
                    <circle cx="12" cy="13" r="3" strokeWidth="1.5" />
                    <path d="M7 7V5h10v2" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </div>
                <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">WIDEO</h4>
                <p className="text-[8px] font-mono text-zinc-600 uppercase">KINOWE</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="1.5" />
                    <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">SOCIALE</h4>
                <p className="text-[8px] font-mono text-zinc-600 uppercase">ROLKI</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polygon points="9 6 18 12 9 18" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">HISTORIA</h4>
                <p className="text-[8px] font-mono text-zinc-600 uppercase">EMOCJE</p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-4 border-l border-zinc-800/80 pl-6 space-y-8 text-right font-mono">
            <div>
              <span className="text-3xl font-black text-white block">{aboutData.stats.years}</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600">LATA<br/>DOŚWIADCZENIA</span>
            </div>
            <div>
              <span className="text-3xl font-black text-white block">{aboutData.stats.projects}</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600">ZREALIZOWANYCH<br/>PROJEKTÓW</span>
            </div>
            <div>
              <span className="text-3xl font-black text-white block">{aboutData.stats.views}</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600">ŁĄCZNYCH<br/>WYŚWIETLEŃ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 border-t border-zinc-900">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>OFERTA I USŁUGI</span>
            <div className="w-16 h-px bg-zinc-800"></div>
          </div>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">PAKIETY / 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.services.map((srv) => (
            <div key={srv.num} className="border border-zinc-800/60 bg-[#080808] p-6 xl:p-8 space-y-6 rounded-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-zinc-600 uppercase block">/ {srv.num}</span>
                <h3 className="text-lg xl:text-xl font-black uppercase text-white tracking-tight">{srv.title}</h3>
                <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">{srv.desc}</p>
              </div>
              <div className="pt-5 border-t border-zinc-900 space-y-1.5">
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">W RAMACH PAKIETU:</span>
                {srv.deliverables.map((item, idx) => (
                  <p key={idx} className="text-[10px] font-mono text-zinc-300 flex items-center gap-2">
                    <span className="text-zinc-600">+</span> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 border-t border-zinc-900">
        <div className="flex items-center gap-6 mb-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>WSPÓŁPRACA I ZAUFANIE</span>
          <div className="w-16 h-px bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {aboutData.trustedBy.map((brand, idx) => (
            <div
              key={idx}
              className="border border-zinc-900 p-5 flex items-center justify-center text-center font-mono text-[10px] tracking-widest text-zinc-500 uppercase hover:text-white hover:border-zinc-700 transition"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 border-t border-zinc-900">
        <div className="flex items-center gap-6 mb-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>FILOZOFIA DZIAŁANIA</span>
          <div className="w-16 h-px bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-40">
          <div className="lg:col-span-7 relative w-full h-44 border border-zinc-800/50 bg-[#0a0a0a] rounded-sm overflow-hidden group">
            <img 
              src={aboutData.philosophyImageLeft} 
              alt="Stadion" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-700" 
            />
            <div className="absolute inset-0 bg-black/60 flex items-center p-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-snug max-w-md">
                &bdquo;NIE CHODZI TYLKO O SAMĄ GRĘ. CHODZI O LUDZI I ICH HISTORIE.&rdquo;
              </h3>
            </div>
          </div>

          <div className="lg:col-span-3 px-2 space-y-4">
            <p className="text-[10px] font-mono text-zinc-400 leading-relaxed">
              {aboutData.philosophyText}
            </p>
            <div className="text-zinc-300 font-serif italic text-2xl tracking-widest">
              Hudy.
            </div>
          </div>

          <div className="lg:col-span-2 relative w-full h-44 border border-zinc-800/50 rounded-sm overflow-hidden hidden lg:block">
            <img 
              src={aboutData.philosophyImageRight} 
              alt="Detal" 
              className="w-full h-full object-cover grayscale contrast-125" 
            />
            <div className="absolute bottom-3 right-3 text-right font-mono text-[8px] text-zinc-500 uppercase tracking-widest space-y-0.5">
              <p>CONTENT</p><p>SPORTOWY</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}