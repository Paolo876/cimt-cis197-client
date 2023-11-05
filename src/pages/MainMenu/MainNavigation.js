import React from 'react'
import { Link } from 'react-router-dom';

import resourceLogo from "../../assets/resource-logo.svg";
import emergencyLogo from "../../assets/emergency-logo.svg";
import searchLogo from "../../assets/search-logo.svg";
import reportLogo from "../../assets/report-logo.svg";

export default function MainNavigation() {
  return (
    <div className="main-container">
        <div className="container">
        <h1>MAIN MENU</h1>
        <ul>
            <li>
            <Link to="/add-resource">
                <img src={resourceLogo} alt="add-resource" />
                <p>Add Available Resource</p>
            </Link>
            </li>
            <li>
            <Link to="/add-incident">
                <img src={emergencyLogo} alt="add-emergency-incident" />
                <p>Add Emergency Incident</p>
            </Link>
            </li>
            <li>
            <Link to="/search">
                <img src={searchLogo} alt="search-resources" />
                <p>Search Resources</p>
            </Link>
            </li>
            <li>
            <Link to="/resource-report">
                <img src={reportLogo} alt="generate-resources-report" />
                <p>Generate Resource Report</p>
            </Link>
            </li>
        </ul>
        </div>
    </div>
  )
}
