'use client';

import { useCallback, useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'portfolio', label: 'IR' },
  { id: 'download', label: 'DOWNLOAD' },
  { id: 'contact', label: 'CONTACT' },
];

const HEADER_HEIGHT = 72; // px

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isHeroTop, setIsHeroTop] = useState(true); // 히어로 위쪽에 있는지
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 부드러운 스크롤
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1) 히어로 영역 위/아래 상태 계산
      const hero = document.getElementById('page-top');
      if (hero) {
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;
        const heroBottom = heroTop + heroHeight;

        // 헤더가 히어로 안에 겹쳐 있는 동안만 isHeroTop = true
        const threshold = heroBottom - HEADER_HEIGHT - 40; // 살짝 여유
        setIsHeroTop(scrollY < threshold);
      } else {
        // 히어로 없으면 그냥 맨 위일 때만 투명 처리
        setIsHeroTop(scrollY < 40);
      }

      // 2) 현재 섹션(active) 계산
      let current = activeSection;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY - HEADER_HEIGHT - 40;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          current = section.id;
          break;
        }
      }

      // 거의 맨 아래까지 내려오면 contact 고정
      const isBottom = scrollY + viewportHeight >= docHeight - 10;
      if (isBottom) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // 색상/스타일 토글용
  const headerBase =
    'fixed top-0 left-0 right-0 z-30 border-b backdrop-blur transition-all duration-300';
  const headerStyle = isHeroTop
    ? 'border-transparent bg-transparent text-slate-50'
    : 'border-slate-200 bg-white/90 text-slate-900 shadow-sm';

  const navTextClass = isHeroTop ? 'text-slate-100' : 'text-slate-700';
  const logoTextClass = isHeroTop ? 'text-slate-100' : 'text-slate-900';

  return (
    <header className={`${headerBase} ${headerStyle}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">

        {/* 로고 */}
        <button
          type="button"
          className="flex items-center gap-3"
          onClick={() => handleNavClick('page-top')}
        >
          {/* 데스크톱 로고 */}
          <img
            src={isHeroTop ? '/img/logo_red.png' : '/img/logo.png'}
            alt="뷰커넥스 로고"
            className="hidden h-10 w-auto md:block"
          />

          {/* 모바일 로고 */}
          <img
            src={isHeroTop ? '/img/logo_red.png' : '/img/logo.png'}
            alt="뷰커넥스 심볼"
            className="block h-10 w-auto md:hidden"
          />
          {/* <span
            className={`hidden text-sm font-semibold tracking-tight md:block ${logoTextClass}`}
          >
            주식회사 뷰커넥스
          </span> */}
        </button>

        {/* 데스크탑 메뉴 */}
        <div
          className={`hidden items-center gap-8 text-sm font-medium md:flex ${navTextClass}`}
        >
          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`pb-1 transition ${
                  isActive
                    ? isHeroTop
                      ? 'border-b-2 border-white text-white'
                      : 'border-b-2 border-sky-500 text-sky-600'
                    : 'border-b-2 border-transparent hover:border-sky-200 hover:text-sky-500'
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
          className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm shadow-sm md:hidden ${
            isHeroTop
              ? 'border-white/40 bg-white/10 text-slate-50'
              : 'border-slate-200 bg-white text-slate-700'
          }`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">메뉴 열기</span>
          {isMobileOpen ? (
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
        <div
          className={`md:hidden ${
            isHeroTop ? 'bg-slate-900/80 text-slate-50' : 'bg-white text-slate-700'
          } border-t border-slate-200/60`}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 text-sm font-medium">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center justify-between py-2 ${
                    isActive
                      ? isHeroTop
                        ? 'text-emerald-200'
                        : 'text-emerald-600'
                      : ''
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
