# 밀리의서재 B2B 랜딩페이지 — 작업 이관 가이드

> 이 문서는 Claude Code에서 작업을 이어받는 동료를 위한 온보딩 가이드입니다.

---

## 프로젝트 개요

밀리의서재 B2B 도입 기업 대상 랜딩페이지 프로토타입.
Next.js 기반 마케팅 페이지로, HubSpot 폼 연동 CTA를 포함합니다.

- **목적**: B2B 잠재 고객의 소개서/성공사례집 신청 유도
- **현재 버전**: v1.1
- **GitHub**: https://github.com/hawkhaha04/millie-b2b (private)

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | Next.js 16.2 (App Router, Turbopack) |
| 언어 | TypeScript |
| CSS | Tailwind CSS v4 + inline styles |
| 폰트 | Pretendard (CDN) |
| 프로세스 관리 | PM2 (항상 실행 유지) |
| 배포 예정 | Vercel (GitHub 연동, 사무실에서 1회 설정 필요) |

---

## 로컬 개발 환경

```bash
# 서버 상태 확인 (PM2로 항상 실행 중)
pm2 list

# 서버가 꺼져 있으면 복구
pm2 resurrect

# 또는 직접 시작
cd C:\Users\User\WORKSPACE\millie-b2b
pm2 start ecosystem.config.js
```

### 접속 URL

| 환경 | URL |
|---|---|
| 로컬 (작업 PC) | http://localhost:3000 |
| 사내망 공유 | http://rio-12-39:3000 |
| 외부 배포 예정 | Vercel (설정 후 고정 URL 생성) |

---

## 디렉토리 구조

```
millie-b2b/
├── app/
│   ├── page.tsx              ← 섹션 순서 정의 (여기서 추가/제거)
│   ├── globals.css           ← 디자인 토큰, 애니메이션
│   ├── layout.tsx
│   └── components/
│       ├── Header.tsx        ← 네비게이션, 스크롤 진행바
│       ├── Hero.tsx          ← 메인 헤드라인, CTA
│       ├── LogoTicker.tsx    ← 파트너사 로고 롤링 띠
│       ├── WhyReading.tsx    ← 독서 경영 3가지 이유
│       ├── CasesCarousel.tsx ← 고객사 성공 사례 캐러셀
│       ├── Stats.tsx         ← 숫자 강조 (다크 섹션)
│       ├── Benefits.tsx      ← 핵심 기능 탭 (4개)
│       ├── Process.tsx       ← 도입 프로세스 5단계
│       ├── FAQ.tsx           ← 자주 묻는 질문 아코디언
│       ├── FinalCTA.tsx      ← 마지막 행동 유도
│       └── Footer.tsx        ← 푸터 (다크 섹션)
├── public/
│   └── images/
│       ├── app/              ← 앱 스크린샷 (Benefits 탭에 사용)
│       ├── logos/            ← 파트너사 로고 PNG
│       └── cases/            ← 고객사 사례 이미지
├── versions/
│   └── v1.1/                 ← 현재 버전 스냅샷 (참고용)
├── ecosystem.config.js       ← PM2 설정
├── start-dev.js              ← PM2 Windows 래퍼
├── deploy.bat                ← 배포 스크립트 (더블클릭)
└── ONBOARDING.md             ← 이 파일
```

---

## 디자인 시스템

### 색상 원칙
```
#FFFFFF  주배경 (Hero, WhyReading, Benefits, FAQ)
#F7F7F7  보조배경 (LogoTicker, Process)
#111111  기본 텍스트
#FFE400  옐로 액센트 — 반드시 배경으로만 사용 (텍스트 X, 대비 1.17:1 불통)
#0D0D0D  다크 섹션 배경 (Stats, Footer — 의도적 시각 대비)
```

### 애니메이션
- `.reveal` 클래스 + IntersectionObserver → 스크롤 시 fade-up
- `.stagger-1~4` → 순차 딜레이 (0.1~0.4s)
- 각 섹션 컴포넌트 내 `useEffect`에서 직접 설정

---

## 페이지 섹션 순서

```
Header (고정 상단 네비)
  ↓
Hero          — 헤드라인 + 서브메시지 + CTA
  ↓
LogoTicker    — 파트너사 로고 롤링
  ↓
WhyReading    — 독서 경영 3가지 이유
  ↓
CasesCarousel — 고객 성공 사례 (3개)
  ↓
Stats         — 핵심 수치 카운트업 (다크)
  ↓
Benefits      — 핵심 기능 탭 (4개)
  ↓
Process       — 도입 5단계 + 활용 유형
  ↓
FAQ           — 아코디언 Q&A (8개)
  ↓
FinalCTA      — 최종 행동 유도
  ↓
Footer        — 회사 정보 (다크)
```

---

## CTA 링크 (HubSpot 폼)

| 버튼명 | URL |
|---|---|
| 📄 소개서 받기 | https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds |
| 📊 성공사례집 받기 | https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds |
| 도입 문의하기 | https://share-na2.hsforms.com/1vS4WVefOT6iAAcgxJFqkvQsqxds |
| 사업 제휴 문의 | https://share.hsforms.com/1DNnFJyVWSfm5ke4AYGnMnQsqxds |

---

## 핵심 수치 (Stats 섹션)

```
1,000만+  누적 회원 수
24만+     보유 도서 수
250+      도입 기업 수
98%       이용 만족도 (2025년 고객사 설문조사 기준)
```

---

## 업데이트 배포 방법

```
1. 코드 수정 후 deploy.bat 더블클릭
2. 커밋 메시지 입력 → 엔터
3. GitHub push → Vercel 자동 배포 (1~2분)
```

> ⚠️ Vercel 연동은 사무실 PC에서 vercel.com에 GitHub 계정으로 로그인 후 1회 설정 필요

---

## 완료된 작업 (v1.1)

- [x] 라이트 테마 전환 (다크 → 화이트 기반)
- [x] 핵심 수치 업데이트 (1,000만+, 24만)
- [x] Hero 단일 컬럼 레이아웃 + 서브메시지
- [x] CTA 콘텐츠 오퍼 전략 ("소개서 받기" / "성공사례집 받기")
- [x] Stats 98% 출처 표기 (2025년 고객사 설문조사)
- [x] 로고 가시성 개선 (opacity 0.25 → 0.5)
- [x] FAQ 섹션 신규 추가 (8개 질문)
- [x] 모바일 반응형 CSS
- [x] PM2 자동 재시작 설정
- [x] GitHub 저장소 (hawkhaha04/millie-b2b)
- [x] 버전 스냅샷 (versions/v1.1/)

## 남은 작업

- [ ] Vercel 배포 연동 (사무실에서 1회 설정)
- [ ] 파트너사 로고 실제 이미지로 교체 (현재 placeholder)
- [ ] CasesCarousel 실제 고객사 이미지/인터뷰 보강
- [ ] OG 태그 / SEO 메타데이터 추가
- [ ] Google Analytics 또는 HubSpot 트래킹 스크립트 연동

---

## 참고 링크

- 서비스 레퍼런스: https://www.millie.co.kr
- HubSpot 폼 관리: HubSpot 계정 > 마케팅 > 양식
- 문의 이메일: b2bcs@millie.town
