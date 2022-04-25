import Head from 'next/head'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import backgroundImg from '../public/assets/images/siswa_desainGrafis.jpg'

import Navbar from '../components/Navbar'
import RouteName from '../utils/RouteName'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
// import Link from 'next/link'

export default function Home() {
  const router = useRouter();

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

          {/* <Link href="/" className="m-4 p-6 text-left text-white no-underline border border-neutral-100 rounded-lg max-w-[300px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
            <h2 className="text-2xl mb-4">Asset Digital</h2>
            <p className="text-xl">Aset baik berupa aset peralatan maupun non peralatan pelatihan</p>
          </Link> */}

          {/* <Link href="https://nextjs.org/docs" className="m-4 p-6 text-left text-white no-underline border border-neutral-100 rounded-lg max-w-[300px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
            <h2 className="text-2xl mb-4">Prosedur Pelatihan</h2>
            <p className="text-xl">Langkah - langkah kerja penggunaan peralatan pelatihan</p>
          </Link> */}


        </div>
      </div>
    </div>
  )
}
