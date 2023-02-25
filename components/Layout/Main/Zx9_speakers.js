import style from "@/styles/Zx9_speakers.module.css";
import Image from "next/image";

export default function Zx9_speakers() {
  return (
    <div className={style.main}>
      <Image
        src="/assets/home/desktop/pattern-circles.svg"
        alt="logo"
        width={520}
        height={520}
      />
      <h1>hey</h1>
    </div>
  );
}
