"use client";
import { useEffect } from "react";
import { CartItem, Product } from "@/app/lib/products/types";

export default function AddToCartBtn({
  item,
  size,
}: {
  item: Product;
  size: string;
}) {
  let localCart: string | null;
  let products: CartItem[] | null;
  useEffect(() => {
    localCart = window.localStorage.getItem("next-cart");
    if (localCart) {
      products = JSON.parse(localCart).products;
      console.log(products);
    }
  }, [item, size]);

  function addToCart() {
    if (products) {
      if (
        products.some(
          (arrItem) => arrItem.product.id === item.id && arrItem.size === size
        )
      ) {
        products.map((arrItem) =>
          arrItem.product.id === item.id && arrItem.size === size
            ? (arrItem = { ...arrItem, quantity: (arrItem.quantity += 1) })
            : arrItem
        );
      } else {
        products = [{ product: item, size: size, quantity: 1 }, ...products];
      }
    } else {
      products = [{ product: item, size: size, quantity: 1 }];
    }
    window.localStorage.setItem(
      "next-cart",
      JSON.stringify({ products: products })
    );
  }
  return (
    <button className='border p-2 hover:bg-red-600' onClick={() => addToCart()}>
      Add to Cart
    </button>
  );
}
