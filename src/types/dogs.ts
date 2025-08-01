export interface DogBreed{
    weight: WeightDog
    height: HeightDog
    id: number
    name: string
    bred_for: string
    description: string
    breed_group: string
    life_span: string
    history?: string
    temperament: string
    reference_image_id: string 
}

export interface WeightDog{
    imperial: string
    metric: string

}
export interface HeightDog{
    imperial: string
    metric: string
    
}