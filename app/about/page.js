// app/about/page.js
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.fadeIn}>Know About Us</h1>
      <p className={styles.fadeIn}>
        We’re a new kind of homeownership company that utilizes technology to make home buying faster, easier, and better.
      </p>
      <img src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=" alt="About Us" className={`${styles.aboutImage} ${styles.fadeInImage}`} />

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At Better.com, our mission is to empower people with a simpler, faster, and more transparent way to own a home. 
          We believe in leveraging technology to create an efficient and hassle-free process.
        </p>
      </section>

      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          We envision a future where homeownership is accessible to everyone, and the process is seamless, removing the obstacles
          that traditionally make it complex. We are continuously innovating to improve the homebuying experience for everyone.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <p>
          Our team consists of innovators, technologists, and customer-centric experts. We work relentlessly to make homeownership easier for everyone.
        </p>
      </section>

      <section className={styles.contactForm}>
        <h2>Contact Us</h2>
        <p>Have questions? Fill out the form below, and we'll get back to you shortly.</p>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.inputField} />
          <input type="email" placeholder="Email" className={styles.inputField} />
          <textarea placeholder="Your message" className={styles.textArea}></textarea>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </section>
    </div>
  );
}
