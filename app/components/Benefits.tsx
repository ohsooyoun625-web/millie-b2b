"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "content",
    label: "24만 권 무제한",
    eyebrow: "Content",
    title: "국내 최다 24만 권,\n압도적인 콘텐츠",
    desc: "베스트셀러 보유 비율 업계 최다(74%). 신간 입고 속도 최고(36%). 원하는 책을 대기 없이, 무제한으로 즐기세요.",
    items: [
      { icon: "📖", title: "전자책 24만 권 무제한 열람", desc: "경제경영, 자기계발, 인문 등 전 분야 커버" },
      { icon: "🎧", title: "오디오북 · 챗북 · AI독파밍", desc: "듣고, 대화하고, 요약하는 다양한 독서 방식" },
      { icon: "🔄", title: "매월 4,000권 이상 신규 업데이트", desc: "신간 베스트셀러 즉시 이용 가능" },
    ],
    img: "/images/app/app-audiobookList.png",
    imgAlt: "밀리의서재 콘텐츠",
  },
  {
    id: "admin",
    label: "관리자 대시보드",
    eyebrow: "Admin Dashboard",
    title: "독서 현황을 한눈에,\n기업 전용 관리자 페이지",
    desc: "초기 구축 비용 없이, 계정 발급 즉시 임직원 독서 현황을 실시간으로 관리. 엑셀 리포트까지 자동 제공됩니다.",
    items: [
      { icon: "📊", title: "실시간 독서 통계 대시보드", desc: "열람 시간, 완독률, 인기 도서 등 엑셀 리포트 제공" },
      { icon: "🎯", title: "수료 미션 & 독서 챌린지 설정", desc: "월별 필독서 지정, 미션 달성 현황 모니터링" },
      { icon: "📚", title: "기업 전용 큐레이션 책장", desc: "필독서·추천도서를 기업 브랜딩과 함께 운영 가능" },
    ],
    img: "/images/app/app-biznotice.png",
    imgAlt: "밀리의서재 관리자 페이지",
  },
  {
    id: "mobile",
    label: "완벽한 모바일 경험",
    eyebrow: "Accessibility",
    title: "언제 어디서나,\n완벽한 모바일 경험",
    desc: "출퇴근길, 운동 중, 반신욕 중에도 오디오북으로 독서하세요. 구성원의 일상 속에 녹아드는 독서 경험을 제공합니다.",
    items: [
      { icon: "📱", title: "iOS / Android / PC 전기기 지원", desc: "모바일, 태블릿, PC 어디서나 이용 가능" },
      { icon: "🔖", title: "자동 독서 위치 저장", desc: "기기를 바꿔도 읽던 위치에서 바로 이어 읽기" },
      { icon: "💡", title: "AI 도서 추천 큐레이션", desc: "개인 취향과 직무에 맞는 도서를 자동 추천" },
    ],
    img: "/images/app/app-home.png",
    imgAlt: "밀리의서재 모바일 앱",
  },
  {
    id: "stats",
    label: "독서 통계",
    eyebrow: "Reading Stats",
    title: "성과를 측정하는\n독서 통계 리포트",
    desc: "구성원 개인별 월간·연간 독서량, 독서 시간, 완독률을 한눈에 파악합니다. 담당자의 KPI 관리를 쉽게.",
    items: [
      { icon: "📈", title: "월간·연간 독서 리포트", desc: "부서별·개인별 독서 현황 엑셀 다운로드" },
      { icon: "🏆", title: "인기 도서 & 독서 순위", desc: "구성원 간 독서 경쟁으로 참여율 자연 상승" },
      { icon: "📝", title: "포스트(독후감) 관리", desc: "독서 기록 작성·공유로 지식 확산" },
    ],
    img: "/images/app/app-bizlibrary.png",
    imgAlt: "밀리의서재 독서통계",
  },
];

export default function Benefits() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }});
    }, { threshold: 0.08 });
    el.querySelectorAll(".reveal").forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const switchTab = useCallback((i: number) => {
    setVisible(false);
    setTimeout(() => { setActive(i); setVisible(true); }, 180);
  }, []);

  const tab = tabs[active];

  return (
    <section id="benefits" ref={sectionRef} style={{ padding: "9rem 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal" style={{ textAlign:"center", marginBottom:"5rem" }}>
          <span style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#111111", marginBottom:"1.25rem" }}>
            <span style={{ width:24, height:2, background:"#FFE400", display:"block" }} />
            Key Features
          </span>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, lineHeight:1.25, letterSpacing:"-0.03em", color:"#111111" }}>
            밀리의서재 B2B만의<br/>핵심 차별화 기능
          </h2>
        </div>

        {/* 탭 버튼 */}
        <div className="reveal" style={{ display:"flex", gap:"0.5rem", marginBottom:"3rem", borderBottom:"2px solid rgba(0,0,0,0.08)", flexWrap:"wrap" }}>
          {tabs.map((t, i) => (
            <button key={t.id} onClick={() => switchTab(i)}
              style={{
                padding:"0.75rem 1.25rem", borderRadius:"12px 12px 0 0",
                border:"none", cursor:"pointer", fontSize:"0.9rem", fontWeight:700,
                transition:"all 0.25s",
                background: i===active ? "#FFE400" : "transparent",
                color: i===active ? "#111111" : "#888888",
                marginBottom: i===active ? "-2px" : "0",
                borderBottom: i===active ? "2px solid #FFE400" : "2px solid transparent",
              }}
              onMouseEnter={e => { if(i!==active) e.currentTarget.style.color="#333333"; }}
              onMouseLeave={e => { if(i!==active) e.currentTarget.style.color="#888888"; }}
            >{t.label}</button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="reveal benefits-grid" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.18s ease" }}>
          {/* 텍스트 */}
          <div>
            <span style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#888888", display:"block", marginBottom:"0.75rem" }}>{tab.eyebrow}</span>
            <h3 style={{ fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:800, lineHeight:1.3, letterSpacing:"-0.02em", marginBottom:"1rem", whiteSpace:"pre-line", color:"#111111" }}>{tab.title}</h3>
            <p style={{ fontSize:"1.05rem", color:"#666666", lineHeight:1.8, marginBottom:"2rem" }}>{tab.desc}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem" }}>
              {tab.items.map(item => (
                <div key={item.title}
                  style={{ display:"flex", alignItems:"flex-start", gap:"1rem", padding:"1.25rem", background:"#F7F7F7", borderRadius:16, border:"1px solid rgba(0,0,0,0.06)", transition:"all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,228,0,0.5)"; e.currentTarget.style.background="#FFFEF0"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"; e.currentTarget.style.background="#F7F7F7"; }}
                >
                  <div style={{ width:40, height:40, flexShrink:0, background:"#FFE400", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem" }}>{item.icon}</div>
                  <div>
                    <strong style={{ display:"block", fontSize:"0.95rem", marginBottom:"0.2rem", color:"#111111" }}>{item.title}</strong>
                    <span style={{ fontSize:"0.85rem", color:"#888888" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 이미지 */}
          <div style={{ borderRadius:24, overflow:"hidden", border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 16px 48px rgba(0,0,0,0.1)", background:"#F7F7F7", display:"flex", alignItems:"center", justifyContent:"center", minHeight:400 }}>
            <Image src={tab.img} alt={tab.imgAlt} width={600} height={500}
              style={{ width:"100%", height:"auto", display:"block", transition:"opacity 0.3s" }}
              unoptimized
            />
          </div>
        </div>
      </div>

      <style>{`
        .benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        @media (max-width: 900px) { .benefits-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
      `}</style>
    </section>
  );
}
