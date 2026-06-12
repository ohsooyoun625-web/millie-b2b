"use client";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#111111"/>
      </svg>
    ),
    tag: "교육",
    title: "역량과 전문성 강화",
    desc: "다양한 관점의 독서는 직원들의 사고력과 문제 해결 능력을 높입니다. 직무 관련 도서, 비즈니스 인사이트 북으로 체계적인 사내 교육 환경을 구축할 수 있습니다.",
    highlight: "수료 미션 기능으로 성과 관리까지",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#111111"/>
      </svg>
    ),
    tag: "복지",
    title: "일과 삶의 균형",
    desc: "출퇴근길 오디오북, 주말 독서 등 언제 어디서나 이용 가능한 독서 복지는 임직원의 삶의 질과 만족도를 높이고, 우수 인재 유인과 리텐션에 직접적으로 기여합니다.",
    highlight: "임직원 가족까지 누리는 혜택",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 3h2v2h-2v-2zm0 4h2v2h-2v-2zM8 10h2v2H8v-2zm0 4h2v2H8v-2zm-2 2H4v-2h2v2zm0-4H4v-2h2v2zm12 4h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="#111111"/>
        <path d="M20 3H4c-1.1 0-2 .9-2 2v2h20V5c0-1.1-.9-2-2-2z" fill="#111111" opacity="0.4"/>
      </svg>
    ),
    tag: "경영",
    title: "학습하는 조직 문화",
    desc: "같은 책을 읽고 토론하는 문화는 부서 간 소통을 강화하고 조직의 집단 지성을 끌어올립니다. '독서경영 우수직장' 인증을 통한 기업 이미지 제고 효과도 기대할 수 있습니다.",
    highlight: "독서경영 우수직장 인증 지원",
  },
];

const tags = ["✓ 24만 권 무제한", "✓ 오디오북·챗북", "✓ 관리자 대시보드", "✓ 수료 미션 설정", "✓ 기업 전용 책장", "✓ 면세 혜택"];

export default function WhyReading() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }});
    }, { threshold: 0.1 });
    el.querySelectorAll(".reveal").forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-reading" ref={ref} style={{ padding: "9rem 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        {/* 헤더 */}
        <div className="reveal" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 5rem" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"0.5rem",
            fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em",
            textTransform:"uppercase", color:"#111111", marginBottom:"1.25rem",
          }}>
            <span style={{ display:"block", width:24, height:2, background:"#FFE400" }} />
            Why Corporate Reading
            <span style={{ display:"block", width:24, height:2, background:"#FFE400" }} />
          </span>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, lineHeight:1.25, letterSpacing:"-0.03em", marginBottom:"1.25rem", color:"#111111" }}>
            기업이 독서 경영에 투자해야 하는<br/>3가지 이유
          </h2>
          <p style={{ fontSize:"1.1rem", color:"#666666", lineHeight:1.8 }}>
            단순한 복지를 넘어, 독서는 개인과 조직 모두를 바꾸는 가장 강력한 경영 도구입니다.
          </p>
        </div>

        {/* 카드 */}
        <div className="why-cards-grid">
          {reasons.map((r, i) => (
            <div key={r.tag} className={`reveal stagger-${i + 1}`}
              style={{
                background:"#FFFFFF", border:"1px solid rgba(0,0,0,0.08)",
                borderRadius:24, padding:"2.5rem 2rem",
                transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",
                cursor:"default", boxShadow:"0 2px 16px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor="rgba(255,228,0,0.6)"; el.style.boxShadow="0 8px 32px rgba(0,0,0,0.08)"; el.style.transform="translateY(-6px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor="rgba(0,0,0,0.08)"; el.style.boxShadow="0 2px 16px rgba(0,0,0,0.04)"; el.style.transform="translateY(0)"; }}
            >
              <div style={{ width:52, height:52, borderRadius:14, background:"#FFE400", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.5rem" }}>
                {r.icon}
              </div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"0.25rem 0.75rem", borderRadius:50, background:"#F5F5F5", color:"#333333", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.06em", marginBottom:"0.75rem" }}>
                {r.tag}
              </div>
              <h3 style={{ fontSize:"1.15rem", fontWeight:700, marginBottom:"0.75rem", color:"#111111" }}>{r.title}</h3>
              <p style={{ color:"#666666", fontSize:"0.95rem", lineHeight:1.75, marginBottom:"1.25rem" }}>{r.desc}</p>
              <div style={{ fontSize:"0.82rem", color:"#111111", fontWeight:600, display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ display:"inline-block", width:16, height:2, background:"#FFE400", borderRadius:2, flexShrink:0 }} />
                {r.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge box */}
        <div className="reveal" style={{
          maxWidth:800, margin:"5rem auto 0",
          background:"linear-gradient(135deg, #FFFDE7, #FFFFF0)",
          border:"1.5px solid rgba(255,228,0,0.5)",
          borderRadius:24, padding:"3rem", textAlign:"center",
        }}>
          <h3 style={{ fontSize:"1.5rem", fontWeight:700, marginBottom:"1rem", color:"#111111" }}>이 모든 효과를, 밀리의서재 B2B 하나로</h3>
          <p style={{ color:"#666666", marginBottom:"2rem" }}>복잡한 준비 과정 없이 계약 즉시 전 임직원이 이용 가능합니다.<br/>초기 구축 비용 없이 기업 맞춤형 독서 경영을 시작하세요.</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem", justifyContent:"center", marginBottom:"2rem" }}>
            {tags.map(t => (
              <span key={t} style={{ padding:"0.4rem 1rem", background:"#FFFFFF", color:"#333333", borderRadius:50, fontSize:"0.85rem", fontWeight:600, border:"1px solid rgba(0,0,0,0.1)", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>{t}</span>
            ))}
          </div>
          <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
            style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.9rem 2rem", background:"#FFE400", borderRadius:50, fontWeight:700, color:"#111111", fontSize:"0.95rem", transition:"all 0.25s", boxShadow:"0 4px 16px rgba(255,228,0,0.4)" }}
            onMouseEnter={e => { e.currentTarget.style.background="#FFF380"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#FFE400"; e.currentTarget.style.transform="translateY(0)"; }}
          >📄 소개서 받기</a>
        </div>
      </div>

      <style>{`
        .why-cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .why-cards-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
