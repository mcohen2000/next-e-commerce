import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex p-8 flex-col w-full xl:container justify-center items-center'>
        <div className='bg-lime-200 w-full text-lime-700 border-2 border-lime-700 p-4 flex flex-col justify-center items-center mb-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-12 h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <h2 className='text-2xl font-bold'>THANK YOU</h2>
          <p>FOR YOUR ORDER</p>
        </div>
        <Link href={'/'} className="px-4 py-2 border">Back to Home</Link>
      </div>
    </div>
  );
}
