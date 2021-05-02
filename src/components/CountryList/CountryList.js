import React from "react";
import { useHistory } from "react-router-dom";

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
      className="shadow-lg  cursor-pointer text-gray-900 mb-4 sm:max-w-md md:max-w-md xl:max-w-md"
      key={country.name}
      onClick={() => handleClick(country.name)}
    >
      <img
        src={country.flag}
        alt={country.name}
        className="object-cover w-full h-52 md:h-56 "
      />

      <div className="bg-gray-50 dark:bg-mirage-500 text-gray-900 dark:text-gray-200 px-6 pt-6 pb-8 ">
        <h1 className="py-2 font-semibold text-xl">{country.name}</h1>
        <p className="text-sm">
          <strong>Capital: </strong>
          {country.capital}
        </p>
        <p className="text-sm my-1">
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className="text-sm">
          <strong>Population: </strong>
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
};

export default CountryList;
