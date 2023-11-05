import React, { useState, useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddResourceForm from './AddResourceForm';
import "./AddResource.scss";

export default function AddResource() {
    const [ resourceId , setResourceId ] = useState('sdfkjhb324uwqehdwekj123134');
    const formRef = useRef(null);

  return (
    <div className='add-resource-page'>
        <div className="container">
            <button className="reset-btn" onClick={() => formRef.current()}><AddCircleOutlineIcon/></button>
            <h3>New Resource Information Form</h3>
            <div className="item">
                <div>
                <h5 className='header'>Resource ID</h5>
                    <small>(assigned on save)</small>
                </div>
                <span className="info">{resourceId}</span>
            </div>
            <div className="item">
                <div>
                    <h5 className='header'>Owner</h5>
                </div>
                <span className='info'>Paolo Bugarin</span>
            </div>
            <AddResourceForm setResourceId={setResourceId} formRef={formRef}/>
        </div>
    </div>
  )
}
