import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import useAuthActions from "../../hooks/useAuthActions";

import logo from "../../assets/pcc-logo-dark.png";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useAuthActions();

  return (
    <div className="header-container">
        <div className="container">
        <div className="header">
            <h1>CIMT</h1>
        </div>
        <div className="user-info">
            <p className="name">{user.displayName}<span>{user.role}</span></p>
            {user.email && <p className="desc">E-mail: <span>{user.email}</span></p>}
            {user.phoneNumber && <p className="desc">Phone: <span>{user.phoneNumber}</span></p>}
            {user.address && <p className="desc">Address: <span>{user.address}</span></p>}
        </div>
        <div className="logout-container">
            <button onClick={logout}>LOGOUT</button>
        </div>
        <img src={logo} alt="pcc" className="logo" />
        </div>
    </div>
  )
}
