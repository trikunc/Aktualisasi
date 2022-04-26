import Head from 'next/head'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import backgroundImg from '../public/assets/images/siswa_desainGrafis.jpg'

import Navbar from '../components/Navbar'

export default function Home() {

  return (
    <div className="h-screen w-screen bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center relative">
      <Image
        className={styles.background}
        src={backgroundImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Navbar />

      <div className={styles.main}>
        <h1 className="text-white text-6xl">
          Selamat Datang di Web BLKPP DIY
        </h1>
        <p className="text-white my-12 text-2xl">
          Website ini digunakan untuk Aktualisasi Latsar CPNS 2022
        </p>
        <div className="flex items-center justify-center flex-wrap max-w-[800px]">
        </div>
      </div>
    </div>
  )
}
