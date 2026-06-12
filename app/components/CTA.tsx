export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              🎁 지금 문의하면 1개월 무료 체험 제공
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              우리 회사에도<br />독서 복지를 시작해보세요
            </h2>
            <p className="text-blue-200 text-lg mb-10">
              담당 매니저가 맞춤 플랜과 견적을 안내드립니다.<br />
              부담 없이 문의하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://share.hsforms.com"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
              >
                무료로 도입 문의하기
              </a>
              <a
                href="https://share.hsforms.com"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-medium px-10 py-4 rounded-xl transition-all text-center"
              >
                사업 제휴 문의하기
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-blue-200">
              <span>✓ 계약 기간 유연 선택</span>
              <span>✓ 전담 매니저 배정</span>
              <span>✓ 무료 체험 제공</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
