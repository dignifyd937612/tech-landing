"use client";
export default function PlanningCallSection() {
  return (
    <section className="relative mt-15 overflow-hidden border-y border-[#dce5ec]">
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-center"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#eaf5fc]/85" />

      <div className="relative mx-auto flex min-h-[190px] max-w-[1200px] flex-col items-start justify-center gap-7 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-0 lg:py-8">
        <div className="w-full max-w-[700px]">
          <h2 className="max-w-[600px] text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#071421] sm:text-[32px] lg:text-[36px]">
            Not sure which of these you need?
          </h2>

          <p className="mt-4 max-w-[650px] font-serif text-[16px] leading-[1.5] text-black sm:text-[19px]">
            That is what the call is for. One conversation and you will know
            what to build, in what order, and what it costs.
          </p>
        </div>

        <a
          type="button"
          onClick={() => {
            document.getElementById("consulting")?.scrollIntoView({
              block: "start",
            });
          }}
          className="flex justify-center w-full rounded-md border cursor-pointer shrink-0 bg-[#07182a] px-6 py-4 text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(0,158,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008ddd] hover:shadow-[0_12px_30px_rgba(0,158,255,0.25)] sm:w-auto sm:px-11 sm:py-5 sm:text-[16px]"
        >
          Book my free planning call
        </a>
      </div>
    </section>
  );
}
