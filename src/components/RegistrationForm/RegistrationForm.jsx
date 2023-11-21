import { useState } from "react";
import Input from "../Input";
import CitiesCard from "../CitiesCard"; 
import { v4 as uuidv4 } from "uuid";

import styles from "./registrationForm.module.css";

const DEFAULT_CITIES = [
  {
    name: "San Francisco",
    country: "USA",
    population: "3592294",
    image: "https://picsum.photos/id/84/100/80",
  },
  {
    name: "Kyiv",
    country: "Ukraine",
    population: "2967000",
    image: "https://picsum.photos/id/299/100/80",
  },
  {
    name: "Lisbon",
    country: "Portugal",
    population: "506654",
    image: "https://picsum.photos/id/188/100/80",
  },
  {
    name: "Sofia",
    country: "Bulgaria",
    population: "1355142",
    image: "https://picsum.photos/id/57/100/80",
  },
];

const RegistrationForm = () => {
  const [cities, setCities] = useState(DEFAULT_CITIES);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const onAddCity = async () => {
    const imageUrl = `https://picsum.photos/100/80?random=${Date.now()}`;

    const city = {
      name: cityName,
      country: country,
      population: population,
      image: imageUrl,
      id: uuidv4(),
    };

    setCities([...cities, city]);
    setCityName("");
    setCountry("");
    setPopulation("");
  };

  const onGetCityName = (value) => {
    setCityName(value);
  };

  const onGetCountry = (value) => {
    setCountry(value);
  };

  const onGetPopulation = (value) => {
    setPopulation(value);
  };

  return (
    <div className={styles["common"]}>
      <div className={styles["left-side"]}>
        <Input
          label="City Name: "
          placeholder="Enter City Name"
          onChangeFunction={onGetCityName}
          value={cityName}
        />
        <Input
          label="Country: "
          placeholder="Enter Country"
          onChangeFunction={onGetCountry}
          value={country}
        />
        <Input
          label="Population: "
          placeholder="Enter Population"
          onChangeFunction={onGetPopulation}
          value={population}
        />

        <button
          type="button"
          onClick={onAddCity}
          className={styles["add-city-button"]}
        >
          Add City
        </button>
      </div>
      <div className={styles["right-side"]}>
        <div className={styles["cities-list"]}>
          {cities.map((city, index) => (
            <CitiesCard key={index} {...city} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default RegistrationForm;