import React from "react";
import { useHistory } from "react-router-dom";

import "./CountryList.css";

const CountryList = ({ country, search, filter }) => {
  const history = useHistory();

  const handleClick = (name) => {
    history.push(`/country/${name}`);
  };
  if (
    search !== "" &&
    country.name.toLowerCase().indexOf(search.toLowerCase()) === -1
  ) {
    return null;
  }

  if (filter !== "" && country.region.indexOf(filter) === -1) {
    return null;
  }

  return (
    <div
      className="col-sm-6  col-lg-4 .col-xl-6 country-list"
      key={country.name}
      onClick={() => handleClick(country.name)}
    >
      <section key={country.name} className="single-country">
        <div className="single-country-wrapper">
          <div className="single-country-image">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="single-country-details">
            <h2>{country.name}</h2>
            <p>
              <strong>Capital: </strong>
              {country.capital}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Population: </strong>
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryList;
