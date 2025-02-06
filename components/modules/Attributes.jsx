import React from "react";
import Choice from "../icons/Choice";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Clock from "../icons/Clock";
import styles from "./attributes.module.css";

const Attributes = () => {
  return (
    <section className={styles.container}>
      <h3>Why us?</h3>

      <section className={styles.container_iconWrapper}>

        <div className={styles.icon_wrapper}>
          <Fast />
          <p>Fast</p>
        </div>
        <div className={styles.icon_wrapper}>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div className={styles.icon_wrapper}>
          <Choice />
          <p>Your Choice</p>
        </div>

        <div className={styles.icon_wrapper}>
          <Clock />
          <p>24-7</p>
        </div>

      </section>

    </section>
  );
};

export default Attributes;
