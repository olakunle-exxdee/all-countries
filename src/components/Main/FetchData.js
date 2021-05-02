import React, { useState, useEffect } from "react";
import CountryList from "../CountryList/CountryList";

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
    return <div className="bg-gray-50 dark:bg-mirage-900 h-screen"></div>;
  }

  return (
    <>
      <div className="">
        <div className=" mx-8 flex   justify-between sticky items-center flex-col md:flex-row my-4">
          <input
            placeholder="Search Country"
            onChange={(e) => {
              setSearch(e.target.value);
              setFilter("");
            }}
            aria-label="Search Country"
            className="p-3 bg-gray-50 dark:bg-mirage-500 "
          />
          <select
            className="p-3 bg-gray-50 dark:bg-mirage-500 text-gray-500 dark:text-gray-200"
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

        <div className="mx-8 grid md:grid-cols-1 gap-4 lg:grid-cols-3  xl:grid-cols-4 ">
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
