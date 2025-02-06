import React from "react";
import styles from "./cardDetail.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const CardDetail = ({ food }) => {
  const {
    name,
    id,
    price,
    discount,
    recipe,
    details,
    introduction,
    ingredients,
  } = food;

  return (
    <section className={styles.container}>
      <h3>Details</h3>
      <div className={styles.cardContainer}>
        <img src={`../images/${id}.jpeg`} alt={name} />
        <div className={styles.details}>
          <p> {name} </p>
          <div className={styles.location}>
            <Location />
            <span>{details[0].Cuisine}</span>
          </div>

          <div className={styles.priceContainer}>
            <Dollar />
            {discount ? (
              <span className={styles.discount}>
                <span className={styles.price}>{price}$</span>{" "}
                {(price * (100 - discount)) / 100}$
              </span>
            ) : (
              <span> {price}$ </span>
            )}
          </div>
          {discount ? (
            <span className={styles.priceOff}>{discount}% OFF</span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.introduction}>
        <p>{introduction}</p>
      </div>

      <section className={styles.food_detail}>
      <h3 >Details</h3>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <p>{Object.keys(detail)[0]}:</p>
              <span> {Object.values(detail)[0]} </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.ingredient}> 
      <h3>ingredients</h3>
      <ul>
        {
          ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>{ingredient}</span>
            </li>
          ))
        }
      </ul>
      </section>

      <section className={styles.recipe}>
        <h3>Recipe</h3>
        <ul>
          {
            recipe.map((recipe, index)=> (
              <li key={index} className={index % 2 ? styles.even : styles.odd} >
                <span>{index + 1}</span>
                <p>{recipe}</p>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
};

export default CardDetail;
