import "./CitiesCard.css"

const CitiesCard = ({ name, country, population, image }) => (
  <div className="card">
    <div className="common-city-card">
    <h3>{name}</h3>
    <p>Country: {country}</p>
    <p>Population: {population}</p>
    <img src={image} alt={name} />
  </div>
  </div>
);

export default CitiesCard