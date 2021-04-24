import React, { useState, useEffect } from "react";
import CountryList from "../CountryList/CountryList";

import "./fetchdata.css";

const FetchData = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const [countryList, setCountryList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCountryList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="container-md">
        <div className="input-group">
          <input
            placeholder="Search Country"
            onChange={(e) => {
              setSearch(e.target.value);
              setFilter("");
            }}
            aria-label="Search Country"
            className="p-3"
          />
          <select
            className="p-3"
            onChange={(e) => {
              setSearch("");
              setFilter(e.target.value);
            }}
          >
            <option value="">Filter By Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className="row">
          {countryList.map((country) => {
            return (
              <CountryList
                key={country.name}
                country={country}
                search={search}
                filter={filter}
                loading={loading}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
