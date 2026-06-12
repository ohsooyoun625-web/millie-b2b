# v1.1 스냅샷 — 2026-05-28

## 이 버전에 포함된 내용

### 디자인 시스템
- 라이트 테마 전환 완료 (다크 → 화이트 기반)
- 색상: #FFFFFF 주배경, #F7F7F7 보조배경, #111111 텍스트, #FFE400 옐로 액센트
- Stats / Footer 섹션은 다크 유지 (시각적 리듬 대비)

### 핵심 수치 업데이트
- 누적 회원 수: 910만 → 1,000만+
- 보유 도서 수: 22만 → 24만

### Hero 섹션
- 단일 컬럼 센터 레이아웃 (2컬럼 → 960px 센터)
- whiteSpace nowrap + clamp() 폰트로 한 줄 표기
- 서브메시지 추가: "임직원이 가장 오래 쓰는 복지 1위 · 250여 개 기업의 선택"
- CTA: "소개서 받기" / "성공사례집 받기" (콘텐츠 오퍼 전략)
- 모바일 반응형 CSS 클래스 적용 (hero-badge, hero-sub-nowrap, hero-cta-row, hero-stats-row)

### Stats 섹션
- 98% 만족도 출처: "2025년 고객사 설문조사 기준"

### LogoTicker 섹션
- 로고 필터 가시성 향상: brightness(0) opacity(0.25) → opacity(0.5)

### WhyReading 섹션
- Bridge box CTA: "무료 도입 상담 받기" → "소개서 받기"

### FAQ 섹션 (신규)
- 8개 질문 아코디언 컴포넌트
- 최소 계약 인원 / 계약 기간 / 도입 소요시간 / 면세 혜택 / 관리자 기능 / 지원 기기 / 콘텐츠 수 / 운영 지원

### 페이지 구조 (page.tsx)
Header → Hero → LogoTicker → WhyReading → CasesCarousel → Stats → Benefits → Process → FAQ → FinalCTA → Footer
