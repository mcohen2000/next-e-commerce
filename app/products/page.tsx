import Link from 'next/link';
import { products } from '../lib/products/inventory';
import Image from 'next/image';

export default function ProductsPage() {
  
  return (
    <div className="flex flex-col items-center px-8">
      <h1 className='text-2xl my-8'>All Products</h1>
      <div className='flex flex-wrap w-full justify-center gap-4 mb-4'>
        {products.map(item => (
        <Link 
        href={'/product/' + item.id} 
        className='flex flex-col items-center gap-3 p-4 bg-opacity-10 bg-gray-200' 
        key={item.id}>
          <Image
            src={item.images[0]}
            width={312}
            height={312}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </Link>
        ))}
      </div>
    </div>
  )
}
