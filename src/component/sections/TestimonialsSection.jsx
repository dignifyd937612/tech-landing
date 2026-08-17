"use client";

import { useRef, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "@/data/Testimonials";

export default function TestimonialsSection() {
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.children;

    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    const index = Math.round(carousel.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const goToSlide = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.children[index];

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft - 20,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="bg-white px-5 pb-12 sm:px-8 sm:pb-16">
      <SectionHeader
        title="What Clients Are Saying About Us"
        description="We've served more than 50+ clients globally in the last 8+ years and retained 98% of them."
      />

      <div className="mx-auto mt-20 max-w-[1180px]">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory  [scrollbar-width:none] gap-5 overflow-x-auto scroll-smooth px-5 pt-5 pb-3 [-ms-overflow-style:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pt-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[calc(100vw-80px)] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <TestimonialCard
                review={testimonial.review}
                name={testimonial.name}
                designation={
                  <>
                    {testimonial.designation.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index !==
                          testimonial.designation.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </>
                }
                company={testimonial.company}
                logo={testimonial.logo}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:hidden">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-5 bg-[#079FF5]" : "w-2 bg-[#d6dce3]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
