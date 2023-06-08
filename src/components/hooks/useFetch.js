import { useState, useEffect } from 'react'
import { customSwalAlert } from '../../../utilities/toast'

export function useFetch (URL, dependenci) {
  console.log("EN USEFETCH    URL:", URL)
  console.log("Dependenci: ", dependenci)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState('')
  const [data , setData] = useState(null)

  useEffect( () => {
    const controller = new AbortController()
    const {signal} = controller
    async function getData(){
      console.log("En getData de useFetch !!")
      try{
        const response = await fetch(URL, {signal})
        const dataApi = await response.json()
        /* const results = await dataApi.results */
        console.log("dataApi en useFetch: ", dataApi)
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
      console.log("FETCH ABORTED")
    }
  }, [dependenci])
  return {loading, error, data}
}