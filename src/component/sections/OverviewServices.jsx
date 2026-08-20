import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { services } from "@/data/overviewServices";


export default function OverviewServices() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          title="Our Services"
          description={
            "The software we build replaces work that needs complexity, whether that is copying numbers between two systems, chasing updates over email, or keeping alive a spreadsheet that half the company depends on."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="min-h-[190px] border border-[#dfe5eb] bg-white px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)]"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] object-contain"
                  />
                </div>

                <h3 className="text-[14px] font-semibold leading-[1.35] text-[#30343a] sm:text-[15px]">
                  {service.title}
                </h3>
              </div>

              <div className="mt-4">
                <p className="text-[15px] leading-[1.55] text-[#fffff] sm:text-[15x]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
