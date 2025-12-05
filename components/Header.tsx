'use client';

import { useCallback, useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'portfolio', label: 'IR' },
  { id: 'download', label: 'DOWNLOAD' },
  { id: 'contact', label: 'CONTACT' },
];

const HEADER_HEIGHT = 72; // px, 고정 헤더 높이 보정용

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 메뉴 클릭 시 부드러운 스크롤
  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - HEADER_HEIGHT;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });

    setIsMobileOpen(false);
  }, []);

  // 스크롤 위치에 따라 active 메뉴 변경 + 헤더 그림자
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollY > 10);

      let current = activeSection;

      // 각 섹션 위치 계산
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY - HEADER_HEIGHT - 40; // 약간 위쪽 버퍼
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          current = section.id;
          break;
        }
      }

      // 거의 페이지 바닥까지 내려왔으면 무조건 마지막 섹션(contact)으로 처리
      const isBottom =
        scrollY + viewportHeight >= docHeight - 10; // 10px 여유
      if (isBottom) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    handleScroll(); // 처음 로드 시 한 번
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 border-b bg-white/80 backdrop-blur transition-shadow ${
        isScrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 로고 영역 */}
        <button
          type="button"
          className="flex items-center gap-3"
          onClick={() => handleNavClick('page-top')}
        >
          <img
            src="/img/logo_red.png"
            alt="뷰커넥스 로고"
            className="hidden h-8 w-auto md:block"
          />
          <img
            src="/img/logo.png"
            alt="뷰커넥스 심볼"
            className="block h-8 w-auto md:hidden"
          />
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 md:block">
            주식회사 뷰커넥스
          </span>
        </button>

        {/* 데스크탑 메뉴 */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`pb-1 transition ${
                  isActive
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'border-b-2 border-transparent hover:border-emerald-200 hover:text-emerald-500'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">메뉴 열기</span>
          {isMobileOpen ? (
            // X 아이콘
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            // 햄버거 아이콘
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm font-medium text-slate-700">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center justify-between py-2 ${
                    isActive ? 'text-emerald-600' : 'text-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
