"use client";
import { useEffect, useRef } from "react";

const stats = [
  { num: "24만", label: "보유 도서 수" },
  { num: "250+", label: "도입 기업 수" },
  { num: "4천", label: "매월 신규 업데이트" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

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
    <section ref={ref} style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "5rem",
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,228,0,0.18) 0%, transparent 65%), #FFFFFF",
      textAlign: "center",
    }}>
      {/* 배경 도트 패턴 */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
      }} />

      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "4rem 2rem",
        position: "relative",
        zIndex: 1,
        width: "100%",
      }}>
        {/* 배지 */}
        <div className="reveal stagger-1 hero-badge" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.4rem 0.9rem", borderRadius: 50,
          background: "#FFE400", color: "#111111",
          fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em",
          marginBottom: "1.75rem", boxShadow: "0 2px 12px rgba(255,228,0,0.4)",
        }}>
          🏆 기업 독서 경영 플랫폼 1위
        </div>

        {/* 메인 헤드라인 */}
        <h1 className="reveal stagger-2" style={{
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
          fontWeight: 900,
          lineHeight: 1.25,
          letterSpacing: "-0.03em",
          marginBottom: "1.25rem",
          color: "#111111",
        }}>
          <span style={{ display: "block", whiteSpace: "nowrap" }}>
            독서는 개인의 성장을 넘어
          </span>
          <span style={{ display: "block", whiteSpace: "nowrap" }}>
            <span style={{ background: "#FFE400", color: "#111111", padding: "2px 8px", borderRadius: 6 }}>조직의 에너지</span>가 됩니다
          </span>
        </h1>

        {/* 서브 메시지 — 마케팅 가치 제안 보강 */}
        <p className="reveal stagger-2 hero-sub-nowrap" style={{
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "#444444",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}>
          임직원이 가장 오래 쓰는 복지 1위 &nbsp;·&nbsp; 250여 개 기업의 선택
        </p>

        {/* 서브 카피 */}
        <p className="reveal stagger-3" style={{ marginBottom: "2.5rem", lineHeight: 1.9, color: "#666666" }}>
          <span style={{ display: "block", whiteSpace: "nowrap", fontSize: "clamp(0.82rem, 1.35vw, 1rem)" }}>
            대기업부터 공공기관까지, <strong style={{ color: "#111111" }}>250여 개 기업</strong>이 밀리의서재 B2B를 선택했습니다.
          </span>
          <span style={{ display: "block", whiteSpace: "nowrap", fontSize: "clamp(0.82rem, 1.35vw, 1rem)" }}>
            국내 최대 24만 권의 콘텐츠로 임직원의 역량 강화와 독서 문화를 함께 만들어가세요.
          </span>
        </p>

        {/* CTA 버튼 — 콘텐츠 오퍼 방식 */}
        <div className="reveal stagger-4 hero-cta-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
            style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"1.1rem 2.25rem", background:"#FFE400", borderRadius:50, fontWeight:700, color:"#111111", fontSize:"1.05rem", transition:"all 0.25s", boxShadow:"0 4px 20px rgba(255,228,0,0.45)" }}
            onMouseEnter={e=>{e.currentTarget.style.background="#FFF380";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(255,228,0,0.5)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#FFE400";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(255,228,0,0.45)";}}
          >📄 소개서 받기</a>
          <a href="https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds" target="_blank"
            style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"1.1rem 2.25rem", background:"transparent", border:"1.5px solid rgba(0,0,0,0.15)", borderRadius:50, fontWeight:700, color:"#333333", fontSize:"1.05rem", transition:"all 0.25s" }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="#111111";e.currentTarget.style.color="#111111";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,0,0,0.15)";e.currentTarget.style.color="#333333";}}
          >📊 성공사례집 받기</a>
        </div>

        {/* 통계 */}
        <div className="reveal stagger-4 hero-stats-row" style={{
          display:"flex", marginTop:"3.5rem",
          paddingTop:"3rem", borderTop:"1px solid rgba(0,0,0,0.08)",
          justifyContent: "center",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "0 2.5rem",
              borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
            }}>
              <div style={{ fontSize:"2rem", fontWeight:900, color:"#111111", lineHeight:1 }}>{s.num}</div>
              <div style={{ fontSize:"0.8rem", color:"#888888", marginTop:"0.35rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
