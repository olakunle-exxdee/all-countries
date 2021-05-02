import React from "react";
import CountryBorder from "./CountryBorder";

const DetailedCountry = ({ country }) => {
  return (
    <div className="my-4 grid gap-x-12 md:grid-cols-2 items-stretch h-screen ">
      <div className=" ">
        <img src={country.flag} alt={country.name} className="" />
      </div>
      <div className="text-gray-500 dark:text-gray-200 ">
        <h2 className="font-bold text-xl my-4 md:text-2xl">{country.name}</h2>
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

        <div className="borders">
          <p>
            <strong>Border Countries: </strong>
          </p>
        </div>
        <div className="my-4 md:flex flex-wrap gap-x-4">
          {country.borders.map((border) => {
            return <CountryBorder key={border} border={border} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedCountry;
