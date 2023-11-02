import Cart from "@/components/Cart";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center align-center px-5 py-5 sticky top-0 border-b border-white bg-black bg-opacity-80 z-50 transition-all">
        <div className="flex flex-grow justify-between align-center">
        <div className="flex items-center">
            <Link href={'/'} className="group flex justify-center align-center px-2 ">
                <div className="group-hover:border-b border-white">Logo</div>
            </Link>
            <Link href={'/products'} className="group flex justify-center align-center px-2 "><div className="group-hover:border-b border-white">Products</div></Link>
        </div>
        <Cart/>
        
        </div>
    </nav>
  )
}
