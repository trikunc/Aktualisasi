import Head from 'next/head'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import backgroundImg from '../public/assets/images/siswa_desainGrafis.jpg'

import Navbar from '../components/Navbar'
import RouteName from '../utils/RouteName'
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Home() {
  const [loginCredential, setLoginCredential] = useState('abdelwahab@prisma.io')
  const [password, setPassword] = useState('password')

  const router = useRouter();

  const __handleLogin = async () => {

    let status = await signIn('credentials', {
      redirect: false,
      email: loginCredential,
      password: password
    })
    console.log('status=> ', status)

    if (status.ok) {
      router.replace(`${RouteName.success}`)
    }

  }

  return (
    <div className={styles.container}>
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

        <button
          type="submit"
          onClick={__handleLogin}
          className="w-full flex justify-center bg-topbar hover:bg-green-500 text-gray-100 p-3 rounded tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Login
        </button>

        <div className="flex items-center justify-center flex-wrap max-w-[800px]">
          <a href="https://nextjs.org/docs" className="m-4 p-6 text-left text-white no-underline border border-neutral-100 rounded-lg max-w-[300px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <h2 className="text-2xl mb-4">Asset Digital</h2>
            <p className="text-xl">Aset baik berupa aset peralatan maupun non peralatan pelatihan</p>
          </a>

          <a href="https://nextjs.org/docs" className="m-4 p-6 text-left text-white no-underline border border-neutral-100 rounded-lg max-w-[300px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <h2 className="text-2xl mb-4">Prosedur Pelatihan</h2>
            <p className="text-xl">Langkah - langkah kerja penggunaan peralatan pelatihan</p>
          </a>


        </div>
      </div>
    </div>
  )
}
