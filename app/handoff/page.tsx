export default function HandoffPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#F7F7F7",
      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "3rem 1.5rem",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* 헤더 */}
        <div style={{
          background: "#111111",
          borderRadius: 20,
          padding: "2.5rem",
          marginBottom: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(255,228,0,0.15) 0%, transparent 70%)",
          }} />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "#FFE400", color: "#111111",
            padding: "0.3rem 0.85rem", borderRadius: 50,
            fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.06em",
            marginBottom: "1.25rem",
          }}>
            🏢 밀리의서재 B2B
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "1.6rem", fontWeight: 900, lineHeight: 1.3, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
            밀리 B2B 홈페이지<br />작업 이관 안내
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>
            팀원이 로컬에서 바로 이어 작업할 수 있도록 순서대로 따라 주세요.
          </p>
        </div>

        {/* 준비물 */}
        <Section title="준비물" icon="📦">
          <Item
            label="millie-b2b_handoff.zip"
            desc="첨부 파일로 전달된 프로젝트 패키지"
            badge="첨부"
          />
          <Item
            label="Node.js LTS"
            desc="nodejs.org에서 LTS 버전 다운로드 후 설치"
            badge="설치 필요"
            badgeColor="#E8F4FF"
            badgeTextColor="#1A6FBB"
          />
        </Section>

        {/* 스텝 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <StepCard
            step={1}
            title="Claude Code 설치"
            desc={<>claude.ai/code 접속 → 다운로드 후 설치</>}
          />
          <StepCard
            step={2}
            title="프로젝트 압축 해제"
            desc="받은 zip 파일을 원하는 위치에 압축 해제"
          />
          <StepCard
            step={3}
            title="패키지 설치"
            desc="압축 푼 폴더 안에서 터미널을 열고 아래 명령어 입력"
            code="npm install"
            tip={<>터미널 여는 법: 폴더 안 빈 곳에서 <Kbd>Shift</Kbd> + 우클릭 → "여기서 PowerShell 창 열기"</>}
          />
          <StepCard
            step={4}
            title="Claude Code로 폴더 열기"
            desc={<>Claude Code 실행 → <Code>Open Folder</Code> → 압축 푼 폴더 선택</>}
          />
          <StepCard
            step={5}
            title="개발 서버 실행"
            desc="Claude Code 하단 터미널에서 입력:"
            code="npm run dev"
            tip={<>브라우저에서 <Code>http://localhost:3000</Code> 접속하면 페이지 확인 가능</>}
          />
          <StepCard
            step={6}
            title="Claude에게 작업 이어달라고 요청"
            desc="Claude Code 채팅창에 이렇게 입력하면 됩니다:"
            quote="이전 작업 이어서 해줘"
            tip="CLAUDE.md 파일이 있어서 Claude가 프로젝트 맥락을 자동으로 파악합니다."
            highlight
          />
        </div>

        {/* 푸터 */}
        <div style={{
          marginTop: "2rem",
          padding: "1.5rem 2rem",
          background: "#FFFFFF",
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>문제가 생기면 연락주세요!</p>
            <p style={{ fontSize: "0.82rem", color: "#888888" }}>b2bcs@millie.town</p>
          </div>
          <div style={{
            background: "#FFE400", color: "#111111",
            padding: "0.6rem 1.25rem", borderRadius: 50,
            fontSize: "0.82rem", fontWeight: 800,
          }}>
            밀리의서재 B2B팀
          </div>
        </div>

      </div>
    </main>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.07)",
      padding: "1.5rem",
      marginBottom: "1rem",
    }}>
      <p style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.1em", color: "#888888", textTransform: "uppercase", marginBottom: "1rem" }}>
        {icon} {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}

function Item({ label, desc, badge, badgeColor = "#FFF8CC", badgeTextColor = "#7A6000" }: {
  label: string; desc: string; badge: string; badgeColor?: string; badgeTextColor?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
      <div>
        <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#111111", marginBottom: "0.2rem" }}>{label}</p>
        <p style={{ fontSize: "0.82rem", color: "#888888" }}>{desc}</p>
      </div>
      <span style={{
        background: badgeColor, color: badgeTextColor,
        padding: "0.25rem 0.75rem", borderRadius: 50,
        fontSize: "0.72rem", fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0,
      }}>{badge}</span>
    </div>
  );
}

function StepCard({ step, title, desc, code, tip, quote, highlight }: {
  step: number;
  title: string;
  desc: React.ReactNode;
  code?: string;
  tip?: React.ReactNode;
  quote?: string;
  highlight?: boolean;
}) {
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: 16,
      border: highlight ? "2px solid #FFE400" : "1px solid rgba(0,0,0,0.07)",
      padding: "1.5rem",
      boxShadow: highlight ? "0 4px 20px rgba(255,228,0,0.2)" : "none",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: highlight ? "#FFE400" : "#111111",
          color: highlight ? "#111111" : "#FFFFFF",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.85rem", fontWeight: 900,
        }}>
          {step}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", fontWeight: 800, color: "#111111", marginBottom: "0.4rem" }}>{title}</p>
          <p style={{ fontSize: "0.88rem", color: "#555555", lineHeight: 1.7 }}>{desc}</p>
          {code && (
            <div style={{
              background: "#111111", color: "#FFE400",
              borderRadius: 10, padding: "0.7rem 1.1rem",
              fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700,
              marginTop: "0.75rem", letterSpacing: "0.04em",
            }}>
              {code}
            </div>
          )}
          {quote && (
            <div style={{
              background: "#F7F7F7",
              borderLeft: "3px solid #FFE400",
              borderRadius: "0 10px 10px 0",
              padding: "0.75rem 1rem",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#333333",
              marginTop: "0.75rem",
            }}>
              &ldquo;{quote}&rdquo;
            </div>
          )}
          {tip && (
            <p style={{ fontSize: "0.8rem", color: "#999999", marginTop: "0.6rem", lineHeight: 1.6 }}>
              💡 {tip}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      background: "#F0F0F0", color: "#111111",
      padding: "0.1rem 0.4rem", borderRadius: 5,
      fontFamily: "monospace", fontSize: "0.88em", fontWeight: 700,
    }}>{children}</code>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd style={{
      background: "#EEEEEE", color: "#333333",
      padding: "0.1rem 0.45rem", borderRadius: 5,
      fontSize: "0.85em", fontWeight: 700, fontFamily: "inherit",
      border: "1px solid rgba(0,0,0,0.15)",
    }}>{children}</kbd>
  );
}
