"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();

  return (
    <Image
      width={150}
      height={100}
      src="/images/logo.webp"
      alt="logo"
      className="hidden cursor-pointer md:block"
    />
  );
}

export default Logo;
