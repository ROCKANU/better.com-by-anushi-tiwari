"use client";

import Navbar from './components/Navbar';
import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Better.com </title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="content">
          {children}
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Better.com | All Rights Reserved</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100008540594058" target="_blank" rel="noopener noreferrer">
                <img src="C:\Users\ANUGYA\assisment\app\fffff.jpg" alt="Facebook" />
              </a>
              
              <a href="https://www.instagram.com/anushritiwari40/" target="_blank" rel="noopener noreferrer">
                <img src="C:\Users\ANUGYA\assisment\app\facebook-icon.avif" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/anushritiwari/" target="_blank" rel="noopener noreferrer">
                <img src="C:\Users\ANUGYA\assisment\app\LinkedIn_logo.png" alt="Linkdin" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
