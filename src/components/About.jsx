import { motion} from "framer-motion";
import aboutImg from '../assets/about-us.png';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdElectricBolt } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
const About = () => {
    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="about" className="bg-gradient-to-b from-white to-gray-50 pb-15 pt-15 lg:pt-0">
                <div className="max-w-full mx-auto px-2 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <motion.h2 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-[#6A0DAD] mb-4">
                                About Muscat Star — Our Mission & Promise
                            </motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-700 mb-4">
                                Muscat Star exists to unify trusted local delivery brands under one professional, tech-enabled mother company. Our mission is to deliver parcels with speed, safety, and respect for local communities. We commit to transparency, reliable customer support, and continuous improvement through data-driven operations.
                            </motion.p>

                            <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-7">
                                <li className="flex gap-3 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#6A0DAD]/20 text-[#6A0DAD] font-bold"><VscWorkspaceTrusted size={22} /></div>
                                    <div>
                                        <div className="font-semibold">Trusted partners</div>
                                        <div className="text-sm text-gray-500">We onboard partners with strict verification & training to ensure consistent service quality.</div>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FFD60A]/25 text-[#ffd608] font-bold">
                                        <MdElectricBolt size={22} />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Technology-first</div>
                                        <div className="text-sm text-gray-500">Real-time tracking, route optimization, and smart dispatch for timely deliveries.</div>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#A1045A]/20 text-[#A1045A] font-bold">
                                        <FaUsers size={22} />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Customer-centric</div>
                                        <div className="text-sm text-gray-500">Transparent pricing, friendly support, and flexible delivery options.</div>
                                    </div>
                                </li>
                            </motion.ul>
                        </div>

                        <div data-aos="flip-down" data-aos-duration="1500">
                            <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg border-l-9 border-b-16 border-[#6A0DAD]">
                                <img src={aboutImg} alt="about" className="w-full h-96 object-cover rounded" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;