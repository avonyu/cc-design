interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({ title, subtitle, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-semibold mb-2">
          {title}
          {subtitle && <span className="block text-gray-300">{subtitle}</span>}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2">
          {description} <span className="text-orange-400 hover:text-orange-300">Read more.</span>
        </p>
      </div>
    </div>
  );
}