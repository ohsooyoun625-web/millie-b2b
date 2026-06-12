"use client";
import Image from "next/image";

const logos = [
  { src: "/images/logos/hyundai-mobis.png", name: "현대모비스" },
  { src: "/images/logos/celltrion.png",     name: "셀트리온" },
  { src: "/images/logos/lg.png",            name: "LG전자" },
  { src: "/images/logos/samsung-life.png",  name: "삼성생명" },
  { src: "/images/logos/mirae-asset.png",   name: "미래에셋증권" },
  { src: "/images/logos/bnk.png",           name: "BNK경남은행" },
  { src: "/images/logos/kt.png",            name: "KT" },
  { src: "/images/logos/hanwha.png",        name: "한화에어로스페이스" },
  { src: "/images/logos/hd-hyundai.png",    name: "HD현대중공업" },
  { src: "/images/logos/nh.png",            name: "NH농협생명" },
  { src: "/images/logos/lig.png",           name: "LIG넥스원" },
  { src: "/images/logos/genie.png",         name: "지니뮤직" },
  { src: "/images/logos/kcc.png",           name: "KCC" },
  { src: "/images/logos/lotte-chem.png",    name: "롯데케미칼" },
  { src: "/images/logos/bok.png",           name: "한국은행" },
  { src: "/images/logos/kdb.png",           name: "KDB산업은행" },
];

function LogoItem({ logo }: { logo: { src: string; name: string } }) {
  return (
    <div style={{ flexShrink: 0, height: 36, display: "flex", alignItems: "center" }}>
      <Image
        src={logo.src}
        alt={logo.name}
        width={120}
        height={28}
        unoptimized
        style={{ height: 28, width: "auto", maxWidth: 120, objectFit: "contain", filter: "grayscale(100%) opacity(0.5)", transition: "filter 0.3s" }}
        onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0%) opacity(1)")}
        onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(100%) opacity(0.5)")}
      />
    </div>
  );
}

export default function LogoTicker() {
  const doubled = [...logos, ...logos];

  return (
    <section style={{
      background: "#F7F7F7", padding: "4rem 0",
      overflow: "hidden",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span style={{
          fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#111111",
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
        }}>
          <span style={{ display: "block", width: 24, height: 2, background: "#FFE400" }} />
          250여 개 파트너사
          <span style={{ display: "block", width: 24, height: 2, background: "#FFE400" }} />
        </span>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, background:"linear-gradient(to right, #F7F7F7, transparent)", zIndex:10, pointerEvents:"none" }} />
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, background:"linear-gradient(to left, #F7F7F7, transparent)", zIndex:10, pointerEvents:"none" }} />

        <div style={{ display: "flex" }}>
          <div className="ticker-track" style={{ gap: "3.5rem", alignItems: "center" }}>
            {doubled.map((logo, i) => <LogoItem key={i} logo={logo} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
