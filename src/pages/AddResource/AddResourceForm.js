import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const resourceFunctions = [
    {id: 1, description: "transportation"},
    {id: 2, description: "communications"},
    {id: 3, description: "engineering"},
    {id: 4, description: "search and rescue"},
    {id: 5, description: "education"},
    {id: 6, description: "energy"},
];


export default function AddResourceForm({formRef }) {
    const navigate = useNavigate();

    // input states
    const [ name, setName ] = useState('');
    const [ primaryFunction, setPrimaryFunction ] = useState(parseInt(resourceFunctions[0].id));
    const [ secondaryFunctionOptions, setSecondaryFunctionOptions ] = useState([]);
    const [ secondaryFunction, setSecondaryFunction ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ capabilities, setCapabilities ] = useState([]);
    const [ capabilitiesInput, setCapabilitiesInput ] = useState('');
    const [ distance, setDistance ] = useState('');
    const [ cost, setCost ] = useState({value: '', unit: 'day'});

    // update secondary function options when primaryFunction updates
    useEffect(()=> {
        setSecondaryFunctionOptions(resourceFunctions.filter(item => parseInt(item.id) !== parseInt(primaryFunction)))
        if(secondaryFunction === primaryFunction) setSecondaryFunction('');
    }, [primaryFunction]);

    // reset form inputs on parent button click
    useEffect(()=> {
        formRef.current = () => clearInputs();
    }, [formRef]);

    // capabilities events
    const addCapabilitiesKeyDown = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            if(capabilitiesInput.trim().length !== 0) setCapabilities(prevState => [...prevState, capabilitiesInput]);
            setCapabilitiesInput('');
        }
    }
    const addCapabilitiesClick = () => {
        setCapabilities(prevState => [...prevState, capabilitiesInput]);
        setCapabilitiesInput('');
    }
    const removeCapabilityClick = (index) => {
      setCapabilities(prevState => {
        const updatedItems = [...prevState];
        updatedItems.splice(index, 1)
        return updatedItems
      })
    }

    // reset form
    const clearInputs = () => {
      setName('');
      setPrimaryFunction(parseInt(resourceFunctions[0].id));
      setSecondaryFunction('')
      setDescription('')
      setCapabilities([])
      setCapabilitiesInput('')
      setDistance('')
      setCost({value: '', unit: 'day'})
    }

    // submit form
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({name, primaryFunction, secondaryFunction, description, capabilities: JSON.stringify(capabilities), distance, cost});
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Resource Name: <small className='required'>(required)</small></span>
            <input type="text" onChange={e => setName(e.target.value)} value={name} required/>
        </label>
        <label>
            <span>Primary Function: <small className='required'>(required)</small></span>
            <select onChange={e => setPrimaryFunction(e.target.value)} value={primaryFunction}>
                {resourceFunctions.map( item => <option key={item.id} value={item.id}>#{item.id} { item.description }</option>)}
            </select>
        </label>
        <label>
            <span>Secondary Function: <small>(optional)</small></span>
            <div className="row-input">
                <select onChange={e => setSecondaryFunction(e.target.value)} value={secondaryFunction}>
                    <option value="" style={{display: "none"}}></option>
                    {secondaryFunctionOptions.map(item => <option key={item.id} value={item.id}>#{item.id} {item.description}</option>)}
                </select>
                {secondaryFunction !== '' && <button onClick={() => setSecondaryFunction('')}>CLEAR</button>}
            </div>
            
        </label>
        <label>
            <span>Description: <small>(optional)</small></span>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description}/>
        </label>
        <label className='capabilities'>
            <span>Capabilities: <small>(optional)</small></span>
            <div className='row-input'>
                <input type="text" onChange={e => setCapabilitiesInput(e.target.value)} value={capabilitiesInput} onKeyDown={addCapabilitiesKeyDown}/>
                {capabilitiesInput.trim().length !== 0 && <button type='button' onClick={addCapabilitiesClick}>Add</button>}
            </div>
            <ul>
                {capabilities.map((item, index) => <li key={index}><p>{item}</p><button type="button" onClick={() => removeCapabilityClick(index)}><CloseIcon/></button></li>)}
            </ul>
        </label>
        <label>
            <span>Distance from PCC: <small>(optional)</small></span>
            <div className='row-input'>
                <input type="number" onChange={e => setDistance(e.target.value)} value={distance} min="0"/>
                <p className='info'>miles</p>
            </div>        
        </label>
        <label className="cost">
            <span>Cost: <small className='required'>(required)</small></span>
            <div className='row-input'>
                <span className='cost-icon'>$</span>
                <input type="number" onChange={e => setCost(prevState => { return {...prevState, value: e.target.value}})} value={cost.value} />
                <p className='info'>per</p>
                <select onChange={e => setCost(prevState => { return {...prevState, unit: e.target.value}})} value={cost.unit}>
                    <option value='day'>day</option>
                    <option value='hour'>hour</option>
                    <option value='use'>use</option>
                    <option value='other'>other</option>
                </select>
                {cost.unit === "other" && <input type="text" className='cost-input' placeholder="please specify cost unit" required/>}
            </div>        
        </label>
        <div className="form-actions">
            <button type='button' onClick={() => navigate("/")}>CANCEL</button>
            <button type='submit'>SAVE</button>
        </div>
    </form>
  )
}
