import heroIllustration from "../assets/hero-illustration.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1332px] mx-auto px-5 py-[33px]">
        <div className="flex items-center gap-[105px]">
          {/* Left Content */}
          <div className="max-w-[502px]">
            <h1 className="text-[56px] font-extrabold text-[#2B2B2B] leading-[130%] mb-8">
              Let's take a tour to <span className="text-[#FF6600]">Blockchain</span> Technology
            </h1>
            <p className="text-lg text-[#5B5B5B] leading-[180%] mb-[74px] max-w-[448px]">
              We are highly focused by blockchain technology that will lead positively to the future
              web.
            </p>
            <div className="flex gap-[32px]">
              <button className="w-[208px] h-16 bg-[#FF6600] text-white text-base font-bold rounded-[10px] hover:bg-[#e65c00] transition-colors flex items-center justify-center gap-2">
                Get Started
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-[208px] h-16 border-2 border-[#2B2B2B] text-[#2B2B2B] text-base font-bold rounded-[10px] hover:border-[#FF6600] hover:text-[#FF6600] transition-colors">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-shrink-0">
            <img
              src={heroIllustration}
              alt="Blockchain Illustration"
              className="w-[739px] h-[390px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}