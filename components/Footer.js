"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} bg-gray-900`}>
      <div className={styles.container}>
        <div className={styles.join}>
          <h2 className={styles.logo}>AA Digital Labs</h2>
          <p className={styles.description}>
            Office Address: 30 N. Gould St. Ste R, Sheridan, WY 82801, USA
          </p>
          <div className={styles.contactContainer}>
            <div className={styles.email}>
              <p className={styles.info}>Email us at</p>
              <p className={styles.address}>info@aadigitallabs.com</p>
            </div>
            <div className={styles.phone}>
              <p className={styles.info}>Call us at</p>
              <p className={styles.address}>+1 (307) 200-2803</p>
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <h2 className={styles.submitTitle}>Let&apos;s Book Appointment!</h2>
          <p className={styles.submitDescription}>
            Ready to boost your online presence? Contact us today and let&apos;s
            start amplifying your brand&apos;s digital footprint together!
          </p>
          <div className={styles.icons}>
            <ion-icon name={"logo-facebook"}></ion-icon>
            <ion-icon name={"logo-twitter"}></ion-icon>
            <ion-icon name={"logo-instagram"}></ion-icon>
            <ion-icon name={"logo-linkedin"}></ion-icon>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; Copyright 2024</p>
          <ul className={styles.footerLinks}>
            <li className={styles.link}>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#about"} className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#services"} className={styles.link}>
                Services
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#contact"} className={styles.link}>
                Contact
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#solutions"} className={styles.link}>
                Top Solutions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
