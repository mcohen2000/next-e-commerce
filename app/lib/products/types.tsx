export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string[];
    sizes: string[];
    images: string[];
}
export type CartItem = {
    product: Product;
    quantity: number;
    size: string;
}
export type StripeDictionary = {
    [key: string]: {[key: string]: string};
}