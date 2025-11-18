import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {FaFlutter} from "react-icons/fa6"
import { SiOpenai, SiTypescript, SiJavascript, SiFirebase, SiPostgresql, SiDjango } from "react-icons/si";
import {motion} from "motion/react"

export default function TechStack() {
  const tech = [
    { name: "React", icon: <FaReact size={48} /> },
    { name: "Flutter", icon: <FaFlutter size={48} /> },
    { name: "Django", icon: <SiDjango size={48} /> },
    { name: "LLMs / AI", icon: <SiOpenai size={48} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
    { name: "Git", icon: <FaGitAlt size={48} /> }
  ];

  return (

    <motion.div 
      className="techstack"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      <h2>Tech Stack</h2>
        <div className="techstack-list">
            {tech.map((t) => (
            <motion.div
                key={t.name}
                className="techstack-item"
                whileHover={{ y: 0, scale:1.03}}
            >
                <div >{t.icon}</div>
                <p >{t.name}</p>
            </motion.div>
            ))}
        </div>
    </motion.div>
    
  );
}
