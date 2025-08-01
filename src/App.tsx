import { useState } from 'react'
import './App.css'
import { SearchDog } from './components/SearchDog'
import type { DogBreed } from './types/dogs'
import { Resultado } from './components/Resultado';

function App() {
  const [resultado, setResultado] = useState<DogBreed[]>([]);
  const onResults = (resultado: DogBreed[])=>{
    setResultado(resultado);
  }

  return (
    <>
      <h1>Buscador de razas de perros extras</h1>
      <SearchDog OnResults={onResults} />
      <Resultado resultadoBusqueda={resultado} />
    </>
  )
}

export default App
