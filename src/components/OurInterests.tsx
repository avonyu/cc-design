export function OurInterests() {
  const interests = [
    {
      title: "Web3 & Blockchain",
      description: "Building decentralized applications and exploring the future of the internet.",
    },
    {
      title: "AI & Machine Learning",
      description: "Leveraging AI to create intelligent solutions for complex problems.",
    },
    {
      title: "Space Exploration",
      description: "Creating tools and visualizations for space enthusiasts and researchers.",
    },
    {
      title: "Open Source",
      description: "Contributing to and building open source projects for the community.",
    },
  ];

  return (
    <section id="our-interests" className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-lg text-gray-500 mb-4 max-w-3xl">
          It's the norm these days to lay out a roadmap that gives stakeholders an indication of the
          direction that the project aspires to go. Inspired by Elon Musk's 2006 masterplan, these
          are our skeleton ambitions.
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Our Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {interests.map((interest, index) => (
            <div key={index} className="group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <span className="text-2xl font-bold text-orange-500 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{interest.title}</h3>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}