import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/icon.png';

export default function Footer() {
    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <footer className="relative overflow-hidden text-white py-10 px-6 my-6 rounded-3xl">
                {/* Animated Gradient Background with Texture */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B2BAA] to-[#A1045A] animate-gradientMove bg-[length:400%_400%] opacity-95"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 z-10">
                    {/* Logo and tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <h1 className="text-3xl font-bold flex items-center justify-center gap-2"></h1> */}
                        <div className='flex items-center justify-center'>
                            <img className='w-40' src={logo} alt="" />
                        </div>
                        <p className="mt-3 text-sm md:text-base max-w-2xl">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-center gap-6 border-t border-white/20 pt-6 text-sm md:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="flex items-center text-start gap-2 hover:text-gray-200 transition-all">
                            <FaMapMarkerAlt className="text-2xl animate-pulse text-[#FFD60A]" />
                            <div >
                                <span className='text-start'>Block-233, Street <span className='text-[#FFD60A]'>||</span> way-3305, Building-331</span><br />
                                <span className='text-start'>Muscat Governorate <span className='text-[#FFD60A]'>||</span> Bousher <span className='text-[#FFD60A]'>||</span> South Al-Khuwair</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 hover:text-gray-200 transition-all">
                            <FaPhoneAlt className="text-2xl animate-pulse text-[#FFD60A]" />
                            <a href="tel:+1234567890" className="hover:underline">+968 9934 3490</a>
                            <span className='text-[#FFD60A]'>|||</span>
                            <a href="tel:+1234567890" className="hover:underline">+968 9673 7437</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-gray-200 transition-all">
                            <FaEnvelope className="text-2xl animate-pulse text-[#FFD60A]" />
                            <a href="mailto:support@profast.com" className="hover:underline">muscatstarms@gmail.com</a>
                        </div>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="flex gap-5 pt-4 border-t border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                    >
                        {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all transform hover:scale-110 shadow-md"
                            >
                                <Icon />
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <p className="text-xs text-white/80 font-bold mt-4">© 2025 <span className=''>MUSCAT-STAR</span>. All rights reserved.</p>
                </div>

                {/* Tailwind keyframes */}
                <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
            </footer>
        </div>
    );
}
