"use client";

import { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll be in touch shortly.`);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.fadeIn}>Welcome to our website</h1>
        <p className={styles.fadeIn}>Making homeownership simpler, faster, and better.</p>
        <img src="https://img.freepik.com/free-vector/welcome-concept-illustration_114360-27447.jpg" alt="Home Hero" className={`${styles.heroImage} ${styles.fadeInImage}`} />
        
        {/* Call-to-Action Form */}
        <div className={styles.ctaForm}>
          <h2>Start Your Journey</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.inputField}
              required
            />
            <button type="submit" className={styles.submitButton}>Get Started</button>
          </form>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>
        <h2>Why Choose Better.com?</h2>
        <ul>
          <li>No hidden fees or surprises.</li>
          <li>100% online process.</li>
          <li>Pre-approvals in minutes.</li>
          <li>Dedicated support throughout the journey.</li>{/* anushri tiwari */}
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonial}>
          <p>"Better.com made the process of buying a home so easy. I couldn’t believe how fast everything went!"</p>
          <span>- John Doe, Homeowner</span>
        </div>
        <div className={styles.testimonial}>
          <p>"The team was incredibly helpful, and I felt supported at every step."</p>
          <span>- Jane Smith, First-Time Buyer</span>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p> All Rights Reserved by Anushri Tiwari</p>
      </footer>
    </div>
  );
}
