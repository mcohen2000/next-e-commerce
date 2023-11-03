"use client";
import { CartItem, Product } from "@/app/lib/products/types";

export default function AddToCartBtn({ item, size }:{item: Product, size:string}) {
    let localCart: string | null = window.localStorage.getItem("next-cart");
    let products: CartItem[] | null;
    if(localCart){
        products = JSON.parse(localCart).products
        console.log(products)
    }
  function addToCart() {
    if (products){
        products= [{ product: item, size: size, quantity: 1 }, ...products];
    } else{
        products = [{ product: item, size: size, quantity: 1 }]
    }
    window.localStorage.setItem(
      "next-cart",
      JSON.stringify({ products: products })
    );
  }
  return <button className="border p-2 hover:bg-red-600" onClick={() => addToCart()}>Add to Cart</button>;
}
