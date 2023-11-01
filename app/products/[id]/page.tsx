import { products } from "@/app/lib/products/inventory"
import Image from "next/image";

export default function page({params}: {params: {id: string}}) {
    const item = products.filter(item => item.id === params.id)[0];
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
    </div>
  )
}
