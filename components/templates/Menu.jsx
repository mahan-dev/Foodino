import styles from "./Menu.module.css";
import Card from "../modules/Card";

const Menu = ({ data }) => {
  return (
    <section className={styles.container}>
      <h3>Menu</h3>
      <section className={styles.containerCard}>
        {data.map((food) => (
          <Card key={food.id} data={food} />
        ))}
      </section>
    </section>
  );
};

export default Menu;
