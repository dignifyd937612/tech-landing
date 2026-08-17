import Image from "next/image";

const offices = [
  {
    flag: "/flags/india.jpg",
    address:
      "Ground Floor, C64, C Block, Sector 2, Noida, Uttar Pradesh 201301",
    phone: "+91-120-450-6748",
  },
  {
    flag: "/flags/usa.jpg",
    address: "2501 Chatham St, Springfield, Illinois",
    phone: "+1-877-735-0397",
  },
  {
    flag: "/flags/uk.jpg",
    address: "4 Winsley Street London W1W 8HF",
    phone: "+44-7930-030-7879",
  },
  {
    flag: "/flags/uae.jpg",
    address: "Level 3, Convention Tower, World Trade Center",
    phone: "+971-501-599-265",
  },
  {
    flag: "/flags/canada.jpg",
    address: "246 Stewart Green St Calgary, T3H 3C8",
    phone: "+1-872-318-4565",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#02232d] text-white">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="min-h-[150px] border-b border-white/20 px-6 py-5 lg:border-r">
            <Image
              src="/dignifyd-logo.svg"
              alt="Dignifyd"
              width={105}
              height={35}
              className="h-auto w-[105px]"
            />

            <p className="mt-3 max-w-[280px] text-[10px] leading-[1.55] text-white/75">
              Discover a modern hiring experience built for growing businesses,
              helping you attract top talent, nurture strong teams, support
              employee growth, streamline recruitment, and drive sustainable
              long-term success.
            </p>
          </div>

          {offices.map((office, index) => (
            <div
              key={`${office.address}-${index}`}
              className={`min-h-[150px] border-b border-white/20 px-6 py-5 ${
                index === 0 || index === 2 ? "lg:border-r" : ""
              }`}
            >
              <Image
                src={office.flag}
                alt="Office location"
                width={64}
                height={38}
                className="h-[38px] w-[64px] object-cover"
              />

              <p className="mt-3 max-w-[280px] text-[9px] leading-[1.5] text-white/80 sm:text-[10px]">
                {office.address}
              </p>

              <p className="mt-1 text-[9px] leading-[1.4] text-white/75 sm:text-[10px]">
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20 px-5 py-5">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          <p className="text-[9px] leading-5 text-white/65 sm:text-[10px]">
            © 2026 dignifyd Technologies Private Limited. All Rights Reserved.
          </p>

          <span className="hidden text-white/40 sm:inline">|</span>

          <button className="text-[9px] text-white/65 transition hover:text-white sm:text-[10px]">
            Terms & Conditions
          </button>

          <span className="hidden text-white/40 sm:inline">|</span>

          <button className="text-[9px] text-white/65 transition hover:text-white sm:text-[10px]">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
