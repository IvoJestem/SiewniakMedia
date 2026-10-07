import React, { useState } from 'react';

const contactData = {
  email: 'kontakt@siewniakmedia.pl',
  location: 'Śląsk / Katowice, Polska',
  instagramUrl: 'https://www.instagram.com/siewniakfilms/',
  tiktokUrl: 'https://tiktok.com/@huderlokyt/',
  portraitImage: 'img/5.jpg',
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactTab() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'Relacja meczowa',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'IMIĘ JEST WYMAGANE';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'MINIMUM 2 ZNAKI';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'ADRES EMAIL JEST WYMAGANY';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'NIEPRAWIDŁOWY FORMAT EMAIL';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'WIADOMOŚĆ NIE MOŻE BYĆ PUSTA';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'WIADOMOŚĆ ZA KRÓTKA (MIN. 10 ZNAKÓW)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSent(true);
    setFormData({
      name: '',
      email: '',
      subject: 'Relacja meczowa',
      message: '',
    });

    setTimeout(() => setSent(false), 4000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fadeIn max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
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
          <p className="text-[11px] text-zinc-500 font-mono leading-relaxed pt-4">
            Planujesz projekt, potrzebujesz dynamicznej relacji wideo lub stałej obsługi social media? Napisz do mnie — odpowiem najszybciej jak to możliwe.
          </p>
          
          <div className="pt-8 flex items-center gap-6">
            <button 
              onClick={scrollToForm}
              className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-white hover:text-black hover:border-white transition duration-300 group cursor-pointer"
              title="Przejdź do formularza"
            >
              <span className="text-sm transition-transform group-hover:translate-y-1">↓</span>
            </button>
            <a 
              href={`mailto:${contactData.email}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition"
            >
              NAPISZ EMAIL
            </a>
          </div>
        </div>

        <div id="contact-form" className="lg:col-span-4 scroll-mt-12">
          <form noValidate onSubmit={handleSubmit} className="space-y-6 font-mono text-[10px]">
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-zinc-500 uppercase tracking-widest block">IMIĘ I NAZWISKO</label>
                {errors.name && (
                  <span className="text-red-500 tracking-wider font-bold">! {errors.name}</span>
                )}
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Twoje imię"
                className={`w-full bg-transparent border rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none transition ${
                  errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 focus:border-zinc-500'
                }`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-zinc-500 uppercase tracking-widest block">EMAIL</label>
                {errors.email && (
                  <span className="text-red-500 tracking-wider font-bold">! {errors.email}</span>
                )}
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="twoj@email.pl"
                className={`w-full bg-transparent border rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none transition ${
                  errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 focus:border-zinc-500'
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 uppercase tracking-widest block">TEMAT</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border border-zinc-800 rounded-sm px-4 py-3 text-zinc-200 focus:outline-none focus:border-zinc-500 transition appearance-none cursor-pointer"
              >
                <option className="bg-black">Relacja meczowa (Matchday)</option>
                <option className="bg-black">Materiały do Social Media (Reels / TikTok)</option>
                <option className="bg-black">Spot reklamowy / Prezentacja</option>
                <option className="bg-black">Inne</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-zinc-500 uppercase tracking-widest block">WIADOMOŚĆ</label>
                {errors.message && (
                  <span className="text-red-500 tracking-wider font-bold">! {errors.message}</span>
                )}
              </div>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Opisz krótko swój projekt..."
                className={`w-full bg-transparent border rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none transition resize-none ${
                  errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 focus:border-zinc-500'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest rounded-sm transition flex items-center justify-between px-6 mt-4 cursor-pointer"
            >
              <span>{sent ? 'WIADOMOŚĆ WYSŁANA' : 'WYŚLIJ WIADOMOŚĆ'}</span>
              {!sent && <span>→</span>}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 font-mono text-[10px] space-y-12">
          <div className="space-y-6">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">DANE KONTAKTOWE</span>
            <div className="space-y-1">
              <span className="uppercase tracking-widest text-zinc-500 block">EMAIL</span>
              <a href={`mailto:${contactData.email}`} className="text-zinc-200 hover:text-white transition">
                {contactData.email}
              </a>
            </div>
            <div className="space-y-1">
              <span className="uppercase tracking-widest text-zinc-500 block">LOKALIZACJA</span>
              <p className="text-zinc-200">
                {contactData.location.split(' / ')[0]} / <br className="hidden lg:block"/>
                {contactData.location.split(' / ')[1]} <br />
                <span className="text-zinc-600">(Praca w całej Polsce i zdalnie)</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">OBSERWUJ MNIE</span>
            <div className="space-y-3 text-zinc-300">
              <a href={contactData.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition">
                <span>IG</span> <span>Instagram</span>
              </a>
              <a href={contactData.tiktokUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition">
                <span>TT</span> <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

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