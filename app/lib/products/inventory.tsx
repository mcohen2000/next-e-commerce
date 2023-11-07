import type { Product } from "./types";

export const products:Product[] = [
    {
        id: 'white-logo-black-tee',
        name: 'White Logo Black Tee',
        category: 'clothes',
        price: 14.99,
        description: ['Polyester 50%, Cotton 50%', 'Machine wash cold, tumble dry low'],
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/m-logo-white-black-tee.png']
    },
    {
        id: 'black-logo-white-tee',
        name: 'Black Logo White Tee',
        category: 'clothes',
        price: 14.99,
        description: ['Polyester 50%, Cotton 50%', 'Machine wash cold, tumble dry low'],
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/m-logo-black-white-tee.png']
    },
    {
        id: 'white-logo-sticker',
        name: 'White Logo Sticker',
        category: 'misc',
        price: 4.99,
        description: ['XS: 3x3"', 'S: 4x4"', 'M:6x6"', 'L: 9x9"', 'XL: 12x12"'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['/m-logo-white.png']
    },
    {
        id: 'black-logo-sticker',
        name: 'Black Logo Sticker',
        category: 'misc',
        price: 4.99,
        description: ['XS: 3x3"', 'S: 4x4"', 'M:6x6"', 'L: 9x9"', 'XL: 12x12"'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['/m-logo-black.png']
    },
]