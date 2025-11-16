import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { SiAppstore } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function ProjectCard({ project }) {
  const { image, title, description, links } = project;

  return (
    <motion.div 
      className="card"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -3}}
    >
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
      
      <div className="card-links">
        {links.website && (
        <a href={links.website} target="_blank" rel="noopener noreferrer">
            <TbWorld size={32} color="white"  />
        </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="white"  />
          </a>
        )}
        {links.googlePlay && (
          <a href={links.googlePlay} target="_blank" rel="noopener noreferrer">
            <SiGoogleplay size={32} color="white"  />
          </a>
        )}
        {links.appStore && (
          <a href={links.appStore} target="_blank" rel="noopener noreferrer">
            <SiAppstore size={32} color="white" />
          </a>
        )}
      </div>
    </motion.div>
  );
}