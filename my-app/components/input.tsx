import type React from "react"
import styles from "./input.module.css"

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return <input className={`${styles.input} ${className}`} {...props} />
}

