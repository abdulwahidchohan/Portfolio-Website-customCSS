"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download, Instagram, Github, Menu } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import TechStack from "./components/tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedHeader from "./components/animated-header";
import { Reveal } from "./components/reveal";
import Education from "./components/education";
import Certifications from "./components/certifications";
import styles from "./page.module.css";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              <Link href="/" className={styles.logo}>
                <span>Abdul Wahid Chohan</span>
              </Link>
            </div>
            <nav className={styles.desktopNav}>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#education">Education</Link>
              <Link href="#certifications">Certifications</Link>
              <Link href="#contact">Contact</Link>
            </nav>
            <div className={styles.headerActions}>
              <ThemeToggle />
              <Button variant="outline" className={styles.resumeButton}>
                <a href="/Abdul Wahid.pdf" download>
                  <Download className={styles.icon} /> Resume
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className={styles.icon} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className={styles.mobileMenuBackdrop} 
            onClick={() => setIsMenuOpen(false)} 
          />
        )}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="#education" onClick={() => setIsMenuOpen(false)}>Education</Link>
            <Link href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>

        <main className={styles.main}>
          <section id="about" className={styles.section}>
            <div className={styles.sectionContent}>
              <div className={styles.aboutContent}>
                <Reveal>
                  <AnimatedHeader />
                </Reveal>
                <Reveal>
                  <p className={styles.aboutText}>
                  Hi, I&rsquo;sm Abdul Wahid Chohan a passionate Web 3 developer, AI enthusiast, and robotics innovator. With expertise in Next.js, TypeScript, and Tailwind CSS, I build scalable, future-ready digital solutions. Whether it's decentralization, intelligent automation, or cutting-edge web experiences, I thrive on turning ideas into reality. Let’s push the boundaries of technology together!
                  </p>
                </Reveal>
                <Reveal>
                  <div className={styles.socialLinks}>
                    <Link href="https://www.linkedin.com/in/abdul-wahid-chohan" target="_blank">
                      <Button variant="outline" size="icon" className={styles.socialButton}>
                        <Linkedin className={styles.icon} />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://www.instagram.com/abdulwahidchohan138/" target="_blank">
                      <Button variant="outline" size="icon" className={styles.socialButton}>
                        <Instagram className={styles.icon} />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link href="https://github.com/abdulwahidchohan" target="_blank">
                      <Button variant="outline" size="icon" className={styles.socialButton}>
                        <Github className={styles.icon} />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="mailto:aw4532350@gmail.com">
                      <Button variant="outline" size="icon" className={styles.socialButton}>
                        <Mail className={styles.icon} />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="skills" className={styles.section}>
            <div className={styles.sectionContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Skills</h2>
              </Reveal>
              <Reveal>
                <TechStack />
              </Reveal>
            </div>
          </section>

          <section id="education" className={styles.section}>
            <div className={styles.sectionContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Education</h2>
              </Reveal>
              <Reveal>
                <Education />
              </Reveal>
            </div>
          </section>

          <section id="certifications" className={styles.section}>
            <div className={styles.sectionContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Certifications</h2>
              </Reveal>
              <Reveal>
                <Certifications />
              </Reveal>
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <div className={styles.sectionContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Get in Touch</h2>
              </Reveal>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.copyright}>© 2024 Abdul Wahid Chohan. All rights reserved.</p>
            <nav className={styles.footerNav}>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#education">Education</Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}