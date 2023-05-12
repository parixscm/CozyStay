"use client";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex items-center justify-between break-keep">
        <div className="px-6 text-sm">어디로든</div>
        <div className="hidden flex-1 border-x-[1px] px-6 text-center text-sm sm:block">
          언제든
        </div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">게스트 추가</div>
          <div className="rounded-full bg-lime-500 p-2 text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
