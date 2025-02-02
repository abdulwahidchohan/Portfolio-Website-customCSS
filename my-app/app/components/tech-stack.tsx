"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import styles from "./tech-stack.module.css"

const technologies = [
  {
    category: "Graphic Tools",
    skills: ["Photoshop", "Illustrator", "Canva", "Lightroom"],
  },
  {
    category: "Analytical Tools",
    skills: ["Power BI", "Tableau", "Advanced Excel"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "TypeScript", "R", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Database",
    skills: ["MS Access"],
  },
  {
    category: "Core Competencies",
    skills: [
      "Communication",
      "Teamwork",
      "Responsibility",
      "Leadership",
      "Decision-making",
      "Creative Thinking",
      "Analytical Abilities",
      "Digital Literacy",
      "Organizational Skills",
      "Management Skills",
    ],
  },
  {
    category: "Presentation Skills",
    skills: ["Spoke at Kashmir Freedom", "Spoke at School Problems"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Professional Communication & Networking",
      "Personal Branding & Interview Communication",
      "Critical Thinking & Problem Solving",
      "Time Management",
    ],
  },
]

export default function TechStack() {
  return (
    <div className={styles.techStackGrid}>
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={styles.techCard}>
            <CardContent>
              <h3 className={styles.techCategory}>{tech.category}</h3>
              <div className={styles.skillsWrapper}>
                {tech.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

