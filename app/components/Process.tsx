"use client";
import { useEffect, useRef } from "react";

const steps = [
  { num: "1", title: "문의 접수", desc: "도입 문의 폼 작성", icon: "📋" },
  { num: "2", title: "견적 안내", desc: "인원·기간별 맞춤 할인율", icon: "📄" },
  { num: "3", title: "계약 체결", desc: "표준 계약서 제공", icon: "✅" },
  { num: "4", title: "계정 발급", desc: "임직원 명단으로 즉시 생성", icon: "🔑" },
  { num: "5", title: "운영 시작", desc: "관리자 페이지로 독서 현황 관리", icon: "📊" },
];

const useCases = [
  { icon: "🎓", label: "신입사원 온보딩" },
  { icon: "📈", label: "승진자 리더십 교육" },
  { icon: "📖", label: "사내 독서 모임" },
  { icon: "🧠", label: "직무 역량 강화" },
  { icon: "🌱", label: "자기계발 지원" },
  { icon: "🏆", label: "성과 우수자 포상" },
  { icon: "🎁", label: "기업 대내외 행사 바우처" },
  { icon: "🏢", label: "독서경영 우수직장 인증" },
];

export default function Process() {
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
    <section id="process" ref={ref} style={{ padding: "9rem 0", background: "#F7F7F7", textAlign: "center" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>

        {/* 헤더 */}
        <div className="reveal" style={{ marginBottom:"5rem" }}>
          <span style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#111111", marginBottom:"1.25rem" }}>
            <span style={{ width:24, height:2, background:"#FFE400", display:"block" }} />
            How It Works
          </span>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, lineHeight:1.25, letterSpacing:"-0.03em", marginBottom:"1.5rem", color:"#111111" }}>
            도입부터 운영까지, 간편하게
          </h2>
          <div style={{ display:"inline-flex", gap:"0.5rem", padding:"0.6rem 1.5rem", borderRadius:50, background:"#FFE400", color:"#111111", fontWeight:700, fontSize:"1rem", marginBottom:"1rem", boxShadow:"0 2px 12px rgba(255,228,0,0.4)" }}>
            🏷️ 인원·기간별 최대 30% 할인 · 면세 상품
          </div>
          <p style={{ fontSize:"1.1rem", color:"#666666" }}>표준 계약서 제공, 복잡한 세팅 없이 계정 발급 즉시 서비스 시작</p>
        </div>

        {/* 스텝 */}
        <div className="reveal steps-row">
          {steps.map((s, i) => (
            <div key={s.num} style={{ flex:1, minWidth:120, maxWidth:200, display:"flex", flexDirection:"column", alignItems:"center", padding:"0 1rem", position:"relative" }}>
              {i < steps.length - 1 && (
                <div style={{ position:"absolute", right:-12, top:20, color:"rgba(0,0,0,0.2)", fontSize:"1.2rem" }}>→</div>
              )}
              <div style={{ width:48, height:48, borderRadius:"50%", background:"#FFE400", color:"#111111", fontWeight:900, fontSize:"1.1rem", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1rem", boxShadow:"0 0 0 8px rgba(255,228,0,0.15)" }}>
                {s.num}
              </div>
              <div style={{ fontSize:"1.5rem", marginBottom:"0.5rem" }}>{s.icon}</div>
              <h4 style={{ fontSize:"0.95rem", fontWeight:700, marginBottom:"0.4rem", color:"#111111" }}>{s.title}</h4>
              <p style={{ fontSize:"0.8rem", color:"#888888" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 활용 유형 */}
        <div className="reveal" style={{ marginTop:"6rem" }}>
          <h3 style={{ fontSize:"1.4rem", fontWeight:700, marginBottom:"0.75rem", color:"#111111" }}>다양한 방식으로 활용하세요</h3>
          <p style={{ color:"#888888", marginBottom:"2.5rem", fontSize:"1rem" }}>복지·교육·포상·제휴까지, 기업 목적에 맞게 유연하게 운영</p>
          <div className="use-cases-grid">
            {useCases.map(u => (
              <div key={u.label}
                style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"1rem 1.25rem", background:"#FFFFFF", border:"1px solid rgba(0,0,0,0.08)", borderRadius:14, transition:"all 0.25s", boxShadow:"0 1px 6px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,228,0,0.5)"; e.currentTarget.style.background="#FFFEF0"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,0,0,0.08)"; e.currentTarget.style.background="#FFFFFF"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                <span style={{ fontSize:"1.3rem" }}>{u.icon}</span>
                <span style={{ fontSize:"0.88rem", fontWeight:600, color:"#333333" }}>{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .steps-row { display: flex; align-items: flex-start; gap: 0; justify-content: center; flex-wrap: wrap; }
        .use-cases-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.875rem; text-align: left; }
        @media (max-width: 900px) {
          .steps-row { gap: 2rem; }
          .use-cases-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 480px) { .use-cases-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
