"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import styles from "./contact-form.module.css"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [pending, setPending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(data)
      if (response.success) {
        alert("Thanks for your message! I'll get back to you soon.")
        reset()
      } else {
        throw new Error(response.message || "Something went wrong")
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className={styles.formCard}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Input id="name" {...register("name")} className={styles.input} />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Input id="email" type="email" {...register("email")} className={styles.input} />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <Textarea id="message" {...register("message")} className={styles.textarea} />
          {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
        </div>
        <Button type="submit" className={styles.submitButton} disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  )
}

