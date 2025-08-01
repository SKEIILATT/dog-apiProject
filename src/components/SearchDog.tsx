import { useState } from "react"
import { type DogBreed } from "../types/dogs"
import { fetchDogByName } from "../services/dogApi";

export interface SearchDogProps{
    OnResults: (results: DogBreed[]) => void
}

export const SearchDog = ({OnResults}: SearchDogProps)=>{
    const[busqueda,setBusqueda] = useState<string>("");
    const[loading, setLoading] = useState<boolean>(false);
    const[error,setError]= useState<string | null>(null);
    return(
        <> 
            
            <input type="text" value={busqueda}   onChange={(e)=>{
                setBusqueda(e.target.value);
            }} />
            <button onClick={async ()=>{
                setLoading(true)
                try{
                    const data = await fetchDogByName(busqueda);
                    OnResults(data);
                }
                catch(error){
                    setError(error instanceof Error ? error.message: String(error));
                }
                finally{
                    setLoading(false)
                }
            }} > Buscar Perro </button>
            {loading && <p>Cargando ...</p> }
            {error && <p>Error en la busqueda</p> }
            {}
        </>
    )
}