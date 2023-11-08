import BackgroundVideo from '@/components/BackgroundVideo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <Link href={'/products'} className="absolute top-[50%] flex justify-center align-center z-10 -translate-y-[50%]"><div className="bg-red-600 bg-opacity-[55%] p-4 rounded-xl backdrop-blur">Start Shopping</div></Link>
      {/* <video preload="auto" loop autoPlay muted controls playsInline
      className='h-[calc(100vh-79px)] max-w-none opacity-60 z-0'
      poster="/spinning-hologram-poster.png"
    >
      <source src='/spinning-hologram.mp4' type='video/mp4' />
    </video> */}
      <BackgroundVideo/>
    </main>
  )
}
