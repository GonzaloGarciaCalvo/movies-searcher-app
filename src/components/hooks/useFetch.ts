import { useState, useEffect } from 'react'
import { customSwalAlert } from '../../utilities/toast'

export function useFetch (URL:string, dependenci:string|null) {

  const [ loading, setLoading ] = useState<Boolean>(true)
  const [ error, setError ] = useState<string | null>('')
  /* const [data , setData] = useState<searchType | movieDetail>({} as searchType | movieDetail) */
  const [data , setData] = useState<any>(null)
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
        } catch(error:any) {
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