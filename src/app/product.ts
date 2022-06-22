export interface Rating {
    rate:number,
    count:number
}

export interface Product {
    id:Number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating
}