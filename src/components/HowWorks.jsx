import "../css/HowItWorks.css";
import { FaUsers, FaPaperPlane, FaMotorcycle, FaMapMarkerAlt } from "react-icons/fa";

function HowItWorks() {
    const cards = [
        {
            icon: <FaPaperPlane size={40} className="text-[#6A0DAD] text-4xl" />,
            title: "Book Online",
            text: "Enter pickup, drop, weight, and choose a service tier. Use promo codes and choose insured option if needed.",
            borderColor: "purple",
            bgGradient: "from-[#F4E8FF] to-[#EBD6FF]",
            titleColor: "#6A0DAD",
        },
        {
            icon: <FaMotorcycle size={50} className="text-[#FACC15] text-4xl" />,
            title: "Pickup",
            text: "Enter pickup, drop, weight, and choose a service tier. Use promo codes and choose insured option if needed.",
            borderColor: "yellow",
            bgGradient: "from-[#FFF9E6] to-[#FFF2C1]",
            titleColor: "#CA8A04",
        },
        {
            icon: <FaMapMarkerAlt size={40} className=" text-4xl text-[#A1045A]" />,
            title: "Track",
            text: "Live GPS tracking, ETA estimates, and driver live status keep you updated until delivery.",
            borderColor: "magenta",
            bgGradient: " from-[#FFE6F2] to-[#FFD6E9]",
            titleColor: "#A1045A",
        },
        {
            icon: <FaUsers size={40} className="text-[#0EA5E9] text-4xl" />,
            title: "Delivery & Confirm",
            text: "Recipient signature/photo proof. Insurance claims are processed quickly if required.",
            borderColor: "aqua",
            bgGradient: "from-[#E6F7FF] to-[#C7EEFF]",
            titleColor: "#0284C7",
        },
    ];

    return (
        <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
            <section id="howItWorks" className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r text-[#6A0DAD] bg-clip-text">
                        How It Works
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Simple steps — transparent process. Each stage has operational checks & tracking to keep you informed.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-4 lg:px-12">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`animated-card-wrapper border-${card.borderColor}`}
                        >
                            <div
                                className={`relative bg-gradient-to-br ${card.bgGradient} h-full rounded-[14px] ring-[0.5px] ring-gray-200 flex flex-col items-center justify-center p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1`}
                            >
                                <div className="mb-4">{card.icon}</div>
                                <h3
                                    className="text-lg font-semibold mb-2"
                                    style={{ color: card.titleColor }}
                                >
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HowItWorks;




