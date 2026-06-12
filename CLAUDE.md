@AGENTS.md

# millie-b2b — 밀리의서재 B2B 랜딩페이지

## 프로젝트 개요
밀리의서재 B2B 기업 고객 대상 랜딩페이지. 기업 구독 서비스 영업·전환을 목적으로 함.

## 기술 스택
- **Next.js 16.2.6** + **TypeScript** + **Tailwind CSS 4**
- React 19 (App Router 방식)
- 빌드: `npm run build` / 개발: `npm run dev` (포트 3000)

> ⚠️ Next.js 16은 기존 버전과 API·파일구조가 다름. 코드 작성 전 AGENTS.md 확인 필수.

## 디렉토리 구조
```
app/
├── layout.tsx          # 루트 레이아웃
├── page.tsx            # 홈페이지 (섹션 조립)
├── globals.css
├── favicon.ico
└── components/         # 섹션 단위 컴포넌트
    ├── Header.tsx
    ├── Hero.tsx
    ├── LogoTicker.tsx
    ├── WhyReading.tsx
    ├── CasesCarousel.tsx
    ├── Stats.tsx
    ├── Benefits.tsx
    ├── Process.tsx
    ├── FAQ.tsx
    ├── FinalCTA.tsx
    └── Footer.tsx
versions/
└── v1.1/               # 이전 버전 백업
```

## 페이지 섹션 순서
Header → Hero → LogoTicker → WhyReading → CasesCarousel → Stats → Benefits → Process → FAQ → FinalCTA → Footer

## 작업 규칙
- 컴포넌트는 반드시 `app/components/` 에 위치
- 스타일은 Tailwind CSS 유틸리티 클래스 사용 (별도 CSS 파일 금지)
- TypeScript strict 모드 — 타입 누락 금지
- 새 버전 작업 전 현재 상태를 `versions/` 에 백업
- 커밋 전 `npm run lint` 통과 확인

## 자주 쓰는 명령어
```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 브랜드 가이드
- 서비스명: **밀리의서재** (줄여서 '밀리')
- B2B 타깃: 기업 HR·복지 담당자
- 톤앤매너: 신뢰감 있고 전문적, 과도한 마케팅 표현 지양
