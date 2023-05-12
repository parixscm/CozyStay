"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();

  return (
    <Image
      priority
      alt="logo"
      width={200}
      height={74}
      src="/images/logo.png"
      className="hidden h-auto cursor-pointer md:block"
    />
  );
}

export default Logo;
