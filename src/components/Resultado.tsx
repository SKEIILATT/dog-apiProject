import type { DogBreed } from "../types/dogs"

export interface ResultadoProps{
    resultadoBusqueda: DogBreed[];
}


export const Resultado = ({resultadoBusqueda}:ResultadoProps) =>{
    return (
        <>
            {resultadoBusqueda.map((resultado) => (
                <div key={resultado.id}>
                    <h2> Nombre: {resultado.name} </h2>
                    <p> Descripción: {resultado.description} </p>
                    <p> Duración Aproximada: {resultado.life_span} </p>
                    <p> Peso: {resultado.weight.metric} kg</p>
                    <p> Altura {resultado.height.metric} cm </p>
                </div>
            ))}
        </>
    );
}