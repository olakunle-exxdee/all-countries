import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const CountryBOrder = ({ border }) => {
  const [borders, setBorders] = useState([]);

  const history = useHistory();
  const handleClick = (name) => {
    history.push(`/country/${name}`);
  };

  useEffect(() => {
    const fetchBorders = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${border}`
      );
      const data = await response.json();

      setBorders(data);
    };
    fetchBorders();
  }, [border]);

  return (
    <div className="" onClick={() => handleClick(borders.name)}>
      <button className="bg-white border-solid border-2  dark:bg-mirage-500 hover:bg-gray-100 px-8 py-1 my-2  ">
        {borders.name}
      </button>
    </div>
  );
};

export default CountryBOrder;
