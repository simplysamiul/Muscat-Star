import { FaBoxOpen, FaClipboardCheck, FaShieldAlt, FaShoppingCart, FaTruckMoving, FaUsers } from 'react-icons/fa';
import deliveryVanImg from '../assets/banner-2.png';
import { MdElectricBolt } from 'react-icons/md';

const OurServics = () => {
    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 " >
                <div className="w-full md:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">

                        <div>
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img src={deliveryVanImg} alt="services" className="w-full h-96 object-cover" />
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


                        <div>
                            <h3 className="text-3xl font-extrabold text-[#6A0DAD] mb-4">Our Services — Tailored for Oman</h3>
                            <p className="text-gray-600 mb-4">
                                Muscat Star offers multiple service tiers — from economical standard deliveries to premium, time-critical express services. We also provide e-commerce integration, corporate logistics, and refrigerated solutions for specific needs.
                            </p>

                            <ul className="space-y-4">
                                <li className="py-4 rounded-xl bg-white shadow flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#6A0DAD]/20 text-[#6A0DAD]"><MdElectricBolt /></div>
                                    <div>
                                        <div className="font-semibold">Express (Same-day)</div>
                                        <div className="text-sm text-gray-500">Priority pickup and fastest routing for urgent shipments within cities.</div>
                                    </div>
                                </li>
                                <li className="py-4 rounded-xl bg-white shadow flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FFD60A]/25 text-[#FFD60A]"><FaClipboardCheck /></div>
                                    <div>
                                        <div className="font-semibold">Standard</div>
                                        <div className="text-sm text-gray-500">Cost-effective and reliable delivery for everyday parcels.</div>
                                    </div>
                                </li>
                                <li className="py-4 rounded-xl bg-white shadow flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#A1045A]/20 text-[#A1045A]"><FaTruckMoving />    </div>
                                    <div>
                                        <div className="font-semibold">Corporate Logistics</div>
                                        <div className="text-sm text-gray-500">Scheduled pickups, bulk shipments, and dedicated account managers for businesses.</div>
                                    </div>
                                </li>
                                <li className="py-4 rounded-xl bg-white shadow flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#0EA5E9]/20 text-[#0EA5E9]"><FaBoxOpen /></div>
                                    <div>
                                        <div className="font-semibold">E-commerce Fulfillment</div>
                                        <div className="text-sm text-gray-500">Integration with stores, automated order handling, and returns management.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section >
        </div>
    );
};

export default OurServics;