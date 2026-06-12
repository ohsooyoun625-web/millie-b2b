"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#why-reading", label: "도입 이유" },
    { href: "#cases",       label: "고객 사례" },
    { href: "#benefits",    label: "핵심 기능" },
    { href: "#process",     label: "도입 절차" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "0.6rem 0" : "1rem 0",
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px) saturate(180%)",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
    }}>
      {/* 스크롤 진행 바 */}
      <div style={{ position:"absolute", bottom:0, left:0, height:2, background:"#FFE400", width:`${progress}%`, transition:"width 0.1s linear", zIndex:1001 }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* 로고 */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ width: 32, height: 32, background: "#FFE400", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M4 4H10C11.1 4 12 4.9 12 6V18C12 19.1 11.1 20 10 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#111"/>
              <path d="M14 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H14C12.9 20 12 19.1 12 18V6C12 4.9 12.9 4 14 4Z" fill="#111" opacity="0.5"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: "1rem", color: "#111111" }}>
            밀리의서재 <span style={{ color: "#111111", background: "#FFE400", padding: "1px 6px", borderRadius: 4, fontSize: "0.85rem" }}>B2B</span>
          </span>
        </a>

        {/* 데스크탑 Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.9rem", color: "#555555", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#111111")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555555")}
            >{l.label}</a>
          ))}
          <a href="https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds" target="_blank"
            style={{ padding: "0.6rem 1.2rem", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50, fontSize: "0.85rem", color: "#333333", fontWeight: 700, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#111111"; e.currentTarget.style.color = "#111111"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)"; e.currentTarget.style.color = "#333333"; }}
          >사업 제휴 문의</a>
          <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
            style={{ padding: "0.7rem 1.5rem", background: "#FFE400", borderRadius: 50, fontSize: "0.9rem", color: "#111111", fontWeight: 700, transition: "all 0.25s", boxShadow: "0 2px 12px rgba(255,228,0,0.4)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#FFF380"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#FFE400"; e.currentTarget.style.transform = "translateY(0)"; }}
          >도입 문의하기 →</a>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8 }}
          className="show-mobile"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: "#111111", borderRadius: 2, transition: "all 0.2s" }} />
          ))}
        </button>
      </div>

      {/* 모바일 드로어 */}
      {menuOpen && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.08)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: "1rem", color: "#333333", fontWeight: 600 }}>{l.label}</a>
          ))}
          <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
            onClick={() => setMenuOpen(false)}
            style={{ padding: "0.875rem", background: "#FFE400", borderRadius: 12, textAlign: "center", fontWeight: 700, color: "#111111", fontSize: "1rem" }}
          >도입 문의하기 →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
