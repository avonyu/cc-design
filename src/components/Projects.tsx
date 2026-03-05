import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "Certified Great Expectations Lover",
      description: "To add value to",
      imageUrl: project1,
    },
    {
      title: "BlockSpace - A solar System",
      description: "We built the first ever accurate model of",
      imageUrl: project2,
    },
    {
      title: "0xProxy - A web 3.0 Website",
      description: "This project was a collaborative exercise.",
      imageUrl: project3,
    },
  ];

  return (
    <section id="projects" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[52px] font-extrabold text-[#2B2B2B] text-center mb-[84px]">
          Current Projects
        </h2>
        <div className="flex justify-center gap-[30px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}