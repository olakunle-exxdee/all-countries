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
    <div className="border-group" onClick={() => handleClick(borders.name)}>
      <button className="border-btn">{borders.name}</button>
    </div>
  );
};

export default CountryBOrder;
