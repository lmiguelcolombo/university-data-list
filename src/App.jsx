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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Domains</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, k) => (
            <tr key={k}>
              <td>
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {university.name}
                </a>
              </td>
              <td>{university.country}</td>
              <td>
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {university.domains}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UniversitySearch;
