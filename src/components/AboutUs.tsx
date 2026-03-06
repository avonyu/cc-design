const stats = [
  { value: "600+", label: "Project Done", width: 149 },
  { value: "950+", label: "Happy Clients", width: 160 },
  { value: "30+", label: "Employee", width: 110 },
];

export function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1215px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="hidden lg:block relative w-[546px] h-[331px]">
            {/* Decorative shapes - 3 rows */}
            <div className="absolute grid grid-cols-4 grid-rows-3 gap-4 p-4 w-full h-full">
              {/* Row 1 */}
              <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
              <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />
              <div />
              {/* Row 2 */}
              <div className="rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500" />
              <div className="rounded-lg bg-gradient-to-br from-red-500 to-pink-500" />
              <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
              <div />
              {/* Row 3 */}
              <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500" />
              <div className="rounded-lg bg-gradient-to-br from-rose-500 to-red-500" />
              <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-500" />
              <div />
            </div>
            {/* Large circle decoration */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-60"
              style={{
                width: "55.66%",
                height: "52.4%",
                left: "23.09%",
                top: "0%",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:w-[639px]">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We generated names based on a multitude of factors and picked the one that resonated with us the most. Our founder first engaged with the blockchain in 2013.
            </p>

            {/* Stats Card - Frame 100 */}
            <div className="bg-white rounded-2xl shadow-[0_2px_9px_rgba(239,235,235,0.25)] px-6 py-[18px]">
              <div className="flex items-center">
                {/* Stat 1 */}
                <div className="flex flex-col items-center" style={{ width: 149 }}>
                  <div className="text-2xl font-semibold text-gray-500">
                    {stats[0].label}
                  </div>
                  <div className="text-[40px] font-bold text-[#FF6600] leading-none mt-2">
                    {stats[0].value}
                  </div>
                </div>

                {/* Divider 1 */}
                <div className="w-0 h-20 border-l-2 border-orange-500 mx-4" />

                {/* Stat 2 */}
                <div className="flex flex-col items-center" style={{ width: 160 }}>
                  <div className="text-2xl font-semibold text-gray-500">
                    {stats[1].label}
                  </div>
                  <div className="text-[40px] font-bold text-[#FF6600] leading-none mt-2">
                    {stats[1].value}
                  </div>
                </div>

                {/* Divider 2 */}
                <div className="w-0 h-20 border-l-2 border-orange-500 mx-4" />

                {/* Stat 3 */}
                <div className="flex flex-col items-center" style={{ width: 110 }}>
                  <div className="text-2xl font-semibold text-gray-500">
                    {stats[2].label}
                  </div>
                  <div className="text-[40px] font-bold text-[#FF6600] leading-none mt-2">
                    {stats[2].value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
