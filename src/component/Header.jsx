import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[82px] bg-[#020810]">
      <div className="mx-auto flex h-full max-w-[1650px] items-center px-6 sm:px-8 lg:px-0">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[720px_570px] lg:gap-[30px] lg:justify-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/dignifyd-logo.svg"
              alt="Dignifyd"
              width={145}
              height={48}
              priority
              className="h-auto w-[155px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
