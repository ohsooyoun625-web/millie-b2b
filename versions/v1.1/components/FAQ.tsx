"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "최소 계약 인원이 있나요?",
    a: "최소 계약 인원 제한은 없습니다. 소규모 스타트업부터 수천 명 규모의 대기업까지 다양한 규모에 맞춘 맞춤형 요금제를 제공합니다. 인원 규모와 계약 기간에 따라 최대 30% 할인 혜택을 받으실 수 있습니다.",
  },
  {
    q: "계약 기간은 어떻게 되나요?",
    a: "기본 계약은 1년 단위로 진행됩니다. 장기 계약(2년 이상) 시 추가 할인이 적용되며, 단기 파일럿 프로그램도 별도로 운영하고 있습니다. 구체적인 조건은 담당 매니저와 협의 가능합니다.",
  },
  {
    q: "도입까지 얼마나 걸리나요?",
    a: "계약 체결 후 빠르면 당일, 일반적으로 1~3 영업일 이내에 임직원 계정 발급이 완료됩니다. 별도 앱 설치나 시스템 구축 없이 임직원 명단만 제공하시면 즉시 서비스 이용이 가능합니다.",
  },
  {
    q: "면세 혜택이 있나요?",
    a: "네, 밀리의서재 B2B는 도서 구독 서비스로 부가가치세 면세 상품입니다. 법인 비용 처리 시 세금계산서 발급도 가능하여 회계 처리가 간편합니다. 상세 내용은 담당 매니저가 안내드립니다.",
  },
  {
    q: "관리자는 어떤 기능을 사용할 수 있나요?",
    a: "기업 전용 관리자 페이지에서 ▲임직원 계정 관리 ▲실시간 독서 통계 확인 ▲수료 미션·독서 챌린지 설정 ▲기업 전용 책장 운영 ▲월간·연간 독서 리포트 엑셀 다운로드 ▲인기 도서 및 독서 순위 확인 등 다양한 기능을 이용하실 수 있습니다.",
  },
  {
    q: "어떤 기기에서 이용할 수 있나요?",
    a: "iOS(아이폰·아이패드), Android 스마트폰·태블릿, PC(Windows·Mac) 등 모든 기기에서 이용 가능합니다. 하나의 계정으로 최대 5개 기기에 로그인할 수 있으며, 기기를 바꿔도 읽던 위치에서 바로 이어 읽기가 가능합니다.",
  },
  {
    q: "도서 콘텐츠는 얼마나 되나요?",
    a: "현재 24만 권 이상의 전자책과 오디오북을 무제한으로 이용하실 수 있습니다. 베스트셀러 보유 비율은 업계 최다 74%, 신간 입고 속도도 업계 최고 수준입니다. 매월 4,000권 이상의 신규 콘텐츠가 업데이트됩니다.",
  },
  {
    q: "도입 후 운영 지원은 어떻게 받을 수 있나요?",
    a: "전담 고객 매니저가 배정되어 도입부터 운영까지 1:1 맞춤 지원을 제공합니다. 임직원 독서 독려를 위한 사내 캠페인 콘텐츠, 운영 가이드, 정기 운영 리포트도 무상으로 제공합니다. 이메일(b2bcs@millie.town)로도 문의 가능합니다.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }});
    }, { threshold: 0.08 });
    el.querySelectorAll(".reveal").forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} style={{ padding: "9rem 0", background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 2rem" }}>

        {/* 헤더 */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#111111", marginBottom: "1.25rem",
          }}>
            <span style={{ width: 24, height: 2, background: "#FFE400", display: "block" }} />
            자주 묻는 질문
            <span style={{ width: 24, height: 2, background: "#FFE400", display: "block" }} />
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800,
            lineHeight: 1.25, letterSpacing: "-0.03em", color: "#111111",
            marginBottom: "1rem",
          }}>
            도입을 고민 중이신가요?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#666666", lineHeight: 1.8 }}>
            B2B 담당자들이 가장 많이 물어본 질문들을 정리했습니다.
          </p>
        </div>

        {/* FAQ 목록 */}
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                border: `1.5px solid ${open === i ? "rgba(255,228,0,0.6)" : "rgba(0,0,0,0.08)"}`,
                borderRadius: 16,
                background: open === i ? "#FFFEF5" : "#FFFFFF",
                overflow: "hidden",
                transition: "all 0.25s ease",
                boxShadow: open === i ? "0 4px 20px rgba(255,228,0,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* 질문 */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", padding: "1.5rem 1.75rem",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
                  background: "transparent", border: "none", cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flex: 1, minWidth: 0 }}>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: 8,
                    background: open === i ? "#FFE400" : "#F5F5F5",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem", fontWeight: 900, color: "#111111",
                    transition: "background 0.2s",
                  }}>Q</span>
                  <span style={{
                    fontSize: "1rem", fontWeight: 700, color: "#111111", lineHeight: 1.5,
                  }}>{item.q}</span>
                </div>
                <span style={{
                  flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
                  border: "1.5px solid rgba(0,0,0,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", color: "#555555", lineHeight: 1,
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                }}>+</span>
              </button>

              {/* 답변 */}
              <div style={{
                maxHeight: open === i ? 400 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}>
                <div style={{
                  padding: "0 1.75rem 1.75rem",
                  paddingLeft: "calc(1.75rem + 28px + 0.875rem)",
                }}>
                  <p style={{ fontSize: "0.95rem", color: "#555555", lineHeight: 1.85 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="reveal" style={{
          marginTop: "3.5rem", textAlign: "center",
          padding: "2.5rem", borderRadius: 20,
          background: "linear-gradient(135deg, #FFFDE7, #FFFFF0)",
          border: "1.5px solid rgba(255,228,0,0.4)",
        }}>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "#333333", marginBottom: "1.5rem" }}>
            궁금한 점이 더 있으신가요? 담당 매니저가 빠르게 답변드립니다.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds"
              target="_blank"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.85rem 1.75rem", background: "#FFE400",
                borderRadius: 50, fontWeight: 700, color: "#111111",
                fontSize: "0.95rem", transition: "all 0.25s",
                boxShadow: "0 4px 16px rgba(255,228,0,0.4)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background="#FFF380"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#FFE400"; e.currentTarget.style.transform="translateY(0)"; }}
            >📄 소개서 받기</a>
            <a
              href="mailto:b2bcs@millie.town"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.85rem 1.75rem", background: "transparent",
                border: "1.5px solid rgba(0,0,0,0.15)", borderRadius: 50,
                fontWeight: 700, color: "#333333", fontSize: "0.95rem", transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#111111"; e.currentTarget.style.color="#111111"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,0,0,0.15)"; e.currentTarget.style.color="#333333"; }}
            >✉️ 이메일 문의</a>
          </div>
        </div>
      </div>
    </section>
  );
}
