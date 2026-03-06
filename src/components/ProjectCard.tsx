interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="w-[380px] h-[590px] flex flex-col">
      <div className="w-[380px] h-[378px] bg-white overflow-hidden flex-shrink-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow pt-8">
        <h3 className="text-[28px] font-semibold text-[#2B2B2B] leading-[150%] mb-6">{title}</h3>
        <p className="text-xl text-[#5B5B5B] leading-[180%]">
          {description}{" "}
          <span className="text-[#FF6600] font-semibold cursor-pointer hover:underline">
            Read more.
          </span>
        </p>
      </div>
    </div>
  );
}