import { motion } from "motion/react"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Experiences from "./Experiences"

export default function About()
{
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p>I’m a Software Engineer who graduated from METU with a degree in Computer Engineering in 2025. My passion lies in building high-impact applications, with a strong focus on full-stack development, mobile applications, and applied AI.</p>

            <div className="projects-and-left-side">
                <div className="left-side">
                    <Experiences/>
                    <TechStack/>
                </div>
                <Projects/>
            </div>

        </motion.div>
    )
}