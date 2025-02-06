import Link from "next/link";
import Dollar from "../icons/Dollar";
import styles from "./card.module.css";
import Location from "../icons/Location";

const Card = ({ data }) => {
  
  const {
    id,
    price,
    name,
    discount,
    details: [{ Cuisine }],
  } = data;

  return (
    <section className={styles.containerCard}>
      <img src={`images/${id}.jpeg`} alt="" />
      <div className={styles.detail}>
        <p>{name}</p>
        <div className={styles.cardLocation}>
          <Location />
          <p style={{ fontSize: "0.7rem" }}>{Cuisine}</p>
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {
            discount ? (
                <span className={styles.discount}>
                    {price * (100- discount) /100}$ 
                </span>
            ) : <span>{price}$</span>
        }
      </div>
      <Link href={`/menu/${id}`}>Detail</Link>
      {
        discount > 0 && ( <span className={styles.discountBadge}> {`${discount}%`} </span> )
      }
    </section>
  ); 
};

export default Card;
