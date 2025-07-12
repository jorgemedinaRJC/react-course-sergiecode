import { useState, useEffect } from 'react'

export const useFetchData = (endpoint) => {
  
  const [data, setData] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)
  
  const fetchData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/' + endpoint)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
    catch(error){
      console.error(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [endpoint])
  
  return {
    data,
    isLoading
  }
}
