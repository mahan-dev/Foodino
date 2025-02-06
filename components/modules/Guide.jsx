import React from 'react';
import styles from "./guide.module.css";
import Link from 'next/link';

const Guid = () => {
    return (
        <section className={styles.container}>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/menu"}>Discount</Link>
        </section>
    );
};

export default Guid;