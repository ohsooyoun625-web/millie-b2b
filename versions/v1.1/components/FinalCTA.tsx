"use client";
import { useEffect, useRef } from "react";

export default function FinalCTA() {
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
    <section id="cta-final" ref={ref} style={{
      background: "linear-gradient(160deg, #FFFDE7 0%, #FFFFFF 50%, #F7F7F7 100%)",
      textAlign: "center",
      padding: "10rem 0 9rem",
      borderTop: "1px solid rgba(0,0,0,0.06)",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        <span className="reveal" style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#111111", marginBottom:"2rem" }}>
          <span style={{ width:24, height:2, background:"#FFE400", display:"block" }} />
          지금 시작하세요
        </span>

        <h2 className="reveal" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, lineHeight:1.2, letterSpacing:"-0.03em", marginBottom:"1.25rem", color:"#111111" }}>
          임직원의 성장이<br/><span style={{ background:"#FFE400", padding:"2px 10px", borderRadius:8 }}>조직의 경쟁력</span>이 됩니다
        </h2>

        <p className="reveal" style={{ fontSize:"1.1rem", color:"#666666", lineHeight:1.8, marginBottom:"3rem", maxWidth:600, marginLeft:"auto", marginRight:"auto" }}>
          250여 개 기업과 함께한 밀리의서재 B2B.<br/>
          지금 문의하시면 맞춤 제안서를 빠르게 받아보실 수 있습니다.
        </p>

        <div className="reveal" style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"2rem" }}>
          <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
            style={{ display:"inline-flex", alignItems:"center", padding:"1.1rem 2.5rem", background:"#FFE400", borderRadius:50, fontWeight:700, color:"#111111", fontSize:"1.05rem", transition:"all 0.25s", boxShadow:"0 6px 24px rgba(255,228,0,0.45)" }}
            onMouseEnter={e => { e.currentTarget.style.background="#FFF380"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(255,228,0,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#FFE400"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 6px 24px rgba(255,228,0,0.45)"; }}
          >도입 문의하기 →</a>
          <a href="https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds" target="_blank"
            style={{ display:"inline-flex", alignItems:"center", padding:"1.1rem 2.5rem", background:"transparent", border:"1.5px solid rgba(0,0,0,0.15)", borderRadius:50, fontWeight:700, color:"#333333", fontSize:"1.05rem", transition:"all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="#111111"; e.currentTarget.style.color="#111111"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,0,0,0.15)"; e.currentTarget.style.color="#333333"; e.currentTarget.style.transform="translateY(0)"; }}
          >사업 제휴 문의</a>
        </div>

        <p className="reveal" style={{ color:"#AAAAAA", fontSize:"0.9rem" }}>
          B2B 서비스 문의:{" "}
          <a href="mailto:b2bcs@millie.town" style={{ color:"#666666", textDecoration:"underline" }}>b2bcs@millie.town</a>
        </p>
      </div>
    </section>
  );
}
