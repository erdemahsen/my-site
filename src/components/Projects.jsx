import ProjectCard from "./ProjectCard"
import { projectsData } from "../projectsData"
import { motion } from "motion/react"

export default function Projects() {
  return (
    <motion.div 
      className="projects-list"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}