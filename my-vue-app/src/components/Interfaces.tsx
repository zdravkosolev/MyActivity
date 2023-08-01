export interface IProducts {
        name: string;
        price: number;
        gender?: string;
        brand: string;
        image: string
    
}

export interface IProductsArr extends IProducts{
    el: number
}
