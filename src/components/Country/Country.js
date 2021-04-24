import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import DetailedCountry from "./DetailedCountry";
import "./country.css";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  useEffect(() => {
    async function fetchSingleCountry() {
      setLoading(true);
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${id}`
      );
      const data = await response.json();
      setCountry(data);
      setLoading(false);
    }
    fetchSingleCountry();
  }, [id]);
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div className=" container country">
      <div className="back" onClick={handleClick}>
        <button className="btn">Back</button>
      </div>
      <div className="detailed-country-wrappper ">
        {country.map((each) => {
          return <DetailedCountry key={each.name} country={each} />;
        })}
      </div>
    </div>
  );
};

export default Country;
