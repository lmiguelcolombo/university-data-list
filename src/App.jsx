import React, { useState } from "react";
import "./App.css";

function UniversitySearch() {
  const [universities, setUniversities] = useState([]);

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
