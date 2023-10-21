"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />
    </div>
  );
}
