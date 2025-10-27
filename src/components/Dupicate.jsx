// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUsers,
  FaStar,
  FaShieldAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/**
 * Muscat Star - Extended Single Page with Animations
 * Component: App.jsx
 *
 * - Navbar (neon, hide on scroll down, show on scroll up)
 * - Hero with 3-image carousel (center focused, side blur)
 * - About (extended)
 * - How it works (big icons, animated card borders, blurred card background)
 * - Services (detailed, decorative)
 * - Partners marquee-like section (replaces partners carousel)
 * - Features counters (animated numbers)
 * - Safe Delivery section (bg image, overlay)
 * - FAQ custom accordion (6 q)
 * - Contact (map + details)
 * - Footer with neon animated logo background and menu links that scroll
 *
 * Tailwind classes used heavily.
 * Replace placeholder images and links as needed.
 */

const HERO_IMAGES = [
  // placeholder stock images (replace later)
  "https://images.unsplash.com/photo-1549237511-9f7d9f6c4d67?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
];

const PARTNER_LOGOS = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop",
];

// Helper: smooth scroll to id
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 84; // nav height offset
  window.scrollTo({ top: y, behavior: "smooth" });
};

// Animated counter hook
function useCountUp(target, duration = 1200, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let observer;
    let started = false;
    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = Number(target);
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const val = Math.floor(from + (to - from) * t);
        setCount(val);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (startOnView && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
              started = true;
              animate();
            }
          });
        },
        { threshold: 0.4 }
      );
      if (ref.current) observer.observe(ref.current);
    } else {
      animate();
    }
    return () => observer && observer.disconnect();
  }, [target, duration, startOnView]);
  return { ref, count };
}

