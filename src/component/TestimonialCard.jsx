import Image from "next/image";
import { Quote, Star } from "lucide-react";

export default function TestimonialCard({
  review,
  name,
  designation,
  company,
  logo,
}) {
  return (
    <article className="relative flex h-full min-h-[325px] w-full flex-col rounded-[8px] border border-[#e5eaf0] bg-white px-5 pb-5 pt-10 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="absolute -top-[18px] left-[20px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#079FF5] shadow-[0_5px_12px_rgba(7,159,245,0.25)]">
        <Quote size={17} strokeWidth={3} className="fill-white text-white" />
      </div>

      <div className="flex items-center gap-[3px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={15}
            strokeWidth={0}
            fill="currentColor"
            className="text-[#079FF5]"
          />
        ))}
      </div>

      <p className="mt-4 text-[12px] font-medium leading-[1.5] text-[#374151]">
        {review}
      </p>

      <div className="mt-auto pt-6">
        <div className="mb-4 h-px w-full bg-[#e8ecf0]" />

        <div className="flex min-h-[55px] items-center">
          <div className="min-w-0 flex-1">
            {/* <p className="text-[12px] font-medium leading-[1.3] text-[#374151]">
              {name}
            </p> */}

            <p className="mt-1 text-[9px] leading-[1.35] text-[#7c8798]">
              {designation}
            </p>
          </div>

          {/* <div className="mx-3 h-[50px] w-px bg-[#e1e5ea]" />

           <div className="flex w-[90px] shrink-0 items-center gap-2">
            {logo ? (
              <Image
                src={logo}
                alt={company}
                width={60}
                height={35}
                className="h-[45px] w-[70px] object-contain object-left"
              />
            ) : (
              <div className="h-[35px] w-[60px] rounded bg-[#f0f4f8]" />
            )} 

          <p className="text-[10px] font-medium text-[#2788e8]">{company}</p>
          </div> */}
        </div>
      </div>
    </article>
  );
}
