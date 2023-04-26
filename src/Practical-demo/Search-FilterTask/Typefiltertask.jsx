import React, { useEffect, useState } from "react";
import Search from "../Search-FilterTask/Search";
import Products from "../Search-FilterTask/Products";
import { JSON } from "../ProductJson";
const Typefiltertask = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([JSON]);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const SearchProducts = (search) => (a) =>
    a.title.toLowerCase().includes(search) ||
    a.description.toLowerCase().includes(search) ||
    a.category.toLowerCase().includes(search);

  return (
    <>
      <h1 className="text-center bg-dark text-white py-2">
        Filter Search Task
      </h1>

      <div className="container">
        <Search search={search} handleSearch={handleSearch} />
      </div>

      <div className="d-flex flex-wrap container gap-5 mt-4">
        {JSON?.products?.filter(SearchProducts(search)).map((items) => {
          const [newImage] = items.images;
          return <Products items={items} key={items.id} newImage={newImage} />;
        })}
      </div>
    </>
  );
};

export default Typefiltertask;
