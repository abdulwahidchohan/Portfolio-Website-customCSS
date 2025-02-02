import type React from "react"
import styles from "./card.module.css"

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.cardHeader} ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h3 className={`${styles.cardTitle} ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.cardContent} ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} {...props}>
      {children}
    </div>
  )
}

