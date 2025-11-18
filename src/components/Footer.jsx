import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react"

const LINKEDIN_URL = 'https://www.linkedin.com/in/erdemahsenomer/';
const GITHUB_URL = 'https://github.com/erdemahsen';
const CONTACT_EMAIL = 'mailto:ryun1521@gmail.com'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
    > 
      <div className='footer-links'>
        <a 
          href={LINKEDIN_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FaLinkedin size={24} color='white'/> 
        </a>

        <a 
          href={GITHUB_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FaGithub size={24} color='white'/> 
        </a>

        <a 
          href={CONTACT_EMAIL} 
        >
          <FaEnvelope size={24} color='white'/>
        </a>
      </div>
      
      <p>
        &copy; {currentYear} Ömer Erdem Ahsen Website. All rights reserved.
      </p>
    </motion.footer>
  );
}