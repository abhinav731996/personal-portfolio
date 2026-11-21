
"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <a href="#home" className={styles.logo} onClick={closeMenu}>
          Abhinav<span>.</span>
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`${styles.navLinks} ${
            menuOpen ? styles.active : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className={styles.hireButton}
            onClick={closeMenu}
          >
            Hire Me <span>↗</span>
          </a>
        </nav>

      </div>
    </header>
  );
}
