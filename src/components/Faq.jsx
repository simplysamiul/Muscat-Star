import React, { useState } from "react";
import Lottie from "lottie-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import deliveryAnimation from "../assets/Question and Answer.json";

const faqsData = [
  {
    id: 1,
    question: "How do I book a parcel?",
    answer:
      "To book a parcel, visit our website or mobile app, fill in pickup and delivery details, then confirm payment.",
  },
  {
    id: 2,
    question: "Can I track my parcel?",
    answer:
      "Yes! You can track your parcel in real-time using the tracking number provided after booking.",
  },
  {
    id: 3,
    question: "What are your service areas?",
    answer:
      "We currently provide delivery services across all major cities in Oman and nearby regions.",
  },
  {
    id: 4,
    question: "What payment options do you accept?",
    answer:
      "We accept cash on delivery, credit/debit cards, bank transfer, and popular digital wallets.",
  },
  //   {
  //     id: 5,
  //     question: "How can I become a rider?",
  //     answer:
  //       "Simply register on our website, upload your documents, and our team will contact you for the next steps.",
  //   },
  //   {
  //     id: 6,
  //     question: "How do I cancel a parcel?",
  //     answer:
  //       "You can cancel a parcel before dispatch by going to ‘My Orders’ and selecting the cancel option.",
  //   },
  {
    id: 7,
    question: "What is the delivery insurance policy?",
    answer:
      "All parcels are covered with basic insurance. For high-value items, you can purchase additional coverage.",
  },
  {
    id: 8,
    question: "What happens if my parcel is delayed?",
    answer:
      "We notify you immediately and work to deliver it as soon as possible. Compensation may apply based on the delay reason.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-11/12 xl:w-10/12 mx-auto">
      <section id="faq" className="py-8 px-4 md:px-20 bg-gradient-to-b from-white to-gray-50 mb-8">
        {/* Title + Animation */}
        <div className="flex flex-col items-center text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">
            Frequently Asked Questions
          </h2>
          <div data-aos="zoom-in-down" data-aos-duration="1000" className="w-50 md:w-96" >
            <Lottie animationData={deliveryAnimation} loop={true} />
          </div>
        </div>

        {/* FAQ Items */}
        <div data-aos="fade-up" data-aos-duration="1000" className="max-w-6xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-bold text-[#6A0DAD]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-[#A1045A]" />
                ) : (
                  <FaPlus className="text-[#A1045A]" />
                )}
              </button>

              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
