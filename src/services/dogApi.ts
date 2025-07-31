const APIKEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchDogByName = async (name: string)=>{
    try{
        const response = await fetch(`${BASE_URL}/breeds/search?q=${encodeURIComponent(name)}`, {
            headers:{
                'x-api-key': APIKEY
            }
        })
        if(!response.ok){
            throw new Error(`No se obtuvo respuesta de la API. Status: ${response.ok}`);
        }
        return await response.json();
    }
    catch(error){
        throw error;
    }


}