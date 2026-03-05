import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="max-w-[1332px] mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-4xl lg:text-[56px] font-extrabold leading-tight text-[#2b2b2b] mb-6">
              Let's take a tour to{" "}
              <span className="text-[#ff6600]">Blockchain</span>{" "}
              Technology
            </h1>
            <p className="text-lg text-[#5b5b5b] leading-relaxed mb-10 max-w-[448px]">
              We are highly focused by blockchain technology that will lead positively to the future web.
            </p>
            <div className="flex flex-wrap gap-8">
              <button className="h-16 px-6 bg-[#ff6600] text-white font-bold text-base rounded-[10px] hover:bg-[#e65c00] transition-colors flex items-center justify-center gap-2 min-w-[208px]">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-16 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] font-bold text-base rounded-[10px] hover:border-[#ff6600] hover:text-[#ff6600] transition-colors min-w-[208px]">
                Learn more
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[739px]">
            <div className="aspect-[739/390] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9d5ff] via-[#426bff] to-[#2d57f0] rounded-3xl opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#ff6600] to-[#fda74c] rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-[#5b5b5b] text-sm">Blockchain Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}