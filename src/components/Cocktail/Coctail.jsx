import Card from "../Card";
import { useState, useEffect } from 'react';
import QueryLoader from "../QueryLoader";

const Cocktail = () => {
    const [cocktails, setCocktails] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);
  
    useEffect(() => {
      setFetching(true);
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(response => response.json())
        .then(resp => {
          setCocktails(resp.drinks);
          setFetching(false);
        })
        .catch(err => {
          console.log('err => ', err);
          setFetching(false);
          setFetchError(err);
        });
    }, []);
  
    return (
      <>
        <QueryLoader fetching={fetching} error={fetchError}>
          {cocktails.map((item, index) => {
            const { strDrink, strDrinkThumb, idDrink } = item;
            return (
              <Card
                key={index}
                strDrink={strDrink}
                strDrinkThumb={strDrinkThumb}
                idDrink={idDrink}
              />
            );
          })}
        </QueryLoader>
      </>
    );
  };

export default Cocktail;