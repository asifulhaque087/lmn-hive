import Image from "next/image";

export const Navigation = () => {
  return (
    <div className="px-[10%] flex items-center">
      {/* left */}
      <div className="mb-2">
        <h1 className="text-[40px] font-bold">
          Rea<span className="text-main-yellow">c</span>t
        </h1>
      </div>
      {/* middle */}
      <div className="hidden md:flex items-center mx-auto gap-10 text-sm font-medium cursor-pointer">
        <span>About us</span>
        <span>What we do </span>
        <span>Out work</span>
        <span>Blog</span>
        <span>Say hi</span>
      </div>
      {/* right */}
      <div className="mt-2 ml-auto md:ml-0">
        <Image
          className="rounded-[20px]"
          src="/hamburger.png"
          alt="me"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
