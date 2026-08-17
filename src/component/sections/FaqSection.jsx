"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqSection";

export default function FaqSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  const toggleFaq = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[30px] font-semibold leading-[1.2] text-[#30343a] sm:text-[34px] lg:text-[36px]">
          Before You Book
        </h2>

        <div className="mx-auto mt-10 max-w-[1050px]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="border-b border-[#dfe4e9]">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="flex min-h-[62px] w-full items-center justify-between gap-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] font-bold leading-[1.4] text-[#3f4a56] sm:text-[16px]">
                    {faq.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#59636d]">
                    {isOpen ? (
                      <ChevronUp size={18} strokeWidth={1.5} />
                    ) : (
                      <ChevronDown size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[900px] pb-5 pr-10 text-[13px] leading-[1.7] text-[#707780] sm:text-[14px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
