"use client";
import Image from "next/image";

function Avatar() {
  return (
    <Image
      width={30}
      height={30}
      src="/images/avatar.jpeg"
      alt="profile"
      className="rounded-full"
    />
  );
}

export default Avatar;
