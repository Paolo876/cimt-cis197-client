import React, { useState, useRef } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Search.scss";

const DUMMY = [
  {id: 1, name: "Ambulance", owner: "Joseph", cost: "$100", unit: "hour", distance: 1},
  {id: 2, name: "Car", owner: "Jim", cost: "$50", unit: "day", distance: 4},
  {id: 3, name: "Ambulance", owner: "Michael", cost: "$100", unit: "week", distance: 8},
  {id: 4, name: "Ambulance", owner: "Dwight", cost: "$70", unit: "each", distance: .25},
  {id: 5, name: "Boat", owner: "Andy", cost: "$120", unit: "hour", distance: null},
  {id: 6, name: "Truck", owner: "Kevin", cost: "$80", unit: "hour", distance: 1.25},
  {id: 7, name: "Plane", owner: "Creed", cost: "$280", unit: "hour", distance: 5},
  {id: 8, name: "Bike", owner: "Toby", cost: "$20", unit: "hour", distance: 3},
  {id: 9, name: "Medical Kit", owner: "Pam", cost: "$10", unit: "hour", distance: null},
];
export default function Search() {
  const formRef = useRef(null);
  const [ searchResults, setSearchResults ] = useState(null);

  const handleClick = () => {
    formRef.current();
    setSearchResults(null);
  }

  //fetch results
  const searchFormSubmit = (data) => {
    console.log(data)
    setSearchResults(DUMMY)
  }


  return (
    <div className='search-page'>
      <button onClick={handleClick} className="reset-btn"><AddCircleOutlineIcon/></button>
      <SearchForm searchFormSubmit={searchFormSubmit} formRef={formRef}/>
      {searchResults && <SearchResults searchResults={searchResults}/>}
    </div>
  )
}
