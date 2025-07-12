import React, { useEffect, useState } from 'react'
import { UserList } from './components/UserList'

export const UsersApp = () => {
  
  const [endPoint, setEndPoint] = useState('users')
  const handleFetch = () => {
    setEndPoint('comments')
  }

  return (
    <>
      <h1>Usuarios</h1>
      <UserList endpoint={endPoint}/>
      <button onClick={handleFetch}>Llamar a la API</button>
    </>
  )
}
