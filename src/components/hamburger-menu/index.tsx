"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.line}></span>
      </button>

      {/* Full Screen Menu */}
      <div
        className={`w-full ${styles.fullScreenMenu} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div className={`w-6/12 h-full ${styles.menu}`}>
          <div className={styles.menuNav}>
            <div className={styles.menuNavItem}>
              <p className={styles.menuNavLabel}>
                <span>Restaurants</span>
              </p>
            </div>
          </div>
        </div>
        <div className={`w-6/12 h-full ${styles.menuImages}`}></div>
      </div>
    </>
  );
}
