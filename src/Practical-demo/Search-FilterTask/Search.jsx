import React from "react";

const Search = ({ search, handleSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="filter products"
        value={search}
        onChange={handleSearch}
        className="form-control bg-light"
      />
    </>
  );
};

export default Search;