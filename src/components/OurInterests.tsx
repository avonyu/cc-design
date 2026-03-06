import { LinkIcon, StarIcon, CheckCircleIcon } from "./icons";

export function OurInterests() {
  const interests = [
    {
      title: "Blockchain product",
      description:
        "Create something novel that has never been done on the blockchain before Build a product",
      icon: LinkIcon,
      iconBg: "bg-[#FFEDD6]",
      iconColor: "text-[#FF6600]",
    },
    {
      title: "Quality product",
      description:
        "Create something novel that has never been done on the blockchain before Build a product",
      icon: StarIcon,
      iconBg: "bg-[#FFE1E9]",
      iconColor: "text-[#FD346E]",
    },
    {
      title: "Viable product",
      description:
        "Create something novel that has never been done on the blockchain before Build a product",
      icon: CheckCircleIcon,
      iconBg: "bg-[#DBF9ED]",
      iconColor: "text-[#0CD68A]",
    },
  ];

  return (
    <section id="our-interests" className="py-20 bg-white">
      <div className="max-w-[1197px] mx-auto px-5">
        <h2 className="text-[52px] font-extrabold text-[#2B2B2B] text-center mb-6">
          Our Interests
        </h2>
        <p className="text-xl text-[#5B5B5B] text-center leading-[180%] max-w-[765px] mx-auto mb-[68px]">
          It's the norm these days to lay out a roadmap that gives stakeholders an indication of the
          direction that the project aspires to go. Inspired by Elon Musk's 2006 masterplan, these
          are our skeleton ambitions.
        </p>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="w-[350px] h-[386px] bg-white rounded-xl p-10 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <div
                className={`w-[70px] h-[70px] rounded-lg ${interest.iconBg} flex items-center justify-center mb-6`}
              >
                <interest.icon className={`w-8 h-8 ${interest.iconColor}`} />
              </div>
              <h3 className="text-[28px] font-bold text-[#2B2B2B] mb-4">{interest.title}</h3>
              <p className="text-lg text-[#5B5B5B] leading-[180%] flex-grow">
                {interest.description}
              </p>
              <button className="text-lg font-semibold text-[#FF6600] text-left mt-5 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}