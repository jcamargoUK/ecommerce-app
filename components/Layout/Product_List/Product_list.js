import style from "@/styles/Product_list.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Product_List() {
  return (
    <div className={style.main}>
      <div className={style.product}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          width={200}
          height={200}
          alt="headphones"
        />
        <h2>Headphones</h2>
        <Link className={style.link} href="/">
          Shop
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={10}
            height={10}
            alt="icon arrow right"
          />
        </Link>
      </div>
      <div className={style.product}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          width={200}
          height={200}
          alt="headphones"
        />
        <h2>Speakers</h2>
        <Link className={style.link} href="/">
          Shop
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={10}
            height={10}
            alt="icon arrow right"
          />
        </Link>
      </div>
      <div className={style.product}>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          width={230}
          height={200}
          alt="headphones"
        />
        <h2>Earphones</h2>
        <Link className={style.link} href="/">
          Shop
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={10}
            height={10}
            alt="icon arrow right"
          />
        </Link>
      </div>
    </div>
  );
}
