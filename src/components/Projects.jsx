import ProjectCard from "./ProjectCard"
import { projectsData } from "../projectsData"

export default function Projects() {
  return (
    <div className="projects-list">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}