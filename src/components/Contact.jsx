import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="contact" className="py-16 ">
                <div className="w-full mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">
                    <div className="h-80 md:h-auto rounded-2xl overflow-hidden shadow">
                        {/* Google maps embed (replace with your own) */}
                        <iframe
                            title="Muscat Map"
                            src="https://www.google.com/maps?q=Oman&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col gap-4 justify-center">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-extrabold text-[#6A0DAD]">Contact & Offices</h4>
                            <p className="text-gray-600 mt-2">Head office: Muscat, Oman — we operate nationwide.</p>
                        </div>

                        <div className="grid gap-3">
                            <div className="px-4 py-2 rounded-lg bg-white shadow flex items-start gap-3">
                                <FaPhoneAlt className="w-6 h-6 text-[#6A0DAD]" />
                                <div>
                                    <div className="font-bold">Phone</div>
                                    <div className="text-sm text-gray-500">+968 9934 3490 <br /> +968 9934 3490</div>
                                </div>
                            </div>

                            <div className="px-4 py-2 rounded-lg bg-white shadow flex items-start gap-3">
                                <FaWhatsapp className="w-6 h-6 text-[#6A0DAD]" />
                                <div>
                                    <div className="font-bold">WhatsApp</div>
                                    <div className="text-sm text-gray-500">+968 9673 7437</div>
                                </div>
                            </div>

                            <div className="px-4 py-2 rounded-lg bg-white shadow flex items-start gap-3">
                                <FaEnvelope className="w-6 h-6 text-[#6A0DAD]" />
                                <div>
                                    <div className="font-bold">Email</div>
                                    <div className="text-sm text-gray-500">muscatstarms@gmail.com</div>
                                </div>
                            </div>

                            <div className="px-4 py-2 rounded-lg bg-white shadow flex items-start gap-3">
                                <FaLocationDot className="w-12 h-12 md:w-6 md:h-6 text-[#6A0DAD]" />
                                <div>
                                    <div className="font-bold">Location</div>
                                    <div className="text-sm text-gray-500">Block-233, Street || way-3305, Building-331
                                        Muscat Governorate || Bousher <br /> South Al-Khuwair || Muscat, Oman</div>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-white shadow">
                                <div className="font-bold">Short description</div>
                                <div className="text-sm text-gray-500"><span className='text-lg font-bold text-[#6A0DAD]'>Muscat Star</span> is a parent delivery company operating trusted brands across Oman — focus on safety, speed, and customer satisfaction.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;