"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://www.creativehatti.com/wp-content/uploads/2023/11/Indian-woman-journalist-sitting-on-chair-and-wearing-microphone-Small-size.jpg" alt="Better.com Logo" className={styles.logoImage} />
        <h1>Better.com</h1>
      </div>

      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
        <li><Link href="/">Home</Link></li>  
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/mortgage-calculator">Mortgage Calculator</Link></li>
        <li><Link href="/start">Get Started</Link></li>
      </ul>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
}
