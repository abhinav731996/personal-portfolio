
"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { skillCategories } from "@/data/skills";

import styles from "./Skills.module.scss";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>

        {/* Section Heading */}

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            MY TECH STACK
          </span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build modern,
            responsive and scalable digital solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}

        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {skillCategories.map((category) => (
            <motion.div
              className={styles.categoryCard}
              variants={cardVariants}
              key={category.id}
            >

              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <FiCode />
                </div>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className={styles.technologyList}>
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className={styles.skillItem}
                      key={skill.name}
                    >
                      <Icon />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          ))}

        </motion.div>

        <p className={styles.bottomText}>
          Continuously learning, building and exploring
          new technologies.
        </p>

      </div>
    </section>
  );
}
