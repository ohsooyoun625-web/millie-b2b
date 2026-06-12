const features = [
  {
    icon: "📚",
    title: "22만 권 무제한 열람",
    subtitle: "국내 최대 전자책 라이브러리",
    desc: "매월 3,000권 이상 신간 업데이트. 베스트셀러부터 전문서적까지 장르 제한 없이 무제한으로 열람할 수 있습니다.",
    tags: ["전자책", "오디오북", "PDF"],
  },
  {
    icon: "🏆",
    title: "검증된 서비스 품질",
    subtitle: "수상 이력으로 증명된 신뢰",
    desc: "2019 구글 플레이 올해의 앱, 디지털경영혁신대상 수상. 국내 전자책 플랫폼 1위의 콘텐츠와 기술력을 그대로.",
    tags: ["앱스토어 1위", "수상 이력", "5년 운영"],
  },
  {
    icon: "🎧",
    title: "오디오북 & 큐레이션",
    subtitle: "이동 중에도 독서를 이어서",
    desc: "전문 성우가 녹음한 오디오북과 AI 큐레이션으로 임직원 각자에게 맞는 책을 추천해 독서 참여율을 높입니다.",
    tags: ["오디오북", "AI 추천", "맞춤 큐레이션"],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">WHY MILLIE B2B</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            기업이 밀리를 선택하는 이유
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            단순한 책 구독이 아닌, 기업 문화를 바꾸는 독서 복지 플랫폼
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-gray-50 hover:bg-blue-50 rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <div className="text-xs font-medium text-blue-600 mb-1">{f.subtitle}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white text-gray-600 border border-gray-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
