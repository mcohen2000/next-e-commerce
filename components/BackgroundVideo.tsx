"use client";
import { useRef, useEffect } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.67
    }
  }, [videoRef]);
  return (
    <video className='h-[calc(100vh-79px)] max-w-none opacity-80 z-0' ref={videoRef} poster="/spinning-hologram-poster.png" autoPlay loop muted playsInline 
    // experimental loop to prevent stutter on mobile
    // onEnded={() => {
    //   if(videoRef.current && videoRef.current.duration - videoRef.current.currentTime <= 1){
    //     videoRef.current.currentTime=0;
    //     videoRef.current.play();
    //   }
    // }}
    >
      <source src='/spinning-hologram-red-60fps.mp4' type='video/mp4' />
    </video>
  );
}
