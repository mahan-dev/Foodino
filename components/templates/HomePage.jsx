import React from 'react';
import styles from "./homePage.module.css";
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Order from '../modules/Order';
import Guide from '../modules/Guide';
import Restriction from '../modules/Restriction';

const HomePage = () => {
    return (
        <section className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Order />
            <Guide />
            <Restriction />
        </section>
    );
};

export default HomePage;