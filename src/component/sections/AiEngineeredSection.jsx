import SectionHeader from "../common/SectionHeader";
import CodeAnimation from "../CodeAnimation";
import Image from "next/image";
import { features, stats } from "@/data/aiEngineeredSection";

export default function AiEngineeredSection() {
  return (
    <section className="bg-[#f7fbfe] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader title="Software, Apps, and AI Agents" />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-10">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px] object-contain"
                  />
                </div>

                <p className="text-[14px] are mujeh chaiye  font-medium leading-[1.35] text-[#55585d] sm:text-[15px]">
                  {feature.title}
                  <br />
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          <CodeAnimation />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p
                className="count-number text-[34px] font-bold leading-none text-[#44484c] sm:text-[38px] lg:text-[40px]"
                style={{ "--target": stat.value }}
              >
                <span className="counter" />
                {stat.suffix}
              </p>

              <p className="mt-4 text-[14px] font-medium text-[#55585d] sm:text-[15px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
