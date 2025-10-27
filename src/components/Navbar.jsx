import React, { useState, useEffect } from "react";
import { FaBars, FaPaperPlane, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll"; // 👈 import this
import logo from "../assets/Logo.png";
// import "../css/Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setScrolled(currentScroll > 30);

            if (currentScroll > lastScrollY && currentScroll > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const menuItems = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "How It Works", to: "howItWorks" },
        { name: "Services", to: "services" },
        { name: "Features", to: "features" },
        { name: "FAQ", to: "faq" },
    ];

    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <header
                className={`navbar-wrapper fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        ${scrolled
                        ? "backdrop-blur-lg bg-white/30 shadow-lg"
                        : "bg-white/10 backdrop-blur-sm shadow-md shadow-[#FFB84D]/20"
                    }`}
            >
                <nav className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between px-4 py-3 relative">
                    {/* --- LOGO --- */}
                    <div className="text-2xl font-extrabold text-[#03373D] tracking-wide cursor-pointer">
                        <img className="w-15 md:w-20 " src={logo} alt="Logo" />
                    </div>

                    {/* --- MENU (Desktop) --- */}
                    <ul className="hidden md:flex items-center gap-8 text-[#6A0DAD] font-bold">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="hover:text-[#A1045A] cursor-pointer transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#6A0DAD] hover:after:w-full after:transition-all after:duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* --- CONTACT BUTTON --- */}
                    <div className="hidden lg:block">
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>
                            <button className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#FFD60A] to-[#FFB84D] text-[#6A0DAD] shadow-lg hover:scale-[1.05] transition-transform duration-300">
                                <FaPaperPlane /> Contact
                            </button>
                        </Link>
                    </div>

                    {/* --- MOBILE ICON --- */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-[#6A0DAD] text-2xl"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {/* --- MOBILE MENU --- */}
                <div
                    className={`md:hidden absolute top-[64px] left-0 w-full transition-all duration-500 ease-in-out transform
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
                >
                    <ul className="flex flex-col items-center gap-5 py-6 bg-white/60 backdrop-blur-xl shadow-lg text-[#6A0DAD] font-semibold">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-[#A1045A] cursor-pointer transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <button className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#FFD60A] to-[#FFB84D] text-[#6A0DAD] shadow-md hover:scale-[1.05] transition">
                            <FaPaperPlane /> Contact
                        </button>
                    </ul>
                </div>

                {/* Animated bottom border */}
                <div className="navbar-border"></div>
            </header>
        </div>
    );
}
