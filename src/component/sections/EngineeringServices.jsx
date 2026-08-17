"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { services } from "@/data/engineeringServices";
import Link from "next/link";

export default function EngineeringServices() {
  const [activeService, setActiveService] = useState("frontend");

  const selectedService = services.find(
    (service) => service.id === activeService,
  );

  return (
    <section className="bg-[#f5faff] pt-20">
      <SectionHeader
        title="What We Build"
        description="We build robust web applications which your team can use every day without any hassle. Our tech services are ready to launch in the practical world for business growth."
      />

      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col lg:flex-row lg:items-start">
        <div className="w-full self-start bg-[#030914] lg:h-fit lg:w-[355px] lg:shrink-0">
          {services.map((service) => {
            const isActive = activeService === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service.id)}
                className={`group relative flex h-[52px] w-full items-center border-b border-white/20 px-3 text-left transition-all duration-300 ${isActive ? "bg-[#071321]" : "bg-transparent hover:bg-[#071321]"}`}
              >
                {isActive && (
                  <span className="absolute top-1/2 right-[-16px] z-10 hidden -translate-y-1/2 border-y-[8px] border-l-[16px] border-y-transparent border-l-[#009EFF] lg:block" />
                )}

                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center">
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-[35px] w-[35px] object-contain"
                  />
                </div>

                <span
                  className={`ml-3 text-[12px] font-normal transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}
                >
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex min-h-[520px] flex-1 flex-col items-center px-6 py-12 text-center sm:px-10 lg:px-12 lg:py-10">
          <h2
            key={selectedService.id}
            className="text-[26px] leading-[1.2] font-semibold text-[#3d3d3d] sm:text-[30px]"
          >
            {selectedService.title}
          </h2>

          <p
            key={`${selectedService.id}-description`}
            className="mt-5 max-w-[760px] text-[13px] leading-[1.6] text-[#60646a] sm:text-[14px]"
          >
            {selectedService.description}
          </p>

          <div
            key={`${selectedService.id}-logos`}
            className="mt-9 grid w-full max-w-[850px] grid-cols-2 gap-y-6 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-y-8"
          >
            {selectedService.logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-[85px] items-center justify-center px-3 sm:h-[90px] sm:px-5 lg:h-[100px] lg:min-w-[20%] lg:flex-1 lg:border-r lg:border-dashed lg:border-[#d7dce2] lg:px-6 lg:last:border-r-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={70}
                  className="h-auto max-h-[48px] w-auto max-w-[125px] object-contain sm:max-h-[55px] sm:max-w-[135px] lg:max-h-[55px] lg:max-w-[140px]"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              document.getElementById("consulting")?.scrollIntoView({
                block: "start",
              });
            }}
            className="mt-10 shrink-0 cursor-pointer rounded-md border bg-[#07182a] px-7 py-2.5 text-[12px] font-medium text-white transition hover:border-[#009EFF] hover:bg-[#009EFF]"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
