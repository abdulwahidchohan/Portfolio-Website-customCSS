import type React from "react"
import styles from "./textarea.module.css"

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => {
  return <textarea className={`${styles.textarea} ${className}`} {...props} />
}

