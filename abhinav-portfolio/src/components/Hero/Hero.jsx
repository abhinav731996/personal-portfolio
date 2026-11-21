
"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiCloud,
  FiServer,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className={styles.availability}>
            <span className={styles.dot}></span>
            OPEN TO FREELANCE PROJECTS
          </div>

          <p className={styles.intro}>
            HELLO, I'M ABHINAV SHARMA
          </p>

          <h1>
            Building Digital
            <br />
            Experiences That
            <br />
            <span>Make an Impact.</span>
          </h1>

          <p className={styles.description}>
            I'm a Full Stack & Cloud Developer focused on
            building modern web applications, scalable backend
            systems and reliable cloud-powered solutions.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryButton}>
              Explore My Work <FiArrowUpRight />
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              Let's Talk
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>

        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className={styles.glow}></div>

          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.windowDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>developer.js</span>
            </div>

            <div className={styles.codeContent}>
              <p><span>const</span> developer = {"{"}</p>
              <p className={styles.indent}>
                name: <span>"Abhinav Sharma"</span>,
              </p>
              <p className={styles.indent}>
                role: <span>"Full Stack Developer"</span>,
              </p>
              <p className={styles.indent}>
                frontend: <span>"Next.js, React"</span>,
              </p>
              <p className={styles.indent}>
                backend: <span>"Python, FastAPI"</span>,
              </p>
              <p className={styles.indent}>
                cloud: <span>"Google Cloud"</span>,
              </p>
              <p className={styles.indent}>
                passion: <span>"Building Solutions"</span>
              </p>
              <p>{"};"}</p>
            </div>

            <div className={styles.techCards}>
              <div><FiCode /> Frontend</div>
              <div><FiServer /> Backend</div>
              <div><FiCloud /> Cloud</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

