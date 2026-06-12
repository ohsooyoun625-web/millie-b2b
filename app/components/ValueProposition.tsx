const useCases = [
  { icon: "🎓", label: "신입사원 온보딩" },
  { icon: "📈", label: "승진자 리더십 교육" },
  { icon: "📖", label: "사내 독서 모임" },
  { icon: "🧠", label: "직무 역량 강화" },
  { icon: "🌱", label: "자기계발 지원" },
  { icon: "🤝", label: "팀 빌딩 프로그램" },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 좌측 텍스트 */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">ZERO COST START</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              초기 구축 비용 없이,<br />
              <span className="text-blue-600">기업 복지를 만들다</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              별도 시스템 구축이나 IT 인프라 투자 없이 바로 시작할 수 있습니다.
              관리자 대시보드로 임직원의 독서 현황을 한눈에 파악하고, 부서별 맞춤 운영이 가능합니다.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {useCases.map((u) => (
                <div key={u.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <span className="text-xl">{u.icon}</span>
                  <span className="text-sm text-gray-700 font-medium">{u.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</span>
              최소 계약 인원 제한 없음
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</span>
              전담 CS 매니저 배정
            </div>
          </div>

          {/* 우측 대시보드 목업 */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">관리자 대시보드</h3>
                <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">● 실시간</span>
              </div>

              {/* 스탯 카드 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "등록 직원", value: "248명" },
                  { label: "월 활성 유저", value: "183명" },
                  { label: "활성화율", value: "73.8%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-blue-50 rounded-xl p-3 text-center">
                    <div className="font-bold text-blue-700 text-lg">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* 도서 랭킹 */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-500 mb-3">이번 달 인기 도서 TOP 3</div>
                {[
                  { rank: 1, title: "초격차", author: "권오현", reads: 42 },
                  { rank: 2, title: "아주 작은 습관의 힘", author: "제임스 클리어", reads: 38 },
                  { rank: 3, title: "그릿", author: "앤절라 더크워스", reads: 31 },
                ].map((book) => (
                  <div key={book.rank} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <span className="text-xs font-bold text-gray-400 w-4">{book.rank}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">{book.title}</div>
                      <div className="text-xs text-gray-400">{book.author}</div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">{book.reads}명</span>
                  </div>
                ))}
              </div>

              <button className="w-full text-sm text-blue-600 text-center py-2 hover:bg-blue-50 rounded-lg transition-colors">
                전체 리포트 보기 →
              </button>
            </div>

            {/* 플로팅 배지 */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
              📊 월간 리포트 자동 발송
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
