"use client";

import  { useState, useEffect } from "react";

// 타입 정의
interface ScrollToTopButtonProps {
  threshold?: number;  // 버튼이 나타나는 스크롤 임계값
  smoothScroll?: boolean;  // 부드러운 스크롤 사용 여부
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  smoothScroll = true
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smoothScroll ? "smooth" : "auto"
    });
  };

  useEffect(() => {
    // SSR 환경에서 window 객체 접근 방지
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      
      // 초기 스크롤 위치 확인
      handleScroll();
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [threshold]);

  return (
    <>
      {isVisible && (
         <button 
          onClick={scrollToTop}
          aria-label="맨 위로 스크롤"
          className="fixed bottom-5 right-5 p-2.5 text-lg bg-red-500 text-black 
                   border-none rounded-full cursor-pointer transition-opacity duration-300 
                   opacity-80 hover:opacity-100 z-50" // 여기에 rounded-full 추가!
        >
              <img src="/icons8-air-jordan.svg" alt="맨 위로" className="w-6 h-6" />
          {/* ↑ */}
        </button>
        // <button 
        //   onClick={scrollToTop}
        //   aria-label="맨 위로 스크롤"
        //   className="fixed bottom-5 right-5 p-2.5 text-lg bg-red-500 text-black 
        //            border-none rounded cursor-pointer transition-opacity duration-300 
        //            opacity-80 hover:opacity-100 z-50"
        // >
        //       <img src="/icons8-air-jordan.svg" alt="맨 위로" className="w-6 h-6" />
        //   {/* ↑ */}
        // </button>
      )}
    </>
  );
};

export default ScrollToTopButton;



