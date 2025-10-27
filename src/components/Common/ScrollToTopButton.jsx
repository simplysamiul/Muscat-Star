import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../../css/ScrollTopButton.css';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 400px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`hidden lg:block fixed bottom-10 right-10 z-[9999] p-3 rounded transition-all duration-500
        bg-gradient-to-r from-[#6A0DAD] to-[#A1045A] text-white shadow-[0_0_20px_rgba(106,13,173,0.4)]
        backdrop-blur-md hover:scale-110 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl cursor-pointer" />
    </button>
  );
}
