"use client";

import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={term} />
        <button className="btn btn-primary btn-sm">Search</button>
      </form>
    </div>
  );
};
