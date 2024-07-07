import React from "react";
import styles from "./SingleItem.module.css";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = () => {
  const current = useSelector(state => state.shop.currentItem);
  const dispatch = useDispatch();

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <button
          onClick={() => dispatch(addToCart(current.id))}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;