import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DetailedCountry from "./DetailedCountry";

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
    return <div className="bg-gray-50 dark:bg-mirage-900 container"></div>;
  }
  return (
    <div className="mx-8">
      <div className="back" onClick={handleClick}>
        <button className="bg-white border-solid border-2 text-mirage-500 dark:text-mirage-100 hover:bg-gray-100 dark:bg-mirage-500 px-8 py-1 my-2 ">
          Back
        </button>
      </div>
      <div className="">
        {country.map((each) => {
          return <DetailedCountry key={each.name} country={each} />;
        })}
      </div>
    </div>
  );
};

export default Country;
