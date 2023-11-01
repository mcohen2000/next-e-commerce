import Link from 'next/link';
import { products } from '../lib/products/inventory';
import Image from 'next/image';

export default function ProductsPage() {
  
  return (
    <div className="flex flex-col items-center px-8">
      <h1 className='text-2xl my-8'>Products</h1>
      <div className='flex flex-wrap w-full justify-center md:justify-start gap-4'>
        {products.map(item => (
        <Link 
        href={'/products/' + item.id} 
        className='flex flex-col items-center gap-3 p-4 bg-opacity-10 bg-gray-500' 
        key={item.id}>
          <Image
            src={item.images[0]}
            width={300}
            height={300}
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
