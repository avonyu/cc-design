import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Certified Great Expectations Lover",
    description: "Certified Great Expectations Lover - To add value to",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    title: "BlockSpace -",
    subtitle: "A solar System",
    description: "BlockSpace - We built the first ever accurate model of",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
  },
  {
    title: "0xProxy - A web 3.0 Website",
    description: "0xProxy - A web 3.0 Website for the decentralized future",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
];

export function CurrentProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Current Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}