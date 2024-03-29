import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searhValue, setSearchValue,loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searhValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}
export { TodoSearch };
