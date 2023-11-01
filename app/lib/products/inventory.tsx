import type { Product } from "./types";

export const products:Product[] = [
    {
        id: 'white-logo-black-tee',
        name: 'White Logo Black Tee',
        price: 14.99,
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/m-logo-white.png']
    },
    {
        id: 'black-logo-white-tee',
        name: 'Black Logo White Tee',
        price: 14.99,
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/m-logo-black.png']
    },
]