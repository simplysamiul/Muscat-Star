import { MdVerified } from 'react-icons/md';
import safeDelivery from '../assets/safe-delivery.png'
import { AiOutlineAudit } from 'react-icons/ai';

const SafeDelivery = () => {
    return (
        <div id="features" className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="safe" className="relative py-24 mt-10 mb-26">
                <div className="absolute inset-0" data-aos="zoom-in" data-aos-duration="500">
                    <img src={safeDelivery} alt="safe-bg" className="w-full h-full object-cover brightness-60 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-[#6A0DAD]/20 to-[#A1045A]/30 rounded-2xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">Safe & Insured Delivery</h3>
                            <p className="text-[14px] md:text-[16px] text-white/80 mb-10">
                                We handle your parcels with care — secure packaging options, photo & signature proof on delivery, and optional insurance for high-value items.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-[#FFD60A] flex items-center justify-center text-[#6A0DAD] font-bold">
                                        <MdVerified size={20} /></div>
                                    <div>
                                        <div className="font-semibold">Verified riders</div>
                                        <div className="text-sm text-white/80">Background checks and document verification for every rider.</div>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-[#6A0DAD] flex items-center justify-center text-[#FFD60A] font-bold">
                                        <AiOutlineAudit size={20} /></div>
                                    <div>
                                        <div className="font-semibold">Chain of custody</div>
                                        <div className="text-sm text-white/80">Full audit trail with handover photos and timestamps.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-end">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur shadow-lg border border-white/10 w-full max-w-md">
                                <h4 className="text-xl font-semibold text-[#FFD60A] mb-3">Delivery Options</h4>
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
                                    <button className="px-4 py-2 rounded-lg bg-[#FFD60A] text-slate-900 font-semibold">Get Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SafeDelivery;