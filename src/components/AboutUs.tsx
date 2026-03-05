const stats = [
  { value: "600+", label: "Project Done" },
  { value: "950+", label: "Happy Clients" },
  { value: "30+", label: "Employee" },
];

export function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Decorative icons */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500" />
            {/* Row 2 */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500" />
            {/* Row 3 */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500" />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We generated names based on a multitude of factors and picked the one that resonated with us the most. Our founder first engaged with the blockchain in 2013.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
