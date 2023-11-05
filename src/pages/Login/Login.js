import React, { useState } from 'react'
import "./Login.scss";
import useAuthActions from '../../hooks/useAuthActions';

export default function Login() {

  const { login, isLoading, error } = useAuthActions();

  //input states 
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ inputError, setInputError ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim().length !== 0 && password.trim().length !== 0){
      login("http://localhost:3001/auth/login", { username, password })
    } else {
      setInputError("Username and password input field must not be blank.")
    }
  }

  return (
    <div className='login-page'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label>
            <span>Username:</span>
            <input 
              type="text" 
              onChange={e => setUsername(e.target.value)}
              value={username}
              required/>
          </label>
          <label>
            <span>Password:</span>
            <input 
              type="password" 
              onChange={e => setPassword(e.target.value)}
              value={password}
              required/>
          </label>
          <div className="submit-btn-container">
            {error && <p className="error">**{error}</p>}
            {inputError && <p className="error">**{inputError}</p>}
            {!isLoading && <button type="submit" className='submit-btn'>LOGIN</button>}
            {isLoading && <button type="submit" className='submit-btn' disabled>LOGGING IN...</button>}
          </div>
        </form>
        <div className="header-container">
          <h3>Welcome to the CERT Incident Management Tool (CIMT)</h3>
          <p>The CIMT is an online web application that manages available resources and their assignments to various 
            emergency incidents that may have already occured, are happening, or may happen in and around the Pasadena City College campus. 
            Emergency incidents may include, but not limited to, hazardous waste spills, acts of terrorism, nuclear incident, campus shooting, car crashes 
            with fatalities, flooding, fire, etc.
          </p>
        </div>
      </div>
    </div>
  )
}
