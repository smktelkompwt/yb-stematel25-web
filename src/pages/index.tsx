import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [muted, setMuted] = useState(true)
  return (
    <>
      <Head>
        <title>Yearbook - SMK Telkom Purowkerto</title>
      </Head>
      <video id="video-background-stematel25" autoPlay loop muted={muted} className="fixed w-full h-full object-cover -z-10 brightness-75">
        <source src="https://res.cloudinary.com/daan17b95/video/upload/v1676192016/Videos/jumbotron-video_sruocc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => setMuted(prev => !prev)}
        className="fixed bottom-8 right-8 rounded-full backdrop-blur bg-slate-50/20 hover:bg-slate-50/30 text-black p-4"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center flex-col">
        <div className="grid grid-row-3 md:grid-cols-3 text-center w-full">
          <Link href="/alumni/TKJ">
            <div className="hover:backdrop-blur hover:bg-slate-50/30 py-8 px-10 w-full">
              <h1 className="text-8xl font-extralight">TKJ</h1>
            </div>
          </Link>
          <Link href="/alumni/TJA">
            <div className="hover:backdrop-blur hover:bg-white/30 py-8 px-10 w-full">
              <h1 className="text-8xl font-extralight">TJA</h1>
            </div>
          </Link>
          <Link href="/alumni/RPL">
            <div className="hover:backdrop-blur hover:bg-white/30 py-8 px-10 w-full">
              <h1 className="text-8xl font-extralight">RPL</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
