import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {
    searhValue,
    setSearchValue,   
  } = React.useContext(TodoContext);
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
   <input
   className='TodoSearch'
   placeholder="Cebolla"
   value={searhValue}
   onChange={onSearchValueChange} />
  );
}
export {TodoSearch}