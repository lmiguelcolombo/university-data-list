import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function UniversitySearch() {
  const [universities, setUniversities] = useState([]);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const searchUniversities = async (name, country) => {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?name=${name}&country=${country}`
    );
    setUniversities(response.data);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUniversities(name, country);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Search Universities</label>
          <input
            type="text"
            id="name"
            className="inputBox"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div>
          <label htmlFor="country">Search Country</label>
          <input
            type="text"
            id="country"
            className="inputBox"
            value={country}
            onChange={handleChangeCountry}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default UniversitySearch;
