"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
      background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(255,228,0,0.15) 0%, transparent 65%), #FFFFFF",
    }}>
      {/* 배경 도트 패턴 */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
      }} />

      <div className="hero-inner" style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "4rem 2rem",
        position: "relative",
        zIndex: 1,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}>
        {/* 왼쪽: 텍스트 */}
        <div>
          {/* 배지 */}
          <div className="reveal stagger-1 hero-badge" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 0.9rem", borderRadius: 50,
            background: "#FFE400", color: "#111111",
            fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em",
            marginBottom: "1.75rem", boxShadow: "0 2px 12px rgba(255,228,0,0.4)",
          }}>
            🏆 기업 독서 경영 플랫폼 No.1
          </div>

          {/* 메인 헤드라인 */}
          <h1 className="reveal stagger-2" style={{
            fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 900,
            lineHeight: 1.25,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            color: "#111111",
          }}>
            <span style={{ display: "block" }}>독서는 개인의 성장을 넘어</span>
            <span style={{ display: "block" }}>
              <span style={{ background: "#FFE400", color: "#111111", padding: "2px 8px", borderRadius: 6 }}>조직의 에너지</span>가 됩니다
            </span>
          </h1>

          {/* 서브 메시지 */}
          <p className="reveal stagger-2" style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#444444",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            임직원이 가장 오래 쓰는 복지 &nbsp;·&nbsp; 250여 개 기업의 선택
          </p>

          {/* 서브 카피 */}
          <p className="reveal stagger-3" style={{ marginBottom: "2.5rem", lineHeight: 1.9, color: "#666666", fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)" }}>
            대기업부터 공공기관까지, <strong style={{ color: "#111111" }}>250여 개 기업</strong>이 밀리의서재 B2B를 선택했습니다.<br />
            국내 최대 24만 권의 콘텐츠로 임직원의 역량 강화와 독서 문화를 함께 만들어가세요.
          </p>

          {/* CTA 버튼 */}
          <div className="reveal stagger-4 hero-cta-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
              style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"1.1rem 2.25rem", background:"#FFE400", borderRadius:50, fontWeight:700, color:"#111111", fontSize:"1rem", transition:"all 0.25s", boxShadow:"0 4px 20px rgba(255,228,0,0.45)" }}
              onMouseEnter={e=>{e.currentTarget.style.background="#FFF380";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(255,228,0,0.5)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#FFE400";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(255,228,0,0.45)";}}
            >📄 소개서 받기</a>
            <a href="https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds" target="_blank"
              style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"1.1rem 2.25rem", background:"transparent", border:"1.5px solid rgba(0,0,0,0.15)", borderRadius:50, fontWeight:700, color:"#333333", fontSize:"1rem", transition:"all 0.25s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#111111";e.currentTarget.style.color="#111111";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,0,0,0.15)";e.currentTarget.style.color="#333333";}}
            >📊 성공사례집 받기</a>
          </div>

          {/* 통계 */}
          <div className="reveal stagger-4 hero-stats-row" style={{
            display:"flex", marginTop:"3rem",
            paddingTop:"2.5rem", borderTop:"1px solid rgba(0,0,0,0.08)",
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: "0 2rem",
                borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                paddingLeft: i === 0 ? 0 : "2rem",
              }}>
                <div style={{ fontSize:"1.8rem", fontWeight:900, color:"#111111", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:"0.78rem", color:"#888888", marginTop:"0.35rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 앱 스크린샷 */}
        <div className="reveal stagger-3 hero-screens" style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: 460,
        }}>
          {/* 관리자 화면 — 뒤 */}
          <div style={{
            position: "absolute",
            top: 30,
            right: 0,
            width: "72%",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.13)",
            border: "1px solid rgba(0,0,0,0.08)",
            background: "#F7F7F7",
          }}>
            <div style={{
              background: "#111111",
              padding: "0.5rem 0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}>
              <span style={{ width:10, height:10, borderRadius:"50%", background:"#FF5F57", display:"inline-block" }} />
              <span style={{ width:10, height:10, borderRadius:"50%", background:"#FFBD2E", display:"inline-block" }} />
              <span style={{ width:10, height:10, borderRadius:"50%", background:"#28CA42", display:"inline-block" }} />
              <span style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.5)", marginLeft:"0.5rem" }}>관리자 페이지</span>
            </div>
            <Image src="/images/app/app-bizlibrary.png" alt="관리자 페이지"
              width={600} height={400}
              style={{ width:"100%", height:"auto", display:"block" }}
              unoptimized
            />
          </div>

          {/* 앱 화면 — 앞 */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "52%",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 20px 56px rgba(0,0,0,0.18)",
            border: "1px solid rgba(0,0,0,0.08)",
            background: "#F7F7F7",
          }}>
            <div style={{
              background: "#FFE400",
              padding: "0.5rem 0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}>
              <span style={{ fontSize:"0.7rem", color:"rgba(0,0,0,0.6)", fontWeight:700 }}>밀리의서재 앱</span>
            </div>
            <Image src="/images/app/app-home.png" alt="밀리의서재 앱"
              width={400} height={500}
              style={{ width:"100%", height:"auto", display:"block" }}
              unoptimized
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; text-align: center; }
          .hero-cta-row { justify-content: center; }
          .hero-stats-row { justify-content: center; }
          .hero-screens { min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
