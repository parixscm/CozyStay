"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";

function UserMenu() {
  const [IsOpen, setIsOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState<null | number>(null);

  const toggleAuth = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer break-keep rounded-full px-4 py-3 text-center text-sm transition hover:bg-neutral-100 md:block"
        >
          당신의 <span className="text-lime-500">트레블메이트</span>
        </div>
        <div
          onClick={toggleAuth}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-sm md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {IsOpen && (
        <div className="absolute right-0 top-14 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <MenuItem onClick={() => {}} label="로그인" />
            <MenuItem onClick={() => {}} label="가입하기" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
