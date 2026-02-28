import { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Menu, X, ArrowRight, 
  Shovel, BadgeCheck, Clock, Users, CheckCircle2,
  Wrench, Grid3x3, Fence, Paintbrush, Mountain, 
  Home, Bath, Hammer, Snowflake, Truck
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

import { Helmet } from "react-helmet-async";

import img1 from "../assets/8becddbcad9bddd568025d15e7ae030755a09b41.png";
import img2 from "../assets/dbb1985e9cd53890e14f295182789c33d0e08a2a.png";
import img3 from "../assets/bd425cfb1a96d8336209ddf75d9a5bcd60b8298e.png";
import img4 from "../assets/bd10981363b5cee46bf4586cdc66ed116ed9e46d.png";
import img5 from "../assets/1adb0cc827b294484efbb80054fe8e41ac2039c2.png";
import img6 from "../assets/db7dca02a433daef25b63c0c5b8dfe9bbcfc7fba.png";
import img7 from "../assets/truck1.jpg";
import img8 from "../assets/truck2.jpg";
import img9 from "../assets/truck3.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Contact information
  const PHONE = '607871811';
  const PHONE_FORMATTED = '+420 607 871 811';
  const EMAIL = 'andrejmochtin@seznam.cz';
  const COMPANY_NAME = 'Zemní a výkopové práce Klatovy';
  const COMPANY_DESCRIPTION = 'Profesionální výkopové, zemní a zednické práce na Klatovsku. Rodinná firma s vlastní technikou. Realizace zámkové dlažby, rekonstrukce, základy plotů.';
  
  // Web3Forms Access Key - nahraďte vlastním klíčem z https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = '18222a17-a57b-4215-9a8b-3f4412f05d22';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: `Nová poptávka z webu - ${formData.name}`,
          from_name: 'Zemní práce Klatovy - Web',
          to_email: EMAIL
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Děkujeme! Vaše poptávka byla úspěšně odeslána. Brzy se Vám ozveme.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitMessage('Omlouváme se, při odesílání došlo k chybě. Prosím zkuste to znovu nebo nás kontaktujte telefonicky.');
      }
    } catch (error) {
      setSubmitMessage('Omlouváme se, při odesílání došlo k chybě. Prosím zkuste to znovu nebo nás kontaktujte telefonicky.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Shovel className="w-8 h-8" />,
      title: "Výkopové práce pro zámkové dlažby",
      description: "Příprava terénu a výkopy pro pokládku zámkové dlažby"
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Realizace zámkové dlažby",
      description: "Odborná pokládka zámkové dlažby pro venkovní plochy"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Oprava / renovace zámkové dlažby",
      description: "Renovace a opravy stávající zámkové dlažby"
    },
    {
      icon: <Fence className="w-8 h-8" />,
      title: "Výkopové práce pro základy plotů",
      description: "Výkopy a příprava základů pro oplocení"
    },   // <-- přidej čárku zde
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Kontejnerová doprava",
      description: "Přistavení a odvoz kontejneru pro likvidaci stavebního odpadu, zeminy a dalšího materiálu. Rychlé vyřízení a spolehlivý odvoz."
    }
  ];

  const masonryServices = [
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Štuky",
      description: "Kvalitní povrchové úpravy a štukování stěn"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Perlinky",
      description: "Montáž a instalace perlinek"
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Obkladačské práce",
      description: "Pokládka obkladů a dlažby v interiérech"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Betonování a zateplení podlah",
      description: "Betonové podlahy včetně tepelné izolace"
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Rekonstrukce koupelen",
      description: "Kompletní rekonstrukce koupelny od A do Z"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Rekonstrukce bytů",
      description: "Celkové přestavby a rekonstrukce bytových prostor"
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Pokládka zámkové dlažby",
      description: "Instalace venkovní zámkové dlažby"
    }
  ];

  const benefits = [
    { icon: <BadgeCheck className="w-6 h-6" />, text: "Vlastní bagr a technika" },
    { icon: <Clock className="w-6 h-6" />, text: "Rychlá domluva" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "Férové ceny" },
    { icon: <Users className="w-6 h-6" />, text: "Individuální přístup" },
    { icon: <MapPin className="w-6 h-6" />, text: "Klatovy a okolí" }
  ];

  const projectImages = [
    {
      url: img1,
      alt: "Betonování a příprava podlahy - rekonstrukce sklepa"
    },
    {
      url: img2,
      alt: "Realizace zámkové dlažby před rodinným domem"
    },
    {
      url: img3,
      alt: "Pokládka zámkové dlažby - detail práce"
    },
    {
      url: img4,
      alt: "Terénní úpravy s bílým kamenivem a betonovou plochou"
    },
    {
      url: img5,
      alt: "Pokládka šedé zámkové dlažby - realizace chodníku"
    },
    {
      url: img6,
      alt: "Náš bagr JCB - vlastní technika pro výkopové práce"
    },
    {
      url: img7,
      alt: "Výkopové práce - příprava pro potrubí"
    },
    {
      url: img8,
      alt: "Nákladní auto - odvoz materiálu"
    },
    {
      url: img9,
      alt: "Přeprava štěrku a stavebního materiálu"
    }
  ];

  const steps = [
    { number: "1", title: "Kontaktujete nás", description: "Zavoláte nebo napíšete poptávku" },
    { number: "2", title: "Přijedeme na zaměření", description: "Domluvíme termín a prohlédneme si místo" },
    { number: "3", title: "Připravíme nabídku", description: "Vytvoříme cenovou nabídku na míru" },
    { number: "4", title: "Realizujeme zakázku", description: "Odvedeme práci rychle a kvalitně" }
  ];

  // Add SEO meta tags and structured data using useEffect
  useEffect(() => {
    // Set document language
    document.documentElement.lang = 'cs';
    
    // Set title
    document.title = 'Zemní a výkopové práce Klatovy | Bagr, zámková dlažba, rekonstrukce';
    
    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', 'Profesionální výkopové, zemní a zednické práce na Klatovsku. Rodinná firma s vlastní technikou. Realizace zámkové dlažby, rekonstrukce koupelen a bytů, základy plotů. ☎ 607 871 811');
    setMetaTag('keywords', 'výkopové práce Klatovy, zemní práce Klatovsko, bagr Klatovy, zámková dlažba, rekonstrukce bytů, rekonstrukce koupelen, základy plotů, terénní úpravy, zednické práce');
    setMetaTag('author', 'Zemní a výkopové práce Klatovy');
    
    // Geo tags
    setMetaTag('geo.region', 'CZ-32');
    setMetaTag('geo.placename', 'Klatovy');
    setMetaTag('geo.position', '49.3958;13.2952');
    setMetaTag('ICBM', '49.3958, 13.2952');
    
    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', 'Zemní a výkopové práce Klatovy | Bagr, zámková dlažba', true);
    setMetaTag('og:description', 'Profesionální výkopové, zemní a zednické práce na Klatovsku. Rodinná firma s vlastní technikou. Kontaktujte nás: 607 871 811', true);
    setMetaTag('og:locale', 'cs_CZ', true);
    setMetaTag('og:site_name', 'Zemní a výkopové práce Klatovy', true);
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Zemní a výkopové práce Klatovy');
    setMetaTag('twitter:description', 'Profesionální výkopové a zednické práce na Klatovsku');

    // Add structured data JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Zemní a výkopové práce Klatovy",
      "description": COMPANY_DESCRIPTION,
      "image": projectImages[0].url,
      "telephone": `+420${PHONE}`,
      "email": EMAIL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Klatovy",
        "addressRegion": "Plzeňský kraj",
        "addressCountry": "CZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.3958",
        "longitude": "13.2952"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "49.3958",
          "longitude": "13.2952"
        },
        "geoRadius": "30000"
      },
      "priceRange": "$$",
      "openingHours": [
        "Mo-Fr 07:00-17:00",
        "Sa 08:00-12:00"
      ]
    });
    script.id = 'structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
  <div className="min-h-screen bg-white">

    <Helmet>
      <title>Zemní práce Klatovy | Výkopy a bagrování</title>
      <meta
        name="description"
        content="Provádíme zemní práce v Klatovech a okolí."
      />
    </Helmet>

        {/* Navigation - Header */}
        <header>
          <nav className="bg-zinc-900 text-white sticky top-0 z-50 shadow-lg" role="navigation" aria-label="Hlavní navigace">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center gap-2">
                  <Shovel className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  <span className="font-bold text-lg">Zemní práce Klatovy</span>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-6">
                  <a href="#sluzby" className="hover:text-amber-500 transition-colors">Služby</a>
                  <a href="#realizace" className="hover:text-amber-500 transition-colors">Realizace</a>
                  <a href="#o-nas" className="hover:text-amber-500 transition-colors">O nás</a>
                  <a href="#kontakt" className="hover:text-amber-500 transition-colors">Kontakt</a>
                  <a 
                    href={`tel:+420${PHONE}`}
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-lg transition-colors"
                    aria-label="Zavolat na telefon"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>{PHONE_FORMATTED}</span>
                  </a>
                </div>

                {/* Mobile menu button */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2"
                  aria-label={mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile menu */}
              {mobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-zinc-800">
                  <div className="flex flex-col gap-4">
                    <a href="#sluzby" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Služby</a>
                    <a href="#realizace" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Realizace</a>
                    <a href="#o-nas" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>O nás</a>
                    <a href="#kontakt" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
                    <a 
                      href={`tel:+420${PHONE}`}
                      className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-lg transition-colors"
                      aria-label="Zavolat na telefon"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>{PHONE_FORMATTED}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="relative h-[600px] md:h-[700px] flex items-center" aria-label="Úvodní sekce">
            <div className="absolute inset-0 z-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652922660696-60c68ec51582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrJTIwc2l0ZXxlbnwxfHx8fDE3NzE3OTA0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bagr při výkopových pracích na stavbě v Klatovech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl mb-6">
                  Zemní a výkopové práce na Klatovsku <span className="text-amber-500">rychle a spolehlivě</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-zinc-200">
                  Zajišťujeme výkopové i zednické práce pro domy a zahrady na Klatovsku.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button 
                    onClick={scrollToContact}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
                    aria-label="Poslat nezávaznou poptávku"
                  >
                    Nezávazná poptávka
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <a 
                    href={`tel:+420${PHONE}`}
                    className="bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
                    aria-label="Zavolat nyní"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Zavolat nyní
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <Users className="w-6 h-6 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Rodinná firma</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <BadgeCheck className="w-6 h-6 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Vlastní technika</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span>Rychlé termíny</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="sluzby" className="py-20 bg-zinc-50" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-3xl md:text-5xl mb-4">Nabízené služby</h2>
                <p className="text-xl text-zinc-600">Komplexní řešení pro vaše zemní a výkopové práce</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <article 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-zinc-200"
                  >
                    <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center text-white mb-6" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-zinc-600">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Masonry Services Section */}
          <section className="py-20 bg-white" aria-labelledby="masonry-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="masonry-heading" className="text-3xl md:text-5xl mb-4">Zednické práce</h2>
                <p className="text-xl text-zinc-600">
                  <Snowflake className="w-6 h-6 inline-block mr-2 text-blue-500" aria-hidden="true" />
                  Tyto práce realizujeme především v zimním období
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {masonryServices.map((service, index) => (
                  <article 
                    key={index}
                    className="bg-zinc-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-zinc-200"
                  >
                    <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center text-white mb-6" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-zinc-600">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-zinc-50" aria-labelledby="benefits-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="benefits-heading" className="text-3xl md:text-5xl mb-4">Proč si vybrat nás?</h2>
                <p className="text-xl text-zinc-600">Naše hodnoty a přístup k práci</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto" aria-hidden="true">
                      {benefit.icon}
                    </div>
                    <p className="font-medium text-zinc-800">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Gallery */}
          <section id="realizace" className="py-20 bg-zinc-900 text-white" aria-labelledby="projects-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="projects-heading" className="text-3xl md:text-5xl mb-4">Naše realizace</h2>
                <p className="text-xl text-zinc-400">Podívejte se na naši práci</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => (
                  <figure key={index} className="relative h-64 rounded-xl overflow-hidden group">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-zinc-50" aria-labelledby="process-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="process-heading" className="text-3xl md:text-5xl mb-4">Jak probíhá spolupráce</h2>
                <p className="text-xl text-zinc-600">Jednoduchý proces od první kontaktu po dokončení</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <article key={index} className="relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto" aria-hidden="true">
                        {step.number}
                      </div>
                      <h3 className="text-xl mb-2">{step.title}</h3>
                      <p className="text-zinc-600">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-amber-200" aria-hidden="true"></div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-amber-500 text-white" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="cta-heading" className="text-3xl md:text-5xl mb-6">Potřebujete zemní práce?<br />Ozvěte se ještě dnes.</h2>
              <p className="text-xl mb-8">Rádi si s vámi domluvíme termín zaměření a připravíme nezávaznou cenovou nabídku.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:+420${PHONE}`}
                  className="bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
                  aria-label="Zavolat na telefon"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {PHONE_FORMATTED}
                </a>
                <button 
                  onClick={scrollToContact}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
                  aria-label="Napsat poptávku"
                >
                  Napsat poptávku
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="o-nas" className="py-20 bg-white" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="about-heading" className="text-3xl md:text-5xl mb-6">O firmě</h2>
                  <p className="text-lg text-zinc-700 mb-6">
                    Jsme <strong>rodinná firma z Klatovska</strong> s dlouholetou tradicí v oboru zemních a výkopových prací. 
                    Naším cílem je poskytovat kvalitní služby s osobním přístupem ke každému zákazníkovi.
                  </p>
                  <p className="text-lg text-zinc-700 mb-6">
                    Disponujeme <strong>vlastní technikou</strong> – moderním bagrem a dalším potřebným vybavením. 
                    Díky tomu jsme flexibilní a můžeme nabídnout rychlé termíny realizace.
                  </p>
                  <p className="text-lg text-zinc-700 mb-6">
                    Stavíme na <strong>férovém jednání, transparentních cenách a kvalitě provedené práce</strong>. 
                    Každý projekt řešíme individuálně a vždy s ohledem na vaše požadavky.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-4xl text-amber-500 mb-2">15+</div>
                      <div className="text-zinc-600">let zkušeností</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-amber-500 mb-2">200+</div>
                      <div className="text-zinc-600">realizací</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-amber-500 mb-2">100%</div>
                      <div className="text-zinc-600">spokojenost</div>
                    </div>
                  </div>
                </div>
                <figure className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1757163565776-d0f3beac79bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzcxNzkwNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Naše stavební technika - bagr a stroje na staveništi"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="kontakt" className="py-20 bg-zinc-50" aria-labelledby="contact-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="contact-heading" className="text-3xl md:text-5xl mb-4">Kontaktujte nás</h2>
                <p className="text-xl text-zinc-600">Rádi vám pomůžeme s vaším projektem</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <article className="bg-white p-8 rounded-xl shadow-sm mb-6">
                    <h3 className="text-2xl mb-6">Kontaktní údaje</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <div className="font-medium mb-1">Telefon</div>
                          <a 
                            href={`tel:+420${PHONE}`}
                            className="text-zinc-600 hover:text-amber-500 transition-colors"
                            itemProp="telephone"
                          >
                            {PHONE_FORMATTED}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <div className="font-medium mb-1">E-mail</div>
                          <a 
                            href={`mailto:${EMAIL}`}
                            className="text-zinc-600 hover:text-amber-500 transition-colors"
                            itemProp="email"
                          >
                            {EMAIL}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <div className="font-medium mb-1">Oblast působnosti</div>
                          <p className="text-zinc-600" itemProp="areaServed">Klatovy a okolí (okruh 30 km)</p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-zinc-900 text-white p-8 rounded-xl">
                    <h3 className="text-xl mb-4">Otevírací doba</h3>
                    <div className="space-y-2 text-zinc-300">
                      <div className="flex justify-between">
                        <span>Pondělí – Pátek</span>
                        <time>7:00 – 17:00</time>
                      </div>
                      <div className="flex justify-between">
                        <span>Sobota</span>
                        <time>8:00 – 12:00</time>
                      </div>
                      <div className="flex justify-between">
                        <span>Neděle</span>
                        <span>Zavřeno</span>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Contact Form */}
                <article className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl mb-6">Nezávazná poptávka</h3>
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Kontaktní formulář">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">Jméno a příjmení *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Jan Novák"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-medium mb-2">Telefon *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="+420 123 456 789"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="jan.novak@email.cz"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-medium mb-2">Zpráva *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                        placeholder="Popište prosím vaše požadavky..."
                        aria-required="true"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Odeslat poptávku"
                    >
                      {isSubmitting ? 'Odesílám...' : 'Odeslat poptávku'}
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                    {submitMessage && (
                      <div className={`p-4 rounded-lg ${submitMessage.includes('úspěšně') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </article>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shovel className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  <span className="font-bold text-lg">Zemní práce Klatovy</span>
                </div>
                <p className="text-zinc-400">Rodinná firma s tradicí a osobním přístupem ke každému zákazníkovi.</p>
              </div>
              <nav aria-label="Patička - rychlé odkazy">
                <h4 className="font-medium mb-4">Rychlé odkazy</h4>
                <div className="space-y-2">
                  <a href="#sluzby" className="block text-zinc-400 hover:text-amber-500 transition-colors">Služby</a>
                  <a href="#realizace" className="block text-zinc-400 hover:text-amber-500 transition-colors">Realizace</a>
                  <a href="#o-nas" className="block text-zinc-400 hover:text-amber-500 transition-colors">O nás</a>
                  <a href="#kontakt" className="block text-zinc-400 hover:text-amber-500 transition-colors">Kontakt</a>
                </div>
              </nav>
              <div>
                <h4 className="font-medium mb-4">Kontakt</h4>
                <address className="space-y-2 text-zinc-400 not-italic">
                  <p><a href={`tel:+420${PHONE}`} className="hover:text-amber-500 transition-colors">{PHONE_FORMATTED}</a></p>
                  <p><a href={`mailto:${EMAIL}`} className="hover:text-amber-500 transition-colors">{EMAIL}</a></p>
                  <p>Klatovy a okolí</p>
                </address>
              </div>
            </div>
            <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
              <p>&copy; 2026 Zemní práce Klatovy. Všechna práva vyhrazena.</p>
            </div>
          </div>
        </footer>

        {/* Floating CTA Button */}
        <a
          href={`tel:+420${PHONE}`}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-40 flex items-center gap-3"
          aria-label="Zavolat na telefon"
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
          <span className="hidden sm:inline pr-2">Zavolat</span>
        </a>
      </div>
  );
}
