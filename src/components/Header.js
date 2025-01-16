import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 햄버거 메뉴 클릭 시 상태 변경
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-pink-100 text-gray-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* 왼쪽 로고 */}
        <div className="text-3xl mx-2 font-bold text-pink-600">
          <Link to="/">YunSeo</Link> {/* Home 클릭 시 루트 페이지로 이동 */}
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex justify-end space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Home만 루트 경로로 설정
              className="relative text-lg font-semibold px-4 py-2 rounded-md overflow-hidden group"
            >
              <span
                className="absolute inset-0 bg-pink-300 transform -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                style={{ willChange: "transform" }}
              ></span>
              <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-800 hover:text-pink-600 focus:outline-none"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-pink-100 text-center">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Home만 루트 경로로 설정
              onClick={() => setIsMenuOpen(false)} // 클릭 시 메뉴 닫기
              className="block py-4 text-xl font-semibold text-gray-800 hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
