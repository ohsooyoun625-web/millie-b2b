"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const cases = [
  {
    company: "현대모비스",
    industry: "제조업 · HR팀",
    image: "/images/cases/building-hyundai-wia.png",
    quote: "시간과 공간의 제약 없이 독서를 즐길 수 있다는 점이 구성원들에게 실질적인 만족을 주는 가장 큰 장점입니다. 담당자로서 독서 관련 정량적 데이터 추출이 용이해졌으며, 종이책의 물리적 한계에서 벗어나 모두에게 차별 없는 독서 문화를 만들어 나가고 있습니다.",
    author: "강민수 매니저 · 인사운영실",
    kpis: [
      { val: "자기주도", label: "학습 문화 형성" },
      { val: "데이터", label: "정량적 추출 가능" },
    ],
    accent: "#FFE400",
  },
  {
    company: "셀트리온",
    industry: "바이오 산업 · 복지기획팀",
    image: "/images/logos/celltrion2.png",
    quote: "단순히 책을 제공하는 것을 넘어, 조직문화로 연계되는 독서 문화를 만들고 있습니다. 밀리는 그 어느 독서 복지보다도 임직원 이용률과 만족도가 높은 프로그램이라 생각합니다. 더 나아가 임직원의 만족도와 생각들이 회사 조직문화로도 연결될 수 있습니다.",
    author: "최동민 사원 · 복지 제도 및 조직문화 프로그램 담당",
    kpis: [
      { val: "3배", label: "전자도서관 이용률 증대" },
      { val: "36%", label: "도입 후 열람율 달성 (기존 12%)" },
    ],
    accent: "#FFE400",
  },
  {
    company: "BNK경남은행",
    industry: "금융업 · 인사부",
    image: "/images/logos/bnk.png",
    quote: "책을 단순히 복지 차원이 아닌, 조직문화를 형성하는 서비스로 바라보시길 추천드립니다. 구성원 각자가 시간과 상황에 맞춰 자유롭게 독서를 할 수 있는 환경이 필요하다고 판단했고, 밀리의서재가 가장 적합한 솔루션이었습니다.",
    author: "김민준 과장 · 인사부 복지 담당",
    kpis: [
      { val: "가족", label: "임직원 가족 만족도 제고" },
      { val: "매월", label: "독서 이벤트 정기 진행" },
    ],
    accent: "#FFE400",
  },
  {
    company: "현대위아",
    industry: "제조업 · 교육문화팀",
    image: "/images/cases/building-hyundai-wia.png",
    quote: "단순 복지 차원을 넘어 당사 경쟁력 강화 및 긍정적인 조직문화 조성의 전략적 수단으로 적극 활용하고 있습니다. 콘텐츠 기반의 자기주도 성장 및 긍정적 조직문화 조성을 희망하는 모든 기업에게 밀리를 적극 추천합니다.",
    author: "윤후명 매니저 · 교육문화팀",
    kpis: [
      { val: "HRD", label: "인적자원개발 연계" },
      { val: "필독서", label: "임직원 투표 선정 운영" },
    ],
    accent: "#FFE400",
  },
  {
    company: "한양대학교 ERICA",
    industry: "교육기관 · 학술정보관",
    image: "/images/cases/building-hanyang.png",
    quote: "타사 대비 더 많은 콘텐츠를 보유하고 있다는 점이 가장 큰 매력으로 다가왔습니다. 시간과 장소에 구애받지 않고 다양한 디바이스에서 책을 읽을 수 있어 매우 유용했으며, 성우가 현장감 있게 읽어주는 오디오북 덕분에 끝까지 흥미롭게 읽을 수 있었다는 의견이 인상 깊었습니다.",
    author: "김송수 팀장 · ERICA학술정보관",
    kpis: [
      { val: "독서모임", label: "휴리클(HYU Reading Club)" },
      { val: "전원", label: "학부생·교직원 모두 이용" },
    ],
    accent: "#FFE400",
  },
];

