import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import "./AddIncident.scss";

const incidentsList = [
    {id: "C1", type:"must evac, secure lockdown"},
    {id: "C2", type:"may evac, secure lockdown"},
    {id: "C3", type:"no evac, limited lockdown"},
    {id: "C4", type:"no evac, no lockdown"},
];

export default function AddIncident() {
    const navigate = useNavigate();
    const [ incidentId, setIncidentId ] = useState('');

    // input states
    const [ incident, setIncident ] = useState(incidentsList[0]);
    const [ date, setDate ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(incident, date, description)
    }
  return (
    <div className='add-incident-page'>
        <div className="container">
            <button className="reset-btn"><AddCircleOutlineIcon/></button>
            <h3>New Incident Information Form</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Category: <small className='required'>(required)</small></span>
                    <select onChange={e => setIncident(e.target.id)} value={incident.id}>
                        {incidentsList.map(item => <option key={item.id} value={item.id}>{item.type}</option>)}
                    </select>
                </label>
                <div className="item">
                    <div>
                        <h5 className='header'>Incident ID</h5>
                        <small>(assigned on save)</small>
                    </div>
                    <span className="info">{incidentId}</span>
                </div>
                <label>
                    <span>Date: <small className='required'>(required)</small></span>
                    <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
                </label>
                <label>
                    <span>Description: <small className='required'>(required)</small></span>
                    <textarea onChange={e => setDescription(e.target.value)} value={description}/>
                </label>
                <div className="form-actions">
                    <button type='button' onClick={() => navigate("/")}>CANCEL</button>
                    <button type='submit'>SAVE</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}
