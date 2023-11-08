"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  useEffect(() => {
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
    setPrevPath(pathname);
  }, [isOpen, pathname]);

  return (
    <>
      <div
        className='p-2 border rounded-md cursor-pointer relative md:hidden'
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
      {/* Nav Menu */}
      <div
        className={`flex md:hidden flex-col items-center absolute z-50 top-0 bottom-0 left-[-1px] w-[calc(100vw+1px)] md:w-[375px] h-screen bg-black bg-opacity-90 backdrop-blur-md border-r p-6 ${
          isOpen
            ? "translate-x-[calc(1px)] md:translate-x-0"
            : "translate-x-[-100%]"
        } transition-transform ease-in-out duration-500`}
      >
        <div className='flex w-full justify-between items-center'>
          {/* <h2 className='font-extrabold text-2xl'>Shopping Cart</h2> */}
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
        <div className='flex flex-col flex-grow w-full justify-start items-start my-5 z-50 overflow-auto text-xl'>
        <Link href={'/products'} className="group flex justify-center align-center py-2 "><div className="group-hover:border-b border-white">All Products</div></Link>
        <Link href={'/products/clothes'} className="group flex justify-center align-center py-2 "><div className="group-hover:border-b border-white">Clothes</div></Link>
        <Link href={'/products/stickers'} className="group flex justify-center align-center py-2 "><div className="group-hover:border-b border-white">Stickers</div></Link>
        </div>
      </div>
    </>
  );
}
