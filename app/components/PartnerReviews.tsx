const reviews = [
  {
    company: "금호타이어",
    industry: "제조업",
    name: "신상현 대리",
    avatar: "신",
    color: "bg-orange-500",
    quote: "밀리의서재 B2B 덕분에 임직원들의 자기계발 의지가 눈에 띄게 높아졌습니다. 라이프스타일 전반에 변화를 줄 수 있는 서비스라고 생각합니다.",
    stats: "도입 후 독서량 3배 증가",
  },
  {
    company: "푸르덴셜생명",
    industry: "금융/보험",
    name: "김시연 수석",
    avatar: "김",
    color: "bg-blue-500",
    quote: "모바일 환경에서 간편하게 이용할 수 있다는 점과 오디오북이 특히 좋았습니다. 출퇴근 시간을 독서 시간으로 활용하는 직원들이 많아졌어요.",
    stats: "임직원 만족도 92점",
  },
  {
    company: "서울예술대학교",
    industry: "교육기관",
    name: "김종훈 직원",
    avatar: "김",
    color: "bg-purple-500",
    quote: "기존에는 원하는 책을 신청하고 대기해야 했는데, 이제는 즉시 열람이 가능해 교직원들의 반응이 매우 좋습니다.",
    stats: "대기 시간 제로, 만족도 급상승",
  },
  {
    company: "CJ올리브영",
    industry: "유통/리테일",
    name: "박지현 매니저",
    avatar: "박",
    color: "bg-green-500",
    quote: "신입 온보딩 프로그램에 도입하여 업무 관련 도서를 큐레이션해 제공합니다. 신입 사원들이 빠르게 업무에 적응하는 데 도움이 됩니다.",
    stats: "온보딩 만족도 1위 혜택",
  },
];

const logos = ["금호타이어", "푸르덴셜생명", "서울예술대학교", "CJ올리브영", "삼성물산", "현대자동차", "LG화학", "롯데"];

export default function PartnerReviews() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">PARTNERS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            100여 곳의 기업이<br />밀리 B2B와 함께합니다
          </h2>
          <p className="text-gray-500 text-lg">규모와 업종에 상관없이, 모든 기업에 맞는 독서 복지를 제공합니다</p>
        </div>

        {/* 로고 스크롤 배너 */}
        <div className="overflow-hidden mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-8 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl px-6 py-3 text-sm font-semibold text-gray-500 whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* 리뷰 카드 그리드 */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.company} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{r.company}</div>
                  <div className="text-sm text-gray-500">{r.name} · {r.industry}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  📈 {r.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
