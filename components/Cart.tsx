"use client";
import { CartItem } from "@/app/lib/products/types";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  function increaseQuantity(item: CartItem) {
    let updatedCart: CartItem[];
    setCart((prev) => {
      updatedCart = prev.map((arrItem) =>
        arrItem.product.id === item.product.id && arrItem.size === item.size
          ? (arrItem = { ...arrItem, quantity: arrItem.quantity + 1 })
          : arrItem
      );
      window.localStorage.setItem(
        "next-cart",
        JSON.stringify({ products: updatedCart })
      );
      return updatedCart;
    });
  }
  function decreaseQuantity(item: CartItem) {
    let updatedCart;
    if (item.quantity === 1) {
      setCart((prev) => {
        updatedCart = prev.filter(
          (arrItem) =>
            arrItem.product.id !== item.product.id || arrItem.size !== item.size
        );
        window.localStorage.setItem(
          "next-cart",
          JSON.stringify({ products: updatedCart })
        );
        return updatedCart;
      });
    } else {
      setCart((prev) => {
        updatedCart = prev.map((arrItem) =>
          arrItem.product.id === item.product.id && arrItem.size === item.size
            ? (arrItem = { ...arrItem, quantity: arrItem.quantity - 1 })
            : arrItem
        );
        window.localStorage.setItem(
          "next-cart",
          JSON.stringify({ products: updatedCart })
        );
        return updatedCart;
      });
    }
  }
  function getTotal(){
    let total = 0;
    cart.forEach((item) => total += item.product.price*item.quantity);
    return total
  }

  useEffect(() => {
    let localCart: string | null = window.localStorage.getItem("next-cart");
    if (isOpen && pathname !== prevPath) {
      setPrevPath(pathname);
      setIsOpen(false);
    }
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
      setTimeout(() => {
        document
          .getElementsByTagName("nav")[0]
          .classList.remove("backdrop-blur-md");
      }, 50);
    } else {
      document.body.classList.remove("overflow-y-hidden");
      setTimeout(() => {
        document
          .getElementsByTagName("nav")[0]
          .classList.add("backdrop-blur-md");
      }, 50);
    }
    if (localCart) {
      setCart(JSON.parse(localCart).products);
    }
    setPrevPath(pathname);
  }, [isOpen, pathname]);

  return (
    <>
      <div
        className='p-2 border rounded-md cursor-pointer relative'
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
          />
        </svg>
      </div>
      {/* Cart Menu */}
      <div
        className={`flex flex-col items-center absolute z-50 top-0 bottom-0 right-[-1px] w-[calc(100vw+1px)] md:w-[375px] h-screen bg-black bg-opacity-90 backdrop-blur-md border-l p-6 ${
          isOpen
            ? "translate-x-[calc(-1px)] md:translate-x-0"
            : "translate-x-full"
        } transition-transform ease-in-out duration-500`}
      >
        <div className='flex w-full justify-between items-center'>
          <h2 className='font-extrabold text-2xl'>Shopping Cart</h2>
          <div
            className='p-2 border rounded-md cursor-pointer relative'
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col flex-grow w-full justify-start items-center my-5 z-50 overflow-auto'>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className='flex justify-between border-b border-neutral-500 py-3 w-full'
              >
                <div className='flex gap-2'>
                  <div className='bg-opacity-10 bg-gray-200 p-3'>
                    <img
                      className=''
                      src={item.product.images[0]}
                      width={50}
                      height={50}
                      alt={item.product.name}
                    />
                  </div>
                  <div>
                    <p>{item.product.name}</p>
                    <p className='text-sm text-neutral-400'>{item.size}</p>
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <p className='text-right'>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <div className='flex justify-between items-center w-15 border rounded-full overflow-hidden'>
                    <button
                      className='px-3 py-2'
                      onClick={() => {
                        decreaseQuantity(item);
                        window.localStorage.setItem(
                          "next-cart",
                          JSON.stringify({ products: cart })
                        );
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 12h-15'
                        />
                      </svg>
                    </button>
                    <p className='p-1'>{item.quantity}</p>
                    <button
                      className='px-3 py-2'
                      onClick={() => {
                        increaseQuantity(item);
                        window.localStorage.setItem(
                          "next-cart",
                          JSON.stringify({ products: cart })
                        );
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 4.5v15m7.5-7.5h-15'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-[150px] h-auto'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              <p className='font-extrabold text-xl text-center'>
                Your cart is currently empty.
              </p>
            </>
          )}
        </div>
        {cart.length > 0 ? 
        <div className='mt-auto w-full pt-2'>
          <div className='flex justify-between border-b border-b-neutral-500 pb-1 mb-3'>
            <p>Taxes</p>
            <p>$0.00</p>
          </div>
          <div className='flex justify-between border-b border-b-neutral-500 pb-1 mb-3'>
            <p>Shipping</p>
            <p>$0.00</p>
          </div>
          <div className='flex justify-between border-b border-b-neutral-500 pb-1 mb-3'>
            <p>Total</p>
            <p>${getTotal().toFixed(2)}</p>
          </div>
          <button className="w-full bg-red-600 p-3 rounded-full mt-2">Proceed to Checkout</button>
        </div>
          : <></>}
      </div>
    </>
  );
}
