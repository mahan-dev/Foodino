import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import styles from "./companies.module.css";

const Companies = () => {
  return (
    <section className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </section>
  );
};

export default Companies;
