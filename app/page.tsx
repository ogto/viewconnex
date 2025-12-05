'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 공통 애니메이션
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
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
      {/* HERO (SafeCam 스타일 캐러셀 무드) */}
      <header
        id="page-top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 pt-[72px]"
        // 72px = 헤더 높이, 필요하면 80px 정도로 살짝 조정 가능
      >
        {/* 백그라운드 이미지 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/main_new.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

        {/* 내용 */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="inline-flex items-center rounded-full bg-sky-500/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg"
          >
            Real Time · Security · Commerce
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl font-semibold tracking-[0.2em] text-white md:text-6xl lg:text-7xl"
          >
            V
            <span className="inline-block -translate-y-1 text-[2.8rem] md:text-[3.4rem]">
              iew
            </span>{' '}
            C
            <span className="inline-block -translate-y-1 text-[2.8rem] md:text-[3.4rem]">
              onnex
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-5 text-lg font-medium text-sky-50 md:text-2xl"
          >
            플랫폼의 신영역을 이끌어 가는 실시간 영상 기반 플랫폼
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-4 text-sm text-slate-200 md:text-base"
          >
            | 실시간 영상 | 이커머스 | 라이브커머스 | 보안솔루션 |
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              서비스 소개 보기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              문의하기
            </a>
          </motion.div>

          {/* 인디케이터 느낌 점 */}
          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-10 flex items-center justify-center gap-2"
          >
            <span className="h-2 w-6 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/60" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </motion.div> */}
        </div>
      </header>


      {/* ABOUT (SafeCam About 섹션 무드) */}
      <section id="about" className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* 이미지 영역 */}
            <motion.div
              className="min-h-[320px] lg:min-h-[420px]"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/cctv.jpg"
                  alt="VIEWCONNEX 소개"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* 텍스트 영역 */}
            <motion.div
              className="flex flex-col justify-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5">
                <h5 className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
                  About Us
                </h5>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  실시간 영상과 로컬 데이터를 연결하는 플랫폼, VIEWCONNEX
                </h2>
              </div>
              <h4 className="mb-4 text-base italic text-slate-600 md:text-lg">
                실시간 클라우드 캠과 전국 인프라를 기반으로
                <br className="hidden md:block" />
                지역의 &quot;지금&quot;을 그대로 전합니다.
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                주식회사 뷰커넥스는 온라인과 오프라인을 연결하는 IT 기업으로서 실시간
                클라우드 캠과 전국 인프라를 통하여 다양한 로컬 데이터와 지역 광고 및
                전자상거래 플랫폼을 제공합니다.
                <br />
                <br />
                소상공인과 함께 지역경제를 살리는 All Cycle Info-Commerce라는 새로운
                개념의 커머스 플랫폼을 지향하며, 환경정보, 지역 특성, 공간 추천 등의
                기능으로 사용자의 라이프스타일에 맞는 경험을 제공합니다.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col items-center justify-center rounded bg-sky-500 px-4 py-6 text-center text-white shadow-sm border-b-4 border-sky-700">
                  <i className="mb-3 text-4xl fa fa-video" />
                  <h4 className="text-lg font-semibold">실시간 스트리밍</h4>
                  <p className="mt-1 text-xs text-sky-100">
                    혼잡도/날씨 등 현장 정보를
                    <br />
                    실시간으로 제공합니다.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded bg-amber-500 px-4 py-6 text-center text-white shadow-sm border-b-4 border-amber-700">
                  <i className="mb-3 text-4xl fa fa-shopping-cart" />
                  <h4 className="text-lg font-semibold">로컬 커머스</h4>
                  <p className="mt-1 text-xs text-amber-100">
                    지역 상권과 연계된
                    <br />
                    커머스/예약/결제를 연결합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES (SafeCam Services 무드) */}
      <section id="services" className="w-full bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto mb-10 max-w-xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              Services
            </h5>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              뷰커넥스가 제공하는 핵심 서비스
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* VIEWOWL */}
            <motion.div
              className="rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="border-b-4 border-sky-500 p-6">
                <i className="flaticon-cctv mb-3 block text-4xl text-sky-500" />
                <h5 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                  VIEWOWL
                </h5>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">
                  실시간 여행/레저 플랫폼
                </h3>
              </div>
              <div className="p-6 text-sm text-slate-600">
                여행지와 레저 공간의 실시간 영상과 환경정보를 제공하는 웹·모바일
                기반 서비스입니다. 혼잡도, 날씨, 분위기를 미리 확인하고 계획할 수
                있습니다.
              </div>
            </motion.div>

            {/* KT telecop 파트너 */}
            <motion.div
              className="rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="border-b-4 border-sky-500 p-6">
                <i className="flaticon-security-system mb-3 block text-4xl text-sky-500" />
                <h5 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                  Security
                </h5>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">
                  KT telecop 파트너
                </h3>
              </div>
              <div className="p-6 text-sm text-slate-600">
                믿을 수 있는 보안 기업 KT텔레캅과 협업하여, 실시간 영상 플랫폼과
                보안 솔루션을 결합한 안정적인 모니터링/관제 환경을 제공합니다.
              </div>
            </motion.div>

            {/* OWL-LIVE */}
            <motion.div
              className="rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="border-b-4 border-sky-500 p-6">
                <i className="flaticon-camera mb-3 block text-4xl text-sky-500" />
                <h5 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                  OWL-LIVE
                </h5>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">
                  라이브 커머스 솔루션
                </h3>
              </div>
              <div className="p-6 text-sm text-slate-600">
                준비 상품의 전 과정을 실시간으로 보여주는 All cycle-Info Commerce
                라이브커머스 플랫폼으로, 상품 기획부터 판매까지 한 번에 연결합니다.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / IR (SafeCam 섹션 무드 + Swiper 유지) */}
      <section id="portfolio" className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto mb-10 max-w-xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              IR & Company
            </h5>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              회사 및 서비스 정보를 한눈에
            </h2>
          </motion.div>

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
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/img/intro1.png"
                    alt="회사소개"
                    className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Company Introduction
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    회사소개
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    주식회사 뷰커넥스는 온라인과 오프라인을 연결하는 IT 기업으로서
                    실시간 클라우드 캠이라는 생생한 매체와 전국의 인프라를 통하여 다양한
                    로컬 데이터와 지역 광고 및 전자상거래 플랫폼을 제공합니다.
                    <br />
                    <br />
                    이는 소상공인과 함께 지역경제를 살리는 All Cycle Info-Commerce라는
                    새로운 개념의 커머스 플랫폼을 가능케하며, 환경정보, 지역적 특성, 공간
                    추천 등의 기능으로 무한한 가능성을 지닌 컨텐츠 서비스를 구현합니다.
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* 뷰엉이 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/img/intro2.png"
                    alt="뷰엉이"
                    className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Platform Viewowl
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    뷰엉이
                  </h3>
                  <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
                    <p>
                      [ 뷰엉이 ]는 본다는 의미의 VIEW 와 밤에도 깨어있다는 의미의 부엉이가
                      합쳐져 탄생한 이름입니다.
                    </p>
                    <p>
                      웹 기반으로 제작된 어플리케이션으로서, 웹과 스마트폰에서 모두
                      사용이 가능합니다.
                    </p>
                    <p>
                      클라우드 캠을 활용하여 선택한 위치의 현재 영상과 환경정보를 로딩
                      타임 없이 실시간으로 제공합니다.
                    </p>
                    <p>유저의 관심사와 관련된 주변 상권을 함께 소개합니다.</p>
                    <p>
                      협력사에게 전용 페이지와 무료 광고, 예약 및 결제 시스템을 제공하여
                      매장 운영 솔루션을 제시합니다.
                    </p>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* 회사정보 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/img/intro4.png"
                    alt="회사정보"
                    className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Company Information
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    회사정보
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
                </motion.div>
              </div>
            </SwiperSlide>

            {/* 협력사 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/img/intro5.png"
                    alt="뷰라운드"
                    className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Cooperator
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    뷰라운드
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    뷰라운드 골프
                  </p>
                  <a
                    href="http://www.viewround.co.kr/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-500"
                  >
                    홈페이지 방문
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* 브랜드 리소스 */}
            <SwiperSlide>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <motion.div
                  variants={zoomIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/img/intro6.png"
                    alt="브랜드 리소스"
                    className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                    Brand Resource
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    브랜드 리소스
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    VIEWCONNEX 브랜드 자산과 가이드를 한 곳에서 확인할 수 있는 리소스
                    허브입니다.
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* 네비게이션 버튼 */}
            <div className="intro_prev swiper-button-prev !text-slate-700" />
            <div className="intro_next swiper-button-next !text-slate-700" />
          </Swiper>
        </div>
      </section>

      {/* DOWNLOAD (SafeCam Offer/CTA 무드) */}
      <section id="download" className="w-full bg-sky-600 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              className="text-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <h5 className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100/80">
                  Download App
                </h5>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  뷰엉이를 지금 다운로드하세요!
                </h2>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-sky-100 md:text-base">
                뷰엉이는 실시간 스트리밍을 통해 혼잡도, 날씨 등의 현장 정보를 제공하는
                모바일 능동형 서비스입니다.
                <br />
                <br />
                어떤 여행을 할지 고민된다면,
                <br />
                뷰엉이에서 오늘의 여행지를 골라보세요.
                <br />
                <br />
                LIVE로 즐기는 내 손안의 세상, 뷰엉이.
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=viewowl.app&hl=ko&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/google-play-badge.svg"
                    alt="Google Play"
                    className="h-12 drop-shadow"
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
                    className="h-12 drop-shadow"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <img
                src="/img/down.png"
                alt="뷰엉이 다운로드"
                className="mx-auto w-full max-w-md rounded-lg border border-sky-100/60 bg-sky-50/40 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT (SafeCam Contact/Newsletter 무드) */}
      <section id="contact" className="w-full bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              Contact
            </h5>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              문의사항이 있으시면 언제든지 연락주세요
            </h2>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              간단한 문의는 아래 양식으로 보내주시면,
              <br />
              담당자가 확인 후 빠르게 연락드리겠습니다.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSendMail}
              className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-2">
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
                    className="w-full rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
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
                    className="w-full rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
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
                  className="w-full rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
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
                  placeholder="문의하실 내용을 입력해주세요."
                  className="w-full rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-300 transition hover:bg-sky-400"
                >
                  문의 보내기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
