import React from "react";
import { FaBell } from "react-icons/fa";

interface SneakersHeaderProps {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export default function SneakersHeader({ keyword, setKeyword, onSearch }: SneakersHeaderProps) {
  return (
    <header className="flex flex-row items-center w-full px-8 py-3 bg-white border-b border-gray-200">
      {/* 로고 */}
      <div className="flex items-center flex-shrink-0">
        <span className="text-[2rem] font-extrabold text-green-800 tracking-tight select-none font-[Segoe UI]">Stock</span>
        <span className="text-[2rem] font-extrabold text-green-800 -ml-1 select-none font-[Segoe UI]">X</span>
      </div>

      {/* 검색창 */}
      <form onSubmit={onSearch} className="flex-1 flex justify-center mx-8">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search for brand, color, etc."
            className="w-full h-11 pl-11 pr-4 rounded-lg bg-[#fafafa] border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="17" y1="17" x2="21" y2="21" />
          </svg>
        </div>
      </form>

      {/* 네비게이션 + 버튼 */}
      <nav className="flex items-center gap-7 ml-4">
        <a href="#" className="text-sm text-gray-700 hover:underline">News</a>
        <a href="#" className="text-sm text-gray-700 hover:underline">About</a>
        <a href="#" className="text-sm text-gray-700 hover:underline">Help</a>
        <a href="#" className="text-sm text-gray-700 hover:underline">Sell</a>

        {/* 알림 아이콘 */}
        <button
          aria-label="Notifications"
          className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <FaBell className="text-gray-700" size={18} />
          {/* 알림 뱃지 */}
          <span className="absolute top-1.5 right-1.5 inline-flex h-2 w-2 rounded-full bg-green-700"></span>
        </button>

        {/* 로그인/회원가입 버튼 */}
        <a
          href="#"
          className="ml-2 px-5 py-1.5 rounded-full border border-gray-700 text-gray-800 bg-white hover:bg-gray-100 font-semibold text-sm transition"
        >
          Login
        </a>
        <a
          href="#"
          className="ml-2 px-5 py-1.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-900 transition"
        >
          Sign Up
        </a>
      </nav>
    </header>
  );
}

