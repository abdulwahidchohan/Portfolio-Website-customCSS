"use client"

import { motion } from "framer-motion"
import styles from "./animated-header.module.css"

export default function AnimatedHeader() {
  return (
    <motion.h1
      className={styles.animatedHeader}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Abdul Wahid Chohan
    </motion.h1>
  )
}

