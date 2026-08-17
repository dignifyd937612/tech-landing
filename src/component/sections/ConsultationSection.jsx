import { fields, steps } from "@/data/consultationSection";

export default function ConsultationSection() {
  return (
    <section
      className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
      id="consulting"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col lg:min-h-[510px] lg:flex-row">
        <div className="w-full bg-[#030914] px-8 py-10 sm:px-10 sm:py-11 lg:w-[42%] lg:px-12 lg:py-12">
          <h2 className="text-[26px] font-semibold leading-[1.2] text-white sm:text-[30px]">
            Three Steps and We Start Developing
          </h2>

          <p className="mt-4 text-[12px] leading-[1.5] text-white/80 sm:text-[13px]">
            Get Custom Solutions & Recommendations, Estimates.
          </p>

          <div className="mt-11">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-[14px] top-[30px] bottom-0 border-l border-dashed border-white/40" />
                )}

                <div className="relative z-10 flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#009EFF] text-[12px] font-medium text-white">
                  {step.number}
                </div>

                <p className="max-w-[290px] pt-[2px] text-[12px] leading-[1.55] text-white/90 sm:text-[13px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#f5f5f5] px-8 py-10 sm:px-10 sm:py-11 lg:w-[58%] lg:px-11 lg:py-12">
          <h2 className="text-[26px] font-semibold leading-[1.2] text-[#3b3b3b] sm:text-[30px]">
            Still Deciding? Book a Call
          </h2>

          <form className="mt-7">
            <div>
              {fields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="h-[59px] w-full border-0 border-b border-[#d4d8dc] bg-transparent px-1 text-[12px] text-[#333] outline-none placeholder:text-[#555] focus:border-[#009EFF] sm:text-[13px]"
                />
              ))}
            </div>

            <button
              type="submit"
              className="mt-9 rounded-md bg-[#07182a] px-7 py-3 text-[11px] font-medium text-white transition hover:bg-[#008dde] sm:text-[12px]"
            >
              Book a call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
