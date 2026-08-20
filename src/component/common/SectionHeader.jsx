export default function SectionHeader({ title, description }) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-fit text-center">
        <h2 className="text-[26px] font-semibold leading-[1.2] text-[#303030] sm:text-[32px] lg:text-[34px]">
          {title}
        </h2>

        <div className="mt-3 h-[4px] w-[225px] rounded-full bg-[#009EFF]" />
      </div>

      <p className="mx-auto mt-3 max-w-[900px] text-center text-[14px] leading-6 text-[#fffff] sm:text-[17px]">
        {description}
      </p>
    </div>
  );
}
