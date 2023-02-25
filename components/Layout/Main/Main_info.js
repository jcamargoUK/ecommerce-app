import styles from "@/styles/Home.module.css";
import Header from "../Header/Header";

export default function Main_info() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.info}>
        <h2 className={styles.h2}>NEW PRODUCT</h2>
        <h1 className={styles.h1}>XX99 MARK II HEADPHONES</h1>
        <p className={styles.p}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
    </div>
  );
}
