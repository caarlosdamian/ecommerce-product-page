export interface Product {
    id: string;
    title: string;
    desc: string;
    price: number;
    actualPrice: string;
    discount?: string;
}

export interface ProductCart {
    id: string;
    title: string;
    desc: string;
    price: number;
    actualPrice: string;
    discount?: string;
    quantity: number;
    total: number;
}