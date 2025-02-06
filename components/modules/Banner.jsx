import React from 'react';
import styles from "./banner.module.css";
import Link from 'next/link';

const Banner = () => {
    return (
        <section className={styles.container}>
            
            <div className={styles.left}>
                <h2>
                    Foodino
                </h2>
                <p>
                    Food Delivery and Takeout
                </p>

                <span>
                    Foodino is an online food ordering and is a great choice for food lovers for tasting new stuffs
                </span>
                <Link href={"/menu"}>
                    See All
                </Link>
            </div>

            <div className={styles.right}>
                <img src="images/banner.png" />
            </div>

        </section>
    );
};

export default Banner;