export default function CasesCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + cases.length) % cases.length);
  }, []);

  const startAutoplay = useCallback(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % cases.length), 5000);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }});
    }, { threshold: 0.1 });
    el.querySelectorAll(".reveal").forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const handlePrev = () => { stopAutoplay(); goTo(current - 1); startAutoplay(); };
  const handleNext = () => { stopAutoplay(); goTo(current + 1); startAutoplay(); };

  return (
    <section id="cases" ref={sectionRef} style={{ padding: "9rem 0", background: "#F7F7F7" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        {/* 헤더 */}
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <span style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", fontSize:"0.8rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#111111", marginBottom:"1.25rem" }}>
            <span style={{ width:24, height:2, background:"#FFE400", display:"block" }} />
            Customer Stories
          </span>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, lineHeight:1.25, letterSpacing:"-0.03em", marginBottom:"1rem", color:"#111111" }}>
            250여 개 기업의 실제 이야기
          </h2>
          <p style={{ fontSize:"1.1rem", color:"#666666" }}>밀리의서재 B2B가 실제로 만들어낸 변화를 직접 들어보세요.</p>
        </div>

        {/* 캐러셀 */}
        <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {cases.map((c, i) => (
              <div key={c.company} style={{ minWidth: "100%" }}>
                <div className="case-inner-grid" style={{
                  display:"grid", gridTemplateColumns:"1fr 1fr",
                  minHeight:480, borderRadius:24, overflow:"hidden",
                  background:"#FFFFFF", border:"1px solid rgba(0,0,0,0.08)",
                  boxShadow:"0 4px 32px rgba(0,0,0,0.08)",
                }}>
                  {/* 이미지 */}
                  <div style={{ position:"relative", overflow:"hidden", background:"#F0F0F0" }}>
                    <img src={c.image} alt={c.company}
                      style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", opacity:0.9, transition:"transform 0.8s ease", transform: i === current ? "scale(1.03)" : "scale(1)" }}
                      onError={e => { e.currentTarget.style.display = "none"; }}
                    />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, transparent 50%, rgba(255,255,255,0.95) 100%)" }} />
                  </div>

                  {/* 텍스트 */}
                  <div style={{ padding:"3.5rem", display:"flex", flexDirection:"column", justifyContent:"center", background:"#FFFFFF" }}>
                    <span style={{ display:"inline-block", background:"#FFE400", color:"#111111", padding:"0.3rem 0.9rem", borderRadius:6, fontSize:"0.75rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"1.5rem" }}>
                      {c.company}
                    </span>
                    <div style={{ fontSize:"0.82rem", color:"#999999", marginBottom:"0.75rem" }}>{c.industry}</div>

                    <blockquote style={{ fontSize:"1rem", lineHeight:1.85, color:"#333333", fontWeight:500, marginBottom:"2rem", paddingLeft:"1.25rem", borderLeft:"3px solid #FFE400" }}>
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>

                    <p style={{ fontSize:"0.9rem", color:"#888888", marginBottom:"2rem" }}>— {c.author}</p>

                    <div style={{ display:"flex", gap:"2rem" }}>
                      {c.kpis.map(k => (
                        <div key={k.label}>
                          <div style={{ fontSize:"1.4rem", fontWeight:900, color:"#111111", lineHeight:1 }}>{k.val}</div>
                          <div style={{ fontSize:"0.78rem", color:"#999999", marginTop:"0.25rem" }}>{k.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 터치 지원 */}
          <div
            style={{ position:"absolute", inset:0, cursor:"grab" }}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX; stopAutoplay(); }}
            onTouchEnd={e => { const diff = touchStartX.current - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); } else { startAutoplay(); } }}
          />
        </div>

        {/* 컨트롤 */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginTop:"2.5rem" }}>
          <button onClick={handlePrev} style={{ width:48, height:48, borderRadius:"50%", background:"#FFFFFF", border:"1px solid rgba(0,0,0,0.1)", color:"#333333", cursor:"pointer", fontSize:"1.2rem", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.25s", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}
            onMouseEnter={e => { e.currentTarget.style.background="#FFE400"; e.currentTarget.style.borderColor="#FFE400"; e.currentTarget.style.color="#111111"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#FFFFFF"; e.currentTarget.style.borderColor="rgba(0,0,0,0.1)"; e.currentTarget.style.color="#333333"; }}
          >←</button>

          <div style={{ display:"flex", gap:"0.5rem" }}>
            {cases.map((_, i) => (
              <button key={i} onClick={() => { stopAutoplay(); goTo(i); startAutoplay(); }}
                style={{ width: i === current ? 24 : 8, height:8, borderRadius:50, background: i === current ? "#FFE400" : "rgba(0,0,0,0.15)", border:"none", cursor:"pointer", transition:"all 0.3s" }}
              />
            ))}
          </div>

          <button onClick={handleNext} style={{ width:48, height:48, borderRadius:"50%", background:"#FFFFFF", border:"1px solid rgba(0,0,0,0.1)", color:"#333333", cursor:"pointer", fontSize:"1.2rem", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.25s", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}
            onMouseEnter={e => { e.currentTarget.style.background="#FFE400"; e.currentTarget.style.borderColor="#FFE400"; e.currentTarget.style.color="#111111"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#FFFFFF"; e.currentTarget.style.borderColor="rgba(0,0,0,0.1)"; e.currentTarget.style.color="#333333"; }}
          >→</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-inner-grid { grid-template-columns: 1fr !important; }
          .case-inner-grid > div:first-child { height: 220px; }
          .case-inner-grid > div:last-child { padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
