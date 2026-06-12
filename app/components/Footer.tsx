"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "3rem 0 2rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1.5rem", marginBottom:"2rem" }}>
          {/* 로고 + 정보 */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.75rem" }}>
              <div style={{ width:28, height:28, background:"#FFE400", borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M4 4H10C11.1 4 12 4.9 12 6V18C12 19.1 11.1 20 10 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#111"/>
                  <path d="M14 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H14C12.9 20 12 19.1 12 18V6C12 4.9 12.9 4 14 4Z" fill="#111" opacity="0.6"/>
                </svg>
              </div>
              <span style={{ fontWeight:800, fontSize:"0.95rem", color:"#fff" }}>
                밀리의서재 <span style={{ background:"#FFE400", color:"#111", padding:"1px 5px", borderRadius:3, fontSize:"0.8rem" }}>B2B</span>
              </span>
            </div>
            <p style={{ fontSize:"0.8rem", color:"#888888", lineHeight:1.7 }}>
              (주)kt 밀리의서재 · 사업자등록번호: 220-88-71580<br/>
              B2B 서비스 문의: <a href="mailto:b2bcs@millie.town" style={{ color:"#BBBBBB" }}>b2bcs@millie.town</a>
            </p>
          </div>

          {/* CTA 버튼 */}
          <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", alignItems:"flex-end" }}>
            <a href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds" target="_blank"
              style={{ padding:"0.7rem 1.5rem", background:"#FFE400", borderRadius:50, fontWeight:700, color:"#111111", fontSize:"0.9rem", transition:"all 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.background="#FFF380"}
              onMouseLeave={e => e.currentTarget.style.background="#FFE400"}
            >도입 문의하기</a>
            <a href="https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds" target="_blank"
              style={{ padding:"0.7rem 1.5rem", background:"transparent", border:"1px solid rgba(255,255,255,0.2)", borderRadius:50, fontWeight:700, color:"#fff", fontSize:"0.9rem", transition:"all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#FFE400"; e.currentTarget.style.color="#FFE400"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; e.currentTarget.style.color="#fff"; }}
            >사업 제휴 문의</a>
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem" }}>
          <span style={{ fontSize:"0.78rem", color:"#666666" }}>© 2026 (주)kt 밀리의서재. All rights reserved.</span>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {["개인정보처리방침", "이용약관", "서비스 소개서"].map(t => (
              <a key={t} href="#" style={{ fontSize:"0.78rem", color:"#666666", transition:"color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#ffffff"}
                onMouseLeave={e => e.currentTarget.style.color="#666666"}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
