import React, { useState, useEffect } from 'react'

export const UserList = ({endpoint}) => {
  const [data, setData] = useState([]) 
  const fetchData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/' + endpoint)
      const data = await response.json()
      setData(data)
    }
    catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [endpoint])
  
  return (
    <>
      <ul>
        {endpoint == 'users' ?  data.map(item => <li key={item.id}>{item.name}</li>)
                            : data.map(item => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  )
}
