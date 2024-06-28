import { useEffect, useState } from "react"

const useFetchPokemonInfo = ( url ) => {

    const [info, setInfo ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    console.log(url)

    useEffect(() => {
        const fetchPokemonInfo = async () => {
            try{
                setLoading(true)
                const response = await fetch(url) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setInfo(data)
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
        }
        fetchPokemonInfo()
    },[url])

    return { info, loading, error };
}

export default useFetchPokemonInfo