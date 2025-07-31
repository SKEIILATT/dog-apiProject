import { type DogBreed } from "../types/dogs"

export interface SearchDogProps{
    OnResults: (results: DogBreed[]) => void
}

export const SearchDog = ({OnResults}: SearchDogProps)=>{

}