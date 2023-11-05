import React, { useState, useEffect} from 'react';

import "./SearchResults.scss";


const compareProperty = (a, b) => {

  if ( b.distance === null || a.distance < b.distance ){
    return -1;
  }
  if ( a.distance === null || a.distance > b.distance ){
    return 1;
  }
  return 0;
}

export default function SearchResults({ searchResults }) {
  const data = searchResults.sort(compareProperty);

  return (
    <div className='search-results'>
      <h3>Search Results</h3>
      <ul>
        <li className='header'>
          <span>Resource ID</span>
          <span>Resource Name</span>
          <span>Owner</span>
          <span>Cost/Unit</span>
          <span>Distance</span>
        </li>
        {data.map(item => (<li key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.owner}</span>
          <span>{item.cost}/{item.unit}</span>
          <span>{item.distance}</span>
        </li>))}
      </ul>
    </div>
  )
}
