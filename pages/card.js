import Image from "next/image";

import styles from "../styles/Card.module.sass";

export default function Card({ info, categories }) {
  const cardCategory = categories.find((item) => {
    if (item.id === info.category_id) {
      return true;
    }
  });

  return (
    <div className={styles.card}>
      <Image src={info.image} width={365} height={365} alt="logo" />
      <div className={styles.cardInfo}>
        <div className={styles.cardColl1}>
          <p className={styles.nftTitle}>XSullo Nocturnal Bloom</p>
          <p className={styles.subTitle} style={{ marginTop: "25px" }}>
            {info.id}
          </p>
          <p className={[styles.subTitle, styles.opacity].join(" ")}>
            {cardCategory.name}
          </p>
        </div>

        <div className={styles.cardColl2}>
          <Image
            className={styles.cardIcon}
            src="/assets/icon.svg"
            width={31}
            height={40}
            alt="logo"
          />
          <p
            className={[styles.subTitle, styles.cardColl2].join(" ")}
            style={{ marginTop: "100px" }}
          >
            {info.weight}
          </p>
          <p
            className={[styles.subTitle, styles.opacity, styles.cardColl2].join(
              " "
            )}
          >
            power
          </p>
        </div>
      </div>
      <div className={styles.cardPrice}>
        <p className={styles.priceETH}>000.0000 ETH </p>
        <p className={styles.priceUSDT}>000.000 USDT</p>
      </div>
      <div className={styles.cardButton}>
        <button className={styles.buyButton} type="button">
          BUY NOW{" "}
        </button>

        <button className={styles.infoButton} type="button">
          VIEW INFO{" "}
        </button>
      </div>
    </div>
  );
}
