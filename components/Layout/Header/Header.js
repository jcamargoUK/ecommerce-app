import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
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
              earphone
            </Link>
          </li>
        </ul>

        <Image
          className={styles.cart}
          src="/assets/shared/desktop/icon-cart.svg"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
