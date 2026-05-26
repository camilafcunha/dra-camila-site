import { useState } from "react";
import {
  Activity,
  Heart,
  Stethoscope,
  Baby,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  CheckCircle2,
  Clock,
  Menu,
  X,
  Droplets,
  Gauge,
} from "lucide-react";
import draCamilaPhoto from "./assets/dra-camila.jpeg";
import butterflyMark from "./assets/borboleta-dra-camila.png";

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5.4 18.6 6.5 15.4C5.8 14.3 5.5 13.2 5.5 12C5.5 8.4 8.4 5.5 12 5.5S18.5 8.4 18.5 12 15.6 18.5 12 18.5C10.8 18.5 9.7 18.2 8.7 17.6L5.4 18.6Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M9.2 9.4C9.4 9 9.6 8.9 9.9 8.9H10.4C10.5 8.9 10.7 9 10.8 9.2L11.4 10.6C11.5 10.8 11.5 11 11.3 11.2L10.9 11.7C11.4 12.6 12.1 13.2 13 13.7L13.5 13.3C13.7 13.1 13.9 13.1 14.1 13.2L15.5 13.8C15.7 13.9 15.8 14.1 15.8 14.3V14.8C15.8 15.1 15.6 15.4 15.3 15.5C14.8 15.7 14.1 15.8 13.4 15.6C11.3 15 9.1 12.8 8.5 10.7C8.3 10.1 8.5 9.7 9.2 9.4Z"
      fill="currentColor"
    />
  </svg>
);

