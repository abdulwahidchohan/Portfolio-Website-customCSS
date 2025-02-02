import type React from "react"
import styles from "./button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

