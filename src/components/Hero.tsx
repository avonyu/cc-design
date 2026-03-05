import { Rocket, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Exploring the Future</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Building the
              <span className="text-orange-500"> Future</span>
              <br />
              Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
              We're a team of innovators, creators, and builders passionate about bringing ideas to
              life through technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 mx-auto mb-8 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-500 text-lg">Hero Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}