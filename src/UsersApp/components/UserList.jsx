import React, { useState, useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchdata'

export const UserList = ({endpoint}) => {
  
  const {data, isLaoding} = useFetchData(endpoint)
  
  return (
    <>
      <ul>
        {isLaoding ? <p>Loading</p> 
                  : endpoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                                        : data.map(item => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  )
}
