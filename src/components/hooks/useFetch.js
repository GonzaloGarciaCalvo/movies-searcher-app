import { useState, useEffect } from 'react'
import { customSwalAlert } from '../../utilities/toast.js'

export function useFetch (URL, dependenci) {

  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState('')
  const [data , setData] = useState(null)
  console.log("data: ", data)
  useEffect( () => {
    const controller = new AbortController()
    const {signal} = controller
    async function getData(){
      try{
        const response = await fetch(URL, {signal})
        const dataApi = await response.json()
        console.log("dataApi: ",dataApi)
          setData(dataApi)
        } catch(error) {
            setError(error.message)
            customSwalAlert() 
            console.log("ERROR: ", error.message)
      } finally {
        setLoading(false)
      }
    }
    const dataFromApi = getData()
    return () => {
      controller.abort()
    }
  }, [dependenci])
  return {loading, error, data}
}