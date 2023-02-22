import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.navBarContainer}>
        <h1 className={styles.h1}>audiophile</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/product">
              headphones
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/product">
              speakers
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/product">
              earphones
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.paragraphGroup}>
          <p className={styles.footerParagraph}>
            Audiophile is an all in one stop to fulfill your audio needs. We`re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.footerLastParagraph}>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={styles.footerLogos}>
          <Image
            src="/assets/shared/desktop/icon-facebook.svg"
            width={25}
            height={25}
            alt="facebook-logo"
          />
          <Image
            src="/assets/shared/desktop/icon-twitter.svg"
            width={25}
            height={25}
            alt="twitter-logo"
          />
          <Image
            src="/assets/shared/desktop/icon-instagram.svg"
            width={25}
            height={25}
            alt="instagram-logo"
          />
        </div>
      </div>
    </div>
  );
}