export default function Duplicate() {
  // navbar state
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScroll = useRef(0);

  // hero title rotation
  const titles = ["Muscat Star", "A Delivery Service Company", "Connecting Oman"];
  const [titleIndex, setTitleIndex] = useState(0);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // counters
  const deliveries = useCountUp(12548, 1500);
  const riders = useCountUp(842, 1500);
  const cities = useCountUp(32, 1500);

  // hide/show nav on scroll
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        // scrolling down
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll);
    const t = setInterval(() => setTitleIndex((i) => (i + 1) % titles.length), 3000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  const faqList = [
    { q: "How do I book a parcel?", a: "You can book via our website form or call/WhatsApp our support. Fill pickup & drop and select a service." },
    { q: "What are your service areas?", a: "We operate across major Oman cities and selected rural areas. Use our coverage map or contact support for confirmation." },
    { q: "How can I become a rider?", a: "Apply through the 'Become a Rider' form in our dashboard. We verify NID and bike documents." },
    { q: "What is the delivery insurance policy?", a: "High-value items can be insured at extra cost; check the terms at checkout or contact sales." },
    { q: "Can I track my parcel?", a: "Yes — each parcel has a tracking ID. Enter it in the Track section for real-time updates." },
    { q: "What payment options do you accept?", a: "Online card payments, bank transfer, and cash-on-delivery (COD) in supported areas." },
    { q: "How do I cancel a parcel?", a: "Contact support immediately; cancellations depend on pickup status and applied charges." },
  ];

  // animation controls for "How it works" cards
  const cardControls = useAnimation();

  useEffect(() => {
    cardControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [cardControls]);

  // small style injections for swiper active/blur
  const customStyle = `
    /* center slide focused, sides blurred */
    .swiper-container, .swiper { width: 100%; }
    .swiper-slide { transition: transform 300ms ease, filter 300ms ease, opacity 300ms ease; }
    .swiper-slide img { display:block; width:100%; height:100%; object-fit:cover; border-radius:12px; }
    .swiper-slide { filter: blur(6px) saturate(0.8) contrast(0.95); transform: scale(0.92); opacity: 0.75; }
    .swiper-slide-active { filter: none !important; transform: scale(1.02) !important; opacity: 1 !important; z-index:2; }
    .swiper-slide-next, .swiper-slide-prev { filter: blur(2.5px) !important; transform: scale(0.98); opacity: 0.9; }
    /* marquee */
    @keyframes marqueeX {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track { animation: marqueeX 18s linear infinite; display: flex; gap: 28px; }
    /* neon logo behind */
    .neon-bg { filter: drop-shadow(0 0 12px rgba(106,13,173,0.45)); }
  `;

  return (
    <div className="font-sans text-slate-900 antialiased">
      <style>{customStyle}</style>

      {/* NAVBAR */}
      <header
        className={`fixed left-0 right-0 z-50 transition-transform duration-350 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-blur bg-white/40 border-b border-white/30">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* animated neon logo */}
              <div
                onClick={() => scrollToId("hero")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#A1045A] flex items-center justify-center text-yellow-300 font-extrabold neon-bg shadow-lg">
                  MS
                </div>
                <div className="hidden md:block">
                  <div className="text-lg font-bold text-[#03373D]">Muscat Star</div>
                  <div className="text-xs text-gray-500">Delivery Services</div>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "How It Works", id: "how" },
                { label: "Services", id: "services" },
                { label: "Features", id: "features" },
                { label: "Safe Delivery", id: "safe" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollToId(m.id)}
                  className="text-sm font-medium text-slate-700 hover:text-[#6A0DAD] transition"
                >
                  {m.label}
                </button>
              ))}

              <button
                onClick={() => scrollToId("contact")}
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFD60A] to-[#FFB84D] text-slate-900 shadow-lg hover:scale-[1.02] transition"
              >
                <FaPaperPlane /> Contact
              </button>
            </nav>

            {/* mobile icon */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen((s) => !s)} className="p-2 rounded-md bg-white/60 shadow">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 border-t border-gray-100">
              <div className="px-5 py-4 flex flex-col gap-2">
                {[
                  { label: "Home", id: "hero" },
                  { label: "About", id: "about" },
                  { label: "How It Works", id: "how" },
                  { label: "Services", id: "services" },
                  { label: "Features", id: "features" },
                  { label: "Safe Delivery", id: "safe" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contact", id: "contact" },
                ].map((m) => (
                  <button key={m.id} onClick={() => { setMenuOpen(false); scrollToId(m.id); }} className="text-left py-2 px-2 rounded hover:bg-gray-50">
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="pt-20 relative overflow-hidden">
        {/* background decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 -top-32 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#6A0DAD] to-[#A1045A] opacity-25 blur-3xl animate-[spin_35s_linear_infinite]" />
          <div className="absolute -right-28 top-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FFD60A] to-[#FFB84D] opacity-20 blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* LEFT - carousel */}
          <div className="w-full md:w-7/12">
            <div className="rounded-2xl shadow-2xl overflow-hidden relative">
              <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                spaceBetween={24}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1 }}
                className="h-[420px]"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {HERO_IMAGES.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="h-[380px] rounded-xl overflow-hidden">
                      <img src={src} alt={`hero-${i}`} className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* subtle overlay with neon border */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent" />
            </div>
          </div>

          {/* RIGHT - content */}
          <div className="w-full md:w-5/12 flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD60A] via-[#FFB84D] to-[#FF7A7A]">
                {titles[titleIndex]}
              </span>
            </motion.h1>

            <p className="text-gray-600">
              Muscat Star is the parent company of multiple specialized delivery brands in Oman. We provide secure, timely, and trackable parcel delivery solutions for individuals and businesses — designed for Oman’s unique roads and customer needs.
            </p>

            <div className="flex gap-3 mt-4">
              <button onClick={() => scrollToId("services")} className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#A1045A] text-white shadow-lg hover:scale-[1.02] transition">
                Explore Services
              </button>
              <button onClick={() => scrollToId("how")} className="px-5 py-3 rounded-xl border border-[#6A0DAD] text-[#6A0DAD] hover:bg-[#6A0DAD]/5 transition">
                How it Works
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow">
                <FaMapMarkerAlt className="text-[#6A0DAD] w-6 h-6" />
                <div>
                  <div className="text-sm font-semibold">Nationwide</div>
                  <div className="text-xs text-gray-500">All major cities</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow">
                <FaMotorcycle className="text-yellow-400 w-6 h-6" />
                <div>
                  <div className="text-sm font-semibold">Express options</div>
                  <div className="text-xs text-gray-500">Same-day & next-day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - extended */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-[#03373D] mb-4">
                About Muscat Star — Our Mission & Promise
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-700 mb-4">
                Muscat Star exists to unify trusted local delivery brands under one professional, tech-enabled mother company. Our mission is to deliver parcels with speed, safety, and respect for local communities. We commit to transparency, reliable customer support, and continuous improvement through data-driven operations.
              </motion.p>

              <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-3">
                <li className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#6A0DAD]/10 text-[#6A0DAD] font-bold">1</div>
                  <div>
                    <div className="font-semibold">Trusted partners</div>
                    <div className="text-sm text-gray-500">We onboard partners with strict verification & training to ensure consistent service quality.</div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FFD60A]/10 text-[#FFD60A] font-bold">2</div>
                  <div>
                    <div className="font-semibold">Technology-first</div>
                    <div className="text-sm text-gray-500">Real-time tracking, route optimization, and smart dispatch for timely deliveries.</div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#A1045A]/10 text-[#A1045A] font-bold">3</div>
                  <div>
                    <div className="font-semibold">Customer-centric</div>
                    <div className="text-sm text-gray-500">Transparent pricing, friendly support, and flexible delivery options.</div>
                  </div>
                </li>
              </motion.ul>
            </div>

            <div>
              <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg border">
                <img src="https://images.unsplash.com/photo-1542224566-9b2b34b7f7f1?q=80&w=1200&auto=format&fit=crop" alt="about" className="w-full h-96 object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (cards with animated borders & blur) */}
      <section id="how" className="py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-[#03373D] mb-6">How It Works</h3>
          <p className="text-gray-600 mb-8">Simple steps — transparent process. Each stage has operational checks & tracking to keep you informed.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <FaPaperPlane className="w-9 h-9" />, title: "Book Online", text: "Enter pickup, drop, weight, and choose a service tier. Use promo codes and choose insured option if needed." },
              { icon: <FaMotorcycle className="w-9 h-9" />, title: "Pickup", text: "A verified rider collects the parcel on schedule. Driver checks ID and item labels before departure." },
              { icon: <FaMapMarkerAlt className="w-9 h-9" />, title: "Track", text: "Live GPS tracking, ETA estimates, and driver live status keep you updated until delivery." },
              { icon: <FaUsers className="w-9 h-9" />, title: "Delivery & Confirm", text: "Recipient signature/photo proof. Insurance claims are processed quickly if required." },
            ].map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={cardControls}
                className="relative p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow hover:scale-[1.02] transition"
              >
                {/* animated border glow */}
                <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(106,13,173,0.12), rgba(255,214,10,0.06))", filter: "blur(8px)" }} />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white/80 shadow-inner">
                    {c.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-gray-600">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - extended, decorative */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-[#03373D] mb-4">Our Services — Tailored for Oman</h3>
              <p className="text-gray-600 mb-4">
                Muscat Star offers multiple service tiers — from economical standard deliveries to premium, time-critical express services. We also provide e-commerce integration, corporate logistics, and refrigerated solutions for specific needs.
              </p>

              <ul className="space-y-4">
                <li className="p-4 rounded-xl bg-white shadow flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#6A0DAD]/10 text-[#6A0DAD]">E</div>
                  <div>
                    <div className="font-semibold">Express (Same-day)</div>
                    <div className="text-sm text-gray-500">Priority pickup and fastest routing for urgent shipments within cities.</div>
                  </div>
                </li>
                <li className="p-4 rounded-xl bg-white shadow flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FFD60A]/10 text-[#FFD60A]">S</div>
                  <div>
                    <div className="font-semibold">Standard</div>
                    <div className="text-sm text-gray-500">Cost-effective and reliable delivery for everyday parcels.</div>
                  </div>
                </li>
                <li className="p-4 rounded-xl bg-white shadow flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#A1045A]/10 text-[#A1045A]">C</div>
                  <div>
                    <div className="font-semibold">Corporate Logistics</div>
                    <div className="text-sm text-gray-500">Scheduled pickups, bulk shipments, and dedicated account managers for businesses.</div>
                  </div>
                </li>
                <li className="p-4 rounded-xl bg-white shadow flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#00A86B]/10 text-[#00A86B]">E</div>
                  <div>
                    <div className="font-semibold">E-commerce Fulfillment</div>
                    <div className="text-sm text-gray-500">Integration with stores, automated order handling, and returns management.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1542224566-9b2b34b7f7f1?q=80&w=1200&auto=format&fit=crop" alt="services" className="w-full h-96 object-cover" />
              </div>

              {/* extra features */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white shadow flex items-center gap-3">
                  <FaShieldAlt className="w-7 h-7 text-[#6A0DAD]" />
                  <div>
                    <div className="font-semibold">Secure Handling</div>
                    <div className="text-xs text-gray-500">Verified pickup checks & secure transport.</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white shadow flex items-center gap-3">
                  <FaUsers className="w-7 h-7 text-[#A1045A]" />
                  <div>
                    <div className="font-semibold">Partner Network</div>
                    <div className="text-xs text-gray-500">Local riders and hubs for faster reach.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS marquee-like (replaced original partners section) */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h4 className="text-center text-[#03373D] font-extrabold mb-4">Brands & Partners</h4>
          <div className="overflow-hidden border-t border-b border-gray-100 py-4">
            <div className="marquee-track">
              {/* duplicate logos to create seamless loop */}
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
                <div key={i} className="w-48 flex-shrink-0 p-2">
                  <div className="rounded-xl overflow-hidden shadow">
                    <img src={src} alt={`partner-${i}`} className="w-full h-20 object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES counters */}
      <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div ref={deliveries.ref} className="p-6 bg-white rounded-2xl shadow">
              <div className="text-4xl font-extrabold text-[#6A0DAD]">{deliveries.count.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-2">Deliveries Completed</div>
            </div>
            <div ref={riders.ref} className="p-6 bg-white rounded-2xl shadow">
              <div className="text-4xl font-extrabold text-[#A1045A]">{riders.count.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-2">Active Riders</div>
            </div>
            <div ref={cities.ref} className="p-6 bg-white rounded-2xl shadow">
              <div className="text-4xl font-extrabold text-[#FFD60A]">{cities.count.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-2">Cities & Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFE DELIVERY section with background image */}
      <section id="safe" className="relative py-24">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop" alt="safe-bg" className="w-full h-full object-cover brightness-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03373D]/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-extrabold mb-4">Safe & Insured Delivery</h3>
              <p className="text-lg text-white/90 mb-4">
                We handle your parcels with care — secure packaging options, photo & signature proof on delivery, and optional insurance for high-value items.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD60A] flex items-center justify-center text-slate-900 font-bold">1</div>
                  <div>
                    <div className="font-semibold">Verified riders</div>
                    <div className="text-sm text-white/80">Background checks and document verification for every rider.</div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#6A0DAD] flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="font-semibold">Chain of custody</div>
                    <div className="text-sm text-white/80">Full audit trail with handover photos and timestamps.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur shadow-lg border border-white/10 w-full max-w-md">
                <h4 className="text-xl font-semibold text-white mb-3">Delivery Options</h4>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <div>Standard</div>
                    <div>2-4 days</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Express</div>
                    <div>Same day</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Corporate</div>
                    <div>Scheduled</div>
                  </div>
                </div>

                <div className="mt-4">
                  <button onClick={() => scrollToId("contact")} className="px-4 py-2 rounded-lg bg-[#FFD60A] text-slate-900 font-semibold">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ custom accordion */}
      <section id="faq" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h3 className="text-3xl font-extrabold text-[#03373D] mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {faqList.slice(0, 4).map((f, i) => (
                <div key={i} className="bg-white rounded-2xl shadow p-3">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left flex justify-between items-center gap-3">
                    <div>
                      <div className="font-semibold">{f.q}</div>
                      <div className="text-xs text-gray-400">Click to view answer</div>
                    </div>
                    <div className="text-xl">{openFaq === i ? "-" : "+"}</div>
                  </button>
                  <div className={`mt-3 text-sm text-gray-600 transition-all ${openFaq === i ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {faqList.slice(4).map((f, i) => (
                <div key={i} className="bg-white rounded-2xl shadow p-3">
                  <button onClick={() => setOpenFaq(openFaq === i + 4 ? null : i + 4)} className="w-full text-left flex justify-between items-center gap-3">
                    <div>
                      <div className="font-semibold">{f.q}</div>
                      <div className="text-xs text-gray-400">Click to view answer</div>
                    </div>
                    <div className="text-xl">{openFaq === i + 4 ? "-" : "+"}</div>
                  </button>
                  <div className={`mt-3 text-sm text-gray-600 transition-all ${openFaq === i + 4 ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT - map + info */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
          <div className="h-80 md:h-auto rounded-2xl overflow-hidden border shadow">
            {/* Google maps embed (replace with your own) */}
            <iframe
              title="Muscat Map"
              src="https://www.google.com/maps?q=Muscat,+Oman&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div>
              <h4 className="text-2xl font-extrabold text-[#03373D]">Contact & Offices</h4>
              <p className="text-gray-600 mt-2">Head office: Muscat, Oman — we operate nationwide.</p>
            </div>

            <div className="grid gap-3">
              <div className="p-4 rounded-lg bg-white shadow flex items-start gap-3">
                <FaPhoneAlt className="w-6 h-6 text-[#6A0DAD]" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-gray-500">+968 1234 5678</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white shadow flex items-start gap-3">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-gray-500">+968 9876 5432</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white shadow flex items-start gap-3">
                <FaEnvelope className="w-6 h-6 text-[#FFB84D]" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-500">hello@muscatstar.com</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white shadow">
                <div className="font-semibold">Short description</div>
                <div className="text-sm text-gray-500">Muscat Star is a parent delivery company operating trusted brands across Oman — focus on safety, speed, and customer satisfaction.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        {/* animated background element */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#A1045A] opacity-20 blur-3xl animate-pulse" />
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFD60A] to-[#FFB84D] opacity-12 blur-3xl animate-[spin_45s_linear_infinite]" />
        </div>

        <div className="bg-gradient-to-r from-[#6A0DAD] to-[#A1045A] text-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-slate-900 neon-bg">MS</div>
                  <div>
                    <div className="font-bold">Muscat Star</div>
                    <div className="text-sm text-white/80">Delivery Services — Oman</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/80">Support: +968 1234 5678 | hello@muscatstar.com</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">Menu</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {[
                      { l: "Home", id: "hero" },
                      { l: "About", id: "about" },
                      { l: "How It Works", id: "how" },
                      { l: "Services", id: "services" },
                      { l: "Contact", id: "contact" },
                    ].map((m) => (
                      <li key={m.id}>
                        <button onClick={() => scrollToId(m.id)} className="text-sm text-white/90 hover:text-white">{m.l}</button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-semibold">Office</div>
                  <div className="mt-2 text-sm text-white/90">Muscat, Oman</div>
                  <div className="mt-4 text-sm text-white/90">© {new Date().getFullYear()} Muscat Star</div>
                </div>
              </div>

              <div>
                <div className="font-semibold">Follow</div>
                <div className="flex gap-3 mt-3">
                  <a className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">IG</a>
                  <a className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">FB</a>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">Subscribe</div>
                  <div className="mt-2 flex gap-2">
                    <input placeholder="Email" className="px-3 py-2 rounded-l-lg text-black" />
                    <button className="px-4 py-2 rounded-r-lg bg-yellow-300 text-slate-900">Join</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg bg-[#03373D] text-white transform transition ${
          showTop ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <FiChevronUp />
      </button>
    </div>
  );
}
