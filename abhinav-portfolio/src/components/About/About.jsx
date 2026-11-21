
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiCode,
  FiServer,
  FiCloud,
  FiBriefcase,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./About.module.scss";

const expertise = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description: "Modern and responsive web interfaces.",
  },
  {
    icon: <FiServer />,
    title: "Backend Development",
    description: "APIs and scalable backend solutions.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud & Deployment",
    description: "Cloud infrastructure and application deployment.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Section Heading */}

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET TO KNOW ME</span>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-description">
            A little introduction about my journey,
            experience and passion for technology.
          </p>
        </motion.div>

        {/* About Content */}

        <div className={styles.aboutGrid}>

          {/* Profile Image */}

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.imageBox}>
              <Image
                src="/images/profile.png"
                alt="Abhinav Sharma - Software Developer"
                fill
                priority={false}
                sizes="(max-width: 767px) 100vw, 400px"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.imageDecoration}></div>

            <div className={styles.imageBadge}>
              <span></span>
              Software Developer
            </div>
          </motion.div>

          {/* About Text */}

          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3>
              Turning Ideas Into
              <span> Digital Solutions.</span>
            </h3>

            <p>
              I'm Abhinav Sharma, a Software Developer at
              Indixpert Technologies, passionate about building
              modern web applications and scalable backend
              solutions.
            </p>

            <p>
              My development journey includes working with
              technologies like React.js, Next.js, JavaScript,
              Python and FastAPI. I also work with Google Cloud
              to deploy and manage modern applications.
            </p>

            <p>
              I enjoy learning new technologies, solving
              real-world problems and creating digital
              experiences that deliver value to businesses.
            </p>

            {/* Expertise */}

            <div className={styles.expertiseGrid}>
              {expertise.map((item, index) => (
                <div
                  className={styles.expertiseCard}
                  key={index}
                >
                  <div className={styles.expertiseIcon}>
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Button */}

            <a
              href="/resume.pdf"
              download="Abhinav_Sharma_Resume.pdf"
              className={styles.resumeButton}
            >
              Download Resume
              <FiDownload />
            </a>

          </motion.div>
        </div>

        {/* Experience */}

        <Experience />

      </div>
    </section>
  );
}

function Experience() {
  return (
    <motion.div
      className={styles.experience}
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.experienceHeading}>
        <span className="section-label">
          MY PROFESSIONAL JOURNEY
        </span>

        <h3>Experience</h3>
      </div>

      <div className={styles.experienceCard}>

        <div className={styles.companyIcon}>
          <FiBriefcase />
        </div>

        <div className={styles.experienceDetails}>
          <h4>Software Developer</h4>

          <p className={styles.company}>
            Indixpert Technologies
          </p>

          <p className={styles.location}>
            Gurugram, Haryana, India
          </p>

          <p className={styles.experienceDescription}>
            Working on modern application development,
            backend solutions and cloud deployment.
            Focused on building reliable and scalable
            software applications.
          </p>
        </div>

        <span className={styles.currentBadge}>
          Current
        </span>

      </div>
    </motion.div>
  );
}
