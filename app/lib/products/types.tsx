export type Product = {
    id: string;
    name: string;
    price: number;
    sizes: string[];
    images: string[];
}
export type CartItem = {
    product: Product;
    quantity: number;
    size: string;
}