const BrandLogo = ({ variant = "nav" }) => {
  const isFooter = variant === "footer";

  return (
    <div
      className={`flex items-center ${
        isFooter ? "justify-center gap-4" : "gap-3"
      }`}
    >
      <div
        className={`${
          isFooter ? "w-16 h-16" : "w-12 h-12"
        } rounded-2xl border border-[#d18cb3]/35 bg-[#fff0fa] shadow-md shadow-[#d18cb3]/15 overflow-hidden`}
      >
        <img
          src={butterflyMark}
          alt="Símbolo da Dra. Camila Fernandes"
          className="h-full w-full object-cover"
        />
      </div>
      <div className={isFooter ? "text-left" : ""}>
        <span
          className={`block font-bold text-[#8a5d7a] font-serif leading-tight ${
            isFooter ? "text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          Dra. Camila Fernandes
        </span>
        <span
          className={`block text-slate-400 uppercase tracking-widest font-bold ${
            isFooter ? "text-[10px] mt-1" : "text-[9px] sm:text-[10px]"
          }`}
        >
          Endocrinologia Pediátrica
        </span>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const specialties = [
    {
      title: "Crescimento",
      description:
        "Avaliação de baixa estatura e atrasos no desenvolvimento físico.",
      icon: <Baby className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Puberdade Precoce",
      description:
        "Acompanhamento de sinais hormonais antes do tempo esperado.",
      icon: <Heart className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Diabetes Tipo 1 e 2",
      description:
        "Controle glicêmico, educação em diabetes e acompanhamento familiar.",
      icon: <Stethoscope className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Obesidade Infantil",
      description: "Abordagem gentil focada em saúde e prevenção de traumas.",
      icon: <CheckCircle2 className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Distúrbios da Tireoide",
      description:
        "Investigação e tratamento de alterações hormonais da tireoide.",
      icon: <Activity className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Dislipidemia",
      description:
        "Acompanhamento de colesterol elevado e alterações dos triglicerídeos.",
      icon: <Droplets className="w-8 h-8 text-[#d18cb3]" />,
    },
    {
      title: "Síndrome Metabólica",
      description:
        "Cuidado com resistência insulínica e fatores de risco metabólico.",
      icon: <Gauge className="w-8 h-8 text-[#d18cb3]" />,
    },
  ];

  const whatsappUrl =
    "https://wa.me/5584991228197?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

  const faqs = [
    {
      question: "Quando devo procurar um endocrinologista pediátrico?",
      answer:
        "A avaliação pode ser indicada em diferentes situações relacionadas ao crescimento, puberdade, metabolismo ou alterações hormonais. Alguns exemplos são crescimento muito lento ou acelerado, sinais de puberdade antes do esperado, excesso de peso, alterações de colesterol, tireoide, glicemia, sede ou apetite. Em caso de dúvida, a consulta ajuda a entender se há necessidade de investigação.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A primeira consulta é uma conversa detalhada sobre o histórico da criança, seguida de exame físico completo e análise da curva de crescimento para definir a necessidade de exames.",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans text-slate-800">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#fdbded]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <BrandLogo />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-[#d18cb3] transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="hover:text-[#d18cb3] transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("especialidades")}
                className="hover:text-[#d18cb3] transition-colors font-medium"
              >
                Especialidades
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="hover:text-[#d18cb3] transition-colors font-medium"
              >
                Localização
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#fdbded] text-[#8a5d7a] px-6 py-2.5 rounded-full hover:brightness-95 transition-all shadow-md font-bold"
              >
                Agendar Consulta
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#d18cb3]"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#fdbded]/30 p-4 space-y-4 shadow-xl">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("especialidades")}
              className="block w-full text-left py-2"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="block w-full text-left py-2"
            >
              Localização
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-[#fdbded] text-[#8a5d7a] py-3 rounded-lg font-bold"
            >
              Agendar Agora
            </a>
          </div>
        )}
      </nav>
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-[#d18cb3]/25 bg-[#fff0fa] shadow-lg shadow-[#d18cb3]/10 sm:h-32 sm:w-32">
                <img
                  src={butterflyMark}
                  alt="Símbolo da Dra. Camila Fernandes"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden border-l border-[#fdbded]/60 pl-4 sm:block">
                <p className="font-serif text-2xl font-bold leading-tight text-[#8a5d7a]">
                  Dra. Camila Fernandes
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Endocrinologia Pediátrica
                </p>
              </div>
            </div>
            <div className="inline-block px-4 py-1 bg-[#fdbded]/20 text-[#8a5d7a] rounded-full text-sm font-semibold tracking-wide uppercase border border-[#fdbded]/40">
              Atendimento em Natal/RN
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Cuidando com amor de cada fase do{" "}
              <span className="text-[#d18cb3]">crescimento.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Dedicada a acompanhar o desenvolvimento hormonal de crianças e
              adolescentes com empatia, ciência e acolhimento em Natal/RN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#fdbded] text-[#8a5d7a] px-8 py-4 rounded-full text-lg font-bold hover:brightness-95 transition-all shadow-lg"
              >
                <Calendar size={20} />
                Agendar Consulta
              </a>
              <button
                onClick={() => scrollToSection("especialidades")}
                className="flex items-center justify-center gap-2 border-2 border-[#fdbded] text-[#8a5d7a] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fdbded]/10 transition-all"
              >
                Especialidades
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-sm font-medium italic">
              <span>CRM/RN 10285 | RQE 6799</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#fdbded]/10 rounded-full blur-3xl -z-10"></div>
            <div className="aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-3xl border border-[#fdbded]/30 bg-[#fdbded]/10 shadow-2xl shadow-[#d18cb3]/10">
              <img
                src={draCamilaPhoto}
                alt="Dra. Camila Fernandes"
                className="h-full w-full object-cover object-[center_42%]"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Prazer, sou a Dra. Camila
            </h2>
            <div className="w-16 h-1.5 bg-[#fdbded] rounded-full"></div>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-[#fdbded]/20 pl-4">
              "Acredito que cada criança é única e merece um olhar atento que vá
              além do diagnóstico. Minha missão é garantir que o crescimento
              seja uma fase de alegria e saúde."
            </p>
            <p className="text-slate-600 leading-relaxed">
              Como endocrinologista pediátrica, trato distúrbios hormonais que
              podem afetar o crescimento, o desenvolvimento puberal e o
              metabolismo. Meu foco é sempre a prevenção e o tratamento baseado
              em evidências, mas com a leveza que a pediatria exige.
            </p>
          </div>
          <div className="rounded-3xl border border-[#fdbded]/30 bg-[#fdf8f9] p-8 shadow-sm">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#d18cb3] shadow-sm">
              <Stethoscope size={28} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Cuidado especializado
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Consultas voltadas para crianças e adolescentes, com escuta
              cuidadosa, orientação para a família e acompanhamento das fases do
              crescimento, puberdade e saúde metabólica.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-5 border border-[#fdbded]/20">
              <p className="text-sm font-bold uppercase tracking-widest text-[#8a5d7a]">
                Local de atendimento
              </p>
              <p className="mt-2 text-slate-500">
                Clínica Enfance, no Tirol, em Natal/RN.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="especialidades" className="py-24 bg-[#fdf8f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">
              Áreas de Atuação
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Especialidades focadas no desenvolvimento saudável do seu filho.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-[#fdbded]/20 group text-center"
              >
                <div className="w-16 h-16 bg-[#fdbded]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-y border-[#fdbded]/20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Dúvidas Comuns
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#fdbded]/20 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[#fdbded]/5 transition-colors"
                >
                  <span className="font-bold text-lg text-[#8a5d7a]">
                    {faq.question}
                  </span>
                  {activeAccordion === idx ? (
                    <ChevronUp className="text-[#d18cb3]" />
                  ) : (
                    <ChevronDown className="text-slate-300" />
                  )}
                </button>
                {activeAccordion === idx && (
                  <div className="p-6 pt-0 text-slate-600 bg-[#fdf8f9] animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="localizacao"
        className="py-20 px-4 bg-slate-900 text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdbded]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Atendimento na <span className="text-[#fdbded]">Clínica Enfance</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <MapPin className="text-[#fdbded]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Clínica Enfance</h4>
                  <p className="text-slate-400">
                    R. Dr. Everton Dantas Cortês, 1475 - Tirol, Natal - RN,
                    59020-620
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Clock className="text-[#fdbded]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Atendimento</h4>
                  <p className="text-slate-400">
                    Segunda a sexta, em horário comercial da clínica
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <MessageCircle className="text-[#fdbded]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contatos</h4>
                  <p className="text-slate-400">
                    Agendamento pelo WhatsApp da Clínica Enfance
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com/camilaendocrinoped"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full hover:bg-white/10 transition-all border border-white/10"
              >
                <InstagramIcon size={20} className="text-[#fdbded]" />
                @camilaendocrinoped
              </a>
            </div>
          </div>

          <div className="w-full h-[450px] overflow-hidden rounded-3xl border-4 border-slate-700 bg-slate-800 shadow-2xl">
            <iframe
              title="Mapa da Clínica Enfance"
              src="https://www.google.com/maps?q=Cl%C3%ADnica%20Enfance%20R.%20Dr.%20Everton%20Dantas%20Cort%C3%AAs%201475%20Tirol%20Natal%20RN%2059020-620&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <footer className="bg-white py-12 border-t border-[#fdbded]/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 inline-flex">
            <BrandLogo variant="footer" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm mb-8">
            <p>CRM/RN 10285 | RQE 6799</p>
            <p>© 2026 - Natal/RN</p>
          </div>
        </div>
      </footer>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2 group"
        aria-label="Agendar via WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-2">
          Agendar via WhatsApp
        </span>
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
};

export default App;
