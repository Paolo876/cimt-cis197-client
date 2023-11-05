import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./SearchForm.scss";

const resourceFunctions = [
    {name: "#1 transportation", value: "transportation"},
    {name: "#2 communications", value: "communications"},
    {name: "#3 engineering", value: "engineering"},
    {name: "#4 search and rescue", value: "search and rescue"},
    {name: "#5 education", value: "education"},
    {name: "#6 energy", value: "energy"},
];

export default function SearchForm({ searchFormSubmit, formRef }) {
    const navigate = useNavigate();
    const [ resource, setResource ] = useState('');
    const [ primaryFunction, setPrimaryFunction ] = useState('');
    const [ distance, setDistance ] = useState('');

    // reset form inputs on parent button click
    useEffect(()=> {
        formRef.current = () => clearInputs();
    }, [formRef]);

    const clearInputs = () => {
        setResource('');
        setPrimaryFunction('');
        setDistance('');
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      searchFormSubmit({ resource, primaryFunction, distance })
    }
  return (
    <div className='search-form'>
        <h3>Search Resources</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Resource Name: <small className='optional'>(optional)</small></span>
                <input type="text" onChange={e => setResource(e.target.value)} value={resource}/>
            </label>
            <label>
                <span>Primary Function: <small className='optional'>(optional)</small></span>
                <select onChange={e => setPrimaryFunction(e.target.value)} value={primaryFunction}>
                    <option value="">(none)</option>
                    {resourceFunctions.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
                </select>
            </label>
            <label>
                <span>Distance: <small>(optional)</small></span>
                <div className='row-input'>
                    <p className='info'>within</p>

                    <input type="number" onChange={e => setDistance(e.target.value)} value={distance} min="0.1" step=".1"/>
                    <p className='info'>miles from PCC</p>
                </div>        
            </label>
            <div className="form-actions">
                <button type='button' onClick={() => navigate("/")}>CANCEL</button>
                <button type='submit'>SEARCH</button>
            </div>
        </form>
    </div>
  )
}
