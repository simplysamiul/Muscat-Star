import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import banner4 from '../assets/banner-8.png';
import banner1 from '../assets/banner-6.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-7.png';
import "swiper/css";
import "swiper/css/pagination";
import '../css/Hero.css';

export default function Hero() {
    const titles = [
        // "Muscat Star - A name of Trust",
        "A Delivery Service.",
        "Your Parcel Partner.",
        "Fast. Safe. Reliable.",
        "A name of trust.",
    ];

    const [index, setIndex] = useState(0);

    // auto text change
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const images = [
        banner1,
        banner2,
        banner3,
        banner4
    ];

    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="home" className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden bg-transparent text-white">
                {/* LEFT — Carousel */}
                <div data-aos="fade-right" data-aos-duration="1500" className="w-full lg:w-1/2 mt-28 lg:mt-0 flex justify-center items-center p-4">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        loop
                        slidesPerView={1}
                        className="w-full max-w-3xl rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt="parcel"
                                    className="w-full h-[400px] sm:h-[450px] md:h-[520px] object-cover rounded-xl transition-all duration-700 hover:scale-[1.02]"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* RIGHT — Text */}
                <div data-aos="fade-left" data-aos-duration="1500" className="w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 mt-10 md:mt-0 relative">
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#6A0DAD] to-[#A1045A] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.4)] min-w-[14ch] text-balance relative z-40 "
                        style={{
                            textAlign: "center",
                            letterSpacing: "1px",
                            textShadow: "0 0 15px rgba(255,255,255,0.15)",
                        }}
                    >
                        {titles[index]}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gray-600 text-lg mt-6 max-w-full leading-relaxed"
                    >
                        Welcome to{" "}
                        <span className="text-[#A1045A] font-bold text-xl">Muscat Star</span> —
                        Oman’s central hub for smart, reliable parcel delivery.
                        We connect businesses and people with speed, precision,
                        and modern logistics powered by innovation. We provide secure, timely, and trackable parcel delivery solutions for individuals and businesses — designed for Oman’s unique roads and customer needs.
                    </motion.p>
                    <div className="flex gap-3 mt-4">
                        <button className="px-5 py-3 font-semibold rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#A1045A] text-white shadow-lg hover:scale-[1.02] transition">
                            Explore Services
                        </button>
                        <button className="px-5 py-3 font-semibold rounded-xl border border-[#6A0DAD] text-[#6A0DAD] hover:bg-[#6A0DAD]/5 transition">
                            How it Works
                        </button>
                    </div>
                    {/* background decorative */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute center-32 -bottom-32 w-[720px] h-[620px] rounded-full bg-gradient-to-tr from-[#6A0DAD] via-[#FFD700] to-[#A1045A] opacity-20 blur-3xl animate-[spin_35s_linear_infinite]" />
                    </div>
                </div>
            </section>
        </div>
    );
}
