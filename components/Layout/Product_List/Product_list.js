import style from "@/styles/Product_list.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Product_List() {
  return (
    <div className={style.main}>
      <div className={style.product}>
        <Image
          src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          width={200}
          height={200}
          alt="headphones"
        />
        <h2>Headphones</h2>
        <Link className={style.link} href="/">
          
          Shop 
          <Image
          src='/assets/shared/desktop/icon-arrow-right.svg'
          width={10}
          height={10}
          alt='icon arrow right'
          />
        </Link>
      </div>
      <div className={style.product}>
        <Image
          src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          width={200}
          height={200} 
          alt="headphones"
        />
        <h2>Headphones</h2>
        <Link className={style.link} href="/">
          Shop
          <Image
          src='/assets/shared/desktop/icon-arrow-right.svg'
          width={10}
          height={10}
          alt='icon arrow right'
          />
        </Link>
      </div>
      <div className={style.product}>
        <Image
          src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
          width={200}
          height={200}
          alt="headphones"
        />
        <h2>Headphones</h2>
        <Link className={style.link} href="/">
          Shop
          <Image
          src='/assets/shared/desktop/icon-arrow-right.svg'
          width={10}
          height={10}
          alt='icon arrow right'
          />
        </Link>
      </div>
    </div>
  );
}
