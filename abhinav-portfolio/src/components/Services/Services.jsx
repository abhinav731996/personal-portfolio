
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { services } from "@/data/services";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className={styles.services} id="services">
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
            WHAT I CAN DO FOR YOU
          </span>

          <h2 className="section-title">
            My <span>Services</span>
          </h2>

          <p className="section-description">
            I help businesses and startups turn their ideas
            into reliable digital solutions through modern
            development technologies.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className={styles.servicesGrid}>

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className={styles.serviceCard}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
              >

                <div className={styles.cardTop}>
                  <div className={styles.serviceIcon}>
                    <Icon />
                  </div>

                  <span className={styles.serviceNumber}>
                    {service.id}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className={styles.description}>
                  {service.description}
                </p>

                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={styles.serviceLink}
                  aria-label={`Discuss ${service.title} project`}
                >
                  Discuss Your Project
                  <FiArrowUpRight />
                </a>

              </motion.article>
            );
          })}

        </div>

        {/* CTA Banner */}

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div>
            <span>HAVE A PROJECT IN MIND?</span>

            <h3>
              Let's Build Something
              <br />
              <strong>Great Together.</strong>
            </h3>

            <p>
              Have an idea? Let's discuss how I can help
              bring it to life.
            </p>
          </div>

          <a href="#contact">
            Start a Conversation
            <FiArrowUpRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
