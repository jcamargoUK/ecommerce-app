import styles from "@/styles/Home.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.main}> 
      <div className={styles.info}>
        <h2 className={styles.h2}>NEW PRODUCT</h2>
        <h1 className={styles.h1}>XX99 MARK II HEADPHONES</h1>
        <p className={styles.p}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      </div>
      <div className={styles.image}>
        <Image
        src='/assets/home/desktop/hero.jpeg'
        width={250}
        height={500}
        alt='XX99 MARK II HEADPHONES'
        />
      </div>
    </div>
  );
}
