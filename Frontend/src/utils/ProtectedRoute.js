import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const ProtectedRoute = ({children}) => {
    const state = useContext(StateContext)
    
  return (
    <div></div>
  )
}

export default ProtectedRoute