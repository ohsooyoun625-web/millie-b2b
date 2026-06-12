"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 1000, suffix: "만+", label: "누적 회원 수", sub: "국내 최대 독서 플랫폼" },
  { num: 24,   suffix: "만+", label: "보유 도서 수", sub: "베스트셀러 1위 보유" },
  { num: 250, suffix: "+",   label: "도입 기업 수", sub: "대기업·공공기관 포함" },
  { num: 98,  suffix: "%",   label: "이용 만족도",  sub: "2025년 고객사 설문조사 기준" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const duration = 1800;
        const start = performance.now();
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(ease * target));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6rem 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#FFE400", display:"inline-flex", alignItems:"center", gap:8, marginBottom:"1rem" }}>
            <span style={{ width:24, height:2, background:"#FFE400", display:"block" }} />
            숫자로 보는 밀리
          </span>
          <h2 style={{ fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:800, letterSpacing:"-0.03em" }}>
            데이터가 증명하는 압도적 1위
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign:"center", padding:"2rem 1rem" }}>
              <div style={{ fontSize:"clamp(2.5rem,5vw,3.5rem)", fontWeight:900, color:"#FFE400", lineHeight:1, marginBottom:"0.5rem", letterSpacing:"-0.03em" }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize:"1rem", fontWeight:700, color:"#fff", marginBottom:"0.35rem" }}>{s.label}</div>
              <div style={{ fontSize:"0.82rem", color:"#6B6B6B" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* 경쟁사 비교 */}
        <div style={{ marginTop:"4rem", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"2rem 2.5rem" }}>
          <div style={{ textAlign:"center", marginBottom:"1.5rem" }}>
            <span style={{ fontSize:"0.8rem", color:"#FFE400", fontWeight:700, letterSpacing:"0.08em" }}>경쟁사 대비 압도적 우위</span>
          </div>
          <div className="compare-grid">
            <div style={{ fontSize:"0.85rem", color:"#6B6B6B", fontWeight:600 }}>비교 항목</div>
            <div style={{ textAlign:"center", fontWeight:800, color:"#FFE400", fontSize:"0.95rem" }}>밀리의서재</div>
            <div style={{ textAlign:"center", fontSize:"0.85rem", color:"#6B6B6B" }}>경쟁사 A</div>
            <div style={{ textAlign:"center", fontSize:"0.85rem", color:"#6B6B6B" }}>경쟁사 B</div>

            {[
              { label:"보유 권수", vals:["24만 권","12만 권","2만 권"] },
              { label:"베스트셀러 보유율", vals:["74%","21%","14%"] },
              { label:"신간 보유율", vals:["36%","21%","0.3%"] },
              { label:"수료 미션 기능", vals:["O","X","X"] },
              { label:"오디오북·챗북", vals:["O","O","X"] },
            ].map((row, i) => (
              <div key={`row${i}`} style={{ display:"contents" }}>
                <div style={{ fontSize:"0.85rem", color:"#B0B0B0", paddingTop:i>0?"0.75rem":0 }}>{row.label}</div>
                {row.vals.map((v, j) => (
                  <div key={`v${i}${j}`} style={{ textAlign:"center", fontWeight: j===0?800:400, color: j===0?"#FFE400":"#6B6B6B", fontSize: j===0?"0.95rem":"0.85rem", paddingTop:i>0?"0.75rem":0 }}>
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; }
        .stats-grid > div { background: #0D0D0D; }
        .compare-grid { display: grid; grid-template-columns: 2fr 1.5fr 1fr 1fr; gap: 0.5rem; align-items: center; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr); }
          .compare-grid { display: none; }
        }
      `}</style>
    </section>
  );
}
