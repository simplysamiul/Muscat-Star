import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = ({Autoplay, Pagination}) => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
                <h3 className="text-[#03373D] text-3xl font-extrabold mb-6">What Customers Say</h3>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="max-w-3xl mx-auto"
                >
                    {[
                        { name: "Aisha - Muscat", text: "Fast and reliable — tracked easily and arrived on time." },
                        { name: "Hassan - Salalah", text: "Great experience with customer support and delivery." },
                        { name: "Omar - Sohar", text: "Professional riders and secure packing. Highly recommended." },
                    ].map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="p-6 bg-white rounded-2xl shadow-md border">
                                <p className="text-gray-700 italic">“{t.text}”</p>
                                <div className="mt-4 text-left">
                                    <strong>{t.name}</strong>
                                    <div className="text-xs text-gray-400">Verified customer</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;