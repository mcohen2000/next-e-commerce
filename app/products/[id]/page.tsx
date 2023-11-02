import { products } from "@/app/lib/products/inventory"
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export default function ProductPage({params, searchParams}: {params: {id: string},searchParams: {[key: string]: string }}) {
    const item = products.filter(item => item.id === params.id)[0];
    if (searchParams.size && !item.sizes.includes(searchParams.size)){
      redirect(`/products/${item.id}`)
    }
    let selectedSize = searchParams.size || 'M';
  return (
    <div className="bg-opacity-10 bg-gray-500">
        <Image
            src={item.images[0]}
            width={300}
            height={300}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className="flex gap-4">
            {item.sizes.map((size) => <Link key={`${size}-sizeBtn`} href={`?size=${size}`} className={`px-3 py-1 border rounded-3xl ${selectedSize === size ? 'bg-red-600 text-white': 'bg-gray-400 text-black'}`}>{size}</Link>)}
          </div>
    </div>
  )
}
