'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_17qkh4h',
        'template_uojx59o',
        formRef.current,
        'X6TEA0yb4b3vELwve'
      )
      .then(() => {
        alert('전송되었습니다.');
        formRef.current?.reset();
      })
      .catch(() => {
        alert('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">

      {/* HERO */}
      <header
        id="page-top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
        style={{
          backgroundImage: "url('/img/main_new.png')", // <- 배경 이미지 경로
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-slate-900/60" />

        {/* 약간의 컬러 글로우(선택) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/25 blur-3xl" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
          {/* 로고 대신 텍스트 타이틀을 쓰고 싶으면 여기서 조합 */}
          <h1 className="text-4xl font-semibold tracking-[0.2em] text-white md:text-5xl">
            V<span className="inline-block -translate-y-1 text-3xl md:text-4xl">iew</span>{' '}
            Connex
          </h1>
          <p className="text-sm font-medium text-slate-100 md:text-base">
            플랫폼의 신영역을 이끌어 가는 기업
          </p>
        </div>
      </header>


      {/* ABOUT */}
      <section
        id="about"
        className="relative bg-gradient-to-br from-white to-sky-50 py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            그 곳의 [지금]을 보다
            <div className="mt-2 text-lg font-medium text-emerald-600 md:text-xl">
              REAL TIME SERVICE
            </div>
          </motion.h2>
          <motion.hr
            className="mx-auto mb-6 h-1 w-24 rounded border-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="mb-8 text-sm text-slate-600 md:text-base"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            | 실시간 영상 | 이커머스 | 라이브커머스 | 보안솔루션 |
          </motion.p>
          <motion.a
            href="#services"
            className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200/80 transition hover:bg-emerald-400"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              SERVICES
            </h2>
            <hr className="mx-auto mt-4 h-1 w-24 rounded border-0 bg-emerald-400" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* VIEWOWL */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src="/assets/icon1.png"
                  alt="VIEWOWL"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                VIEWOWL
              </h3>
              <p className="text-sm text-slate-600">
                여행과 레저의 즐거움,
                <br />
                실시간 영상 정보 어플리케이션
                <br />
                뷰엉이를 만나보세요.
              </p>
            </motion.div>

            {/* KT telecop */}
            <motion.div
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src="/img/icon2.png"
                  alt="KT telecop 파트너"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                KT telecop 파트너
              </h3>
              <p className="text-sm text-slate-600">
                믿을 수 있는 보안 기업 KT텔레캅과
                <br />
                IT 기업 뷰커넥스가 함께합니다.
              </p>
            </motion.div>

            {/* OWL-LIVE */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src="/img/icon3.png"
                  alt="OWL-LIVE"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                OWL-LIVE
              </h3>
              <p className="text-sm text-slate-600">
                준비 상품의 전과정 라이브커머스,
                <br className="hidden md:inline" />
                All cycle-Info Commerce를 만나보세요.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / INTRO SLIDER */}
      <section id="portfolio" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.intro_next',
              prevEl: '.intro_prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={32}
            className="relative"
          >
            {/* 회사소개 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <img
                    src="/img/intro1.png"
                    alt="회사소개"
                    className="w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    COMPANY INTRODUCTION
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    <span>회사소개</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    주식회사 뷰커넥스는 온라인과 오프라인을 연결하는 IT 기업으로서 실시간
                    클라우드 캠이라는 생생한 매체와 전국의 인프라를 통하여 다양한 로컬
                    데이터와 지역 광고 및 전자상거래 플랫폼을 제공합니다.
                    <br />
                    <br />
                    이는 소상공인과 함께 지역경제를 살리는 All Cycle Info-Commerce라는
                    새로운 개념의 커머스 플랫폼을 가능케하며 환경정보, 지역적 특성, 공간의
                    추천 등의 다양한 기능과 정보로 무한한 가능성을 지닌 문화와 산업, 전자상거래의
                    진보한 컨텐츠 서비스를 구현합니다.
                    <br />
                    <br />
                    지역 경제 기여와 레저사업의 리드, 그리고 스마트한 프라이빗 소셜라이프의
                    재미까지 유저의 입장에서 바라본 &quot;그것&quot;을 한 곳에 담은 플랫폼입니다.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* 뷰엉이 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <img
                    src="/img/intro2.png"
                    alt="뷰엉이"
                    className="w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    PLATFORM VIEWOWL
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    <span>뷰엉이</span>
                  </h3>
                  <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    <p>
                      [ 뷰엉이 ]는 본다는 의미의 VIEW 와 밤에도 깨어있다는 의미의 부엉이가
                      합쳐져서 탄생한 이름입니다.
                    </p>
                    <p>
                      [ 뷰엉이 ]는 웹 기반으로 제작된 어플리케이션으로서 웹과 스마트폰 모두
                      사용이 가능합니다.
                    </p>
                    <p>
                      [ 뷰엉이 ]는 클라우드 캠을 활용하여 유저가 선택한 위치의 현재 영상과
                      환경정보를 실시간으로 로딩 타임 없이 바로 제공합니다.
                    </p>
                    <p>[ 뷰엉이 ]는 유저의 관심사와 관련된 주변 상권을 소개합니다.</p>
                    <p>
                      [ 뷰엉이 ]는 협력사에게 전용 페이지와 무료 광고를 제공하고, 예약 및
                      결제 시스템을 이용한 매장 운영 솔루션을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 회사정보 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <img
                    src="/img/intro4.png"
                    alt="회사정보"
                    className="w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    COMPANY INFORMATION
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    <span>회사정보</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    상호 : 주식회사 뷰커넥스
                    <br />
                    대표 : 김윤호
                    <br />
                    전화 : 042-825-0402
                    <br />
                    FAX : 0504-485-0204
                    <br />
                    E-MAIL : viewconnex@naver.com
                    <br />
                    주소 : 대전광역시 유성구 북유성대로 155번길 4
                    <br />
                    사업자등록번호 : 318-87-03331
                    <br />
                    통신판매업신고번호 : -
                    <br />
                    호스팅제공자 : VIEWCONNEX Corp.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* 협력사 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <img
                    src="/img/intro5.png"
                    alt="뷰라운드"
                    className="w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    COOPERATOR
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    <span>뷰라운드</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    뷰라운드 골프
                  </p>
                  <a
                    href="http://www.viewround.co.kr/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-600 underline underline-offset-4 hover:text-emerald-500"
                  >
                    홈페이지 방문
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* 브랜드 리소스 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <img
                    src="/img/intro6.png"
                    alt="브랜드 리소스"
                    className="w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    BRAND RESOURCE
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    <span>브랜드 리소스</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    브랜드 리소스 관련 자료를 한 곳에서 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* 네비게이션 버튼 */}
            <div className="intro_prev swiper-button-prev !text-slate-700" />
            <div className="intro_next swiper-button-next !text-slate-700" />
          </Swiper>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-2 md:flex-row-reverse">
            <motion.div
              className="order-2 md:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
                뷰엉이를 지금 다운로드하세요!
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-700 md:text-base">
                뷰엉이는 실시간 스트리밍 서비스를 통하여 혼잡도, 날씨 등의 현장정보를 제공하는
                모바일 능동형 서비스입니다.
                <br />
                <br />
                포스트 코로나 시대, 언제까지 집에만 있을거야?
                <br />
                지겨운 일상을 설레는 일상으로!
                <br />
                <br />
                어떤 여행을 할지 고민된다면?
                <br />
                뷰엉이 어플에 들어가서 원하는 여행을 골라봐!
                <br />
                <br />
                LIVE로 즐기는 내 손안에 세상, 뷰엉이
              </p>
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <a
                  href="https://play.google.com/store/apps/details?id=viewowl.app&hl=ko&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/google-play-badge.svg"
                    alt="Google Play"
                    className="h-12"
                  />
                </a>
                <a
                  href="https://apps.apple.com/vn/app/%EB%B7%B0%EC%97%89%EC%9D%B4-viewowl/id1643650079"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/app-store-badge.svg"
                    alt="App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img
                src="/img/down.png"
                alt="뷰엉이 다운로드"
                className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              CONTACT
            </h2>
            <hr className="mx-auto mt-4 h-1 w-24 rounded border-0 bg-emerald-400" />
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              문의사항이 있으시면
              <br />
              언제든지 연락해주세요!
            </p>
          </div>

          <div className="mt-10">
            <form
              ref={formRef}
              onSubmit={handleSendMail}
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="이름을 입력해주세요."
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  이메일 주소
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  휴대폰 번호
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="내용을 입력해주세요."
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-400"
                >
                  제출
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
