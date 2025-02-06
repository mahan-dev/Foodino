import { useEffect, useState } from "react";
import styles from "./category.module.css";
import { useRouter } from "next/router";
import Card from "../modules/Card";



const Category = ({data}) => {
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const router = useRouter();

 const loadQuery = ()=> {
  const {difficulty , time} = router.query;
  if (query.difficulty !== difficulty || query.time !== time){
    setQuery({difficulty, time})
  }

 }

 useEffect(()=> {
  loadQuery()

 }, [])
  

  const changeHandler = (e) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target;

    if (eventName === "difficulty") {
      setQuery({ ...query, [eventName]: eventValue });
    } else if (eventName === "time") {
      setQuery({ ...query, [eventName]: eventValue });
    }
  };

  const searchHandler = ()=>{
    router.push({pathname:"/categories", query})
  }

  return (
    <section className={styles.container}>
      <section className={styles.category_container}>
        <h3> Categories </h3>
        <div className={styles.category}>
          <select
            name="difficulty"
            id=""
            value={query.difficulty}
            onChange={changeHandler}
          >
            <option disabled value="">
              Difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <select name="time" id="" value={query.time} onChange={changeHandler}>
            <option value="" disabled>
              Cooking Time
            </option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>

          <button onClick={searchHandler} >Search</button>

        </div>
      </section>

      <section className={styles.containerCard}>
        {
          !data.length && (
            <img src="./images/search.png" alt="" />
          )
        }
        {
          data.map((item)=> <Card data={item} key={item.id} /> )
        }
      </section>
    </section>
  );
};

export default Category;
