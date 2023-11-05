import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ResourceReport.scss";

export default function ResourceReport() {
  const navigate = useNavigate();

  return (
    <div className='resource-report-page'>
      <div className="container">
        <h3>Resource Report</h3>
        <ul>
          <li className='header'>
            <span>Primary Function #</span>
            <span>Primary Function</span>
            <span>Total Resources</span>
          </li>
          {/* map data here */}
          <li className='footer'>
            <span></span>
            <span>Total</span>
            <span>0</span>
          </li>
        </ul>
        <button onClick={() => navigate("/")}>Back to Main Menu</button>
      </div>
    </div>
  )
}
