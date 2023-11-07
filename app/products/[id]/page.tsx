import { products } from "@/app/lib/products/inventory";
import AddToCartBtn from "@/components/AddToCartBtn";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  const item = products.filter((item) => item.id === params.id)[0];
  if (searchParams.size && !item.sizes.includes(searchParams.size)) {
    redirect(`/products/${item.id}`);
  }
  if(!item){
    redirect(`/products`);

  }
  let selectedSize = searchParams.size || "M";
  
  return (
    <div className="flex w-full justify-center">
    <div className='flex p-8 flex-col md:flex-row xl:container md:justify-center'>
      <div className='bg-opacity-10 bg-gray-200 flex-grow p-5'>
        <Image className='w-full' src={item.images[0]} width={300} height={300} alt={item.name} />
      </div>
      <div className="flex flex-col md:w-1/2 px-0 md:px-8 py-4 md:py-0 gap-4">
        <p className="text-2xl">{item.name}</p>
        <p>${item.price}</p>
        <ul className="list-disc list-inside">
          {item.description.map((text, index) => <li key={index} className="text-neutral-500">{text}</li>)}
        </ul>
        <p>Pick your size:</p>
        <div className='flex flex-wrap gap-4'>
          {item.sizes.map((size) => (
            <Link
              key={`${size}-sizeBtn`}
              href={`?size=${size}`}
              className={`px-3 py-1 border rounded-full ${
                selectedSize === size
                  ? "bg-red-600 text-white"
                  : "bg-gray-400 text-black"
              }`}
            >
              {size}
            </Link>
          ))}
        </div>
        <AddToCartBtn item={item} size={selectedSize}/>
      </div>
    </div>
    </div>
  );
}
