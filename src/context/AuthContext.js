import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.setItem("accessToken", action.payload.accessToken)
      return { ...state, user: action.payload}
    case 'LOGOUT':
      sessionStorage.removeItem("accessToken")
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    authIsReady: false,
  })

  // check for accessToken saved on inital load
  useEffect(()=> {
    const accessToken = sessionStorage.getItem("accessToken")
    if(accessToken) {
      axios.get(`http://localhost:3001/auth/authorize`, {
        headers: {
          accessToken
        },
      }).then( res => {
        dispatch({type: "AUTH_IS_READY", payload: res.data})
      })
    } else {
      dispatch({type: "AUTH_IS_READY", payload: null})
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}