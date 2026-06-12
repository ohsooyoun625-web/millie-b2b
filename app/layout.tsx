import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "밀리의서재 B2B | 기업 독서 경영 플랫폼 1위",
  description: "250여 개 기업이 선택한 독서 경영 플랫폼. 22만 권 무제한 열람, B2B 전용 관리자 기능, 맞춤 독서 미션으로 임직원 역량 강화를 시작하세요.",
  openGraph: {
    title: "밀리의서재 B2B | 기업 독서 경영 플랫폼 1위",
    description: "250여 개 기업이 선택한 독서 경영 플랫폼. 22만 권 무제한 열람으로 임직원의 성장을 돕습니다.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
