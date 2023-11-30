import styles from "./card.module.css";


const Card = ({ strDrink, strDrinkThumb, idDrink }) => {
    return (
      <div className={styles['card']}>
        <h3>{strDrink}</h3>
        <img src={strDrinkThumb} alt="img" />
      </div>
    );
  };  

export default Card;