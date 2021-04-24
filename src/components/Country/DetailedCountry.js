import React from "react";
import CountryBorder from "./CountryBorder";
import "./country.css";

const DetailedCountry = ({ country }) => {
  return (
    <div className="detailed-country">
      <div className="detailed-country-image ">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="detailed-country-content ">
        <h2>{country.name}</h2>

        <p>
          <strong>Native Name: </strong>
          {country.nativeName}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Sub-Region: </strong>
          {country.subregion}
        </p>
        <p>
          <strong>Population: </strong>
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <div className="lang">
          {country.languages.map((language) => {
            return (
              <p key={language.name}>
                <strong>Language: </strong>
                {language ? language.name : ""}
              </p>
            );
          })}
        </div>
        <div className="borders">
          <p>
            <strong>Border Countries: </strong>
          </p>
        </div>
        <div className="border-wrapper">
          {country.borders.map((border) => {
            return <CountryBorder key={border} border={border} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedCountry;
