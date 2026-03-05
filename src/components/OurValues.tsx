import ourValuesIllustration from "../assets/our-values-illustration.png";

export function OurValues() {
  return (
    <section id="values" className="py-[100px] bg-white">
      <div className="max-w-[1197px] mx-auto px-5 flex items-center gap-[68px]">
        <div className="flex-shrink-0">
          <img
            src={ourValuesIllustration}
            alt="Our Values Illustration"
            className="w-[514px] h-auto"
          />
        </div>
        <div className="max-w-[614px]">
          <h2 className="text-[52px] font-extrabold text-[#2B2B2B] leading-[130%] mb-[35px]">
            Our Values
          </h2>
          <p className="text-xl text-[#5B5B5B] leading-[180%] mb-[35px]">
            anftw is a hallmark. The team members may change, but the quality of our project
            execution will not. An outstanding team can build a product in any industry. Don't be
            intimidated by incumbents.
          </p>
          <button className="w-[161px] h-[54px] bg-[#FF6600] text-white text-lg font-semibold rounded-lg hover:bg-[#e65c00] transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}