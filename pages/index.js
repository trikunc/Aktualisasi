import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat Datang di Web BLKPP DIY
        </h1>

        <p className={styles.description}>
          Website ini digunakan untuk Aktualisasi Latsar CPNS 2022
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Asset Digital</h2>
            <p>Aset baik berupa aset peralatan maupun non peralatan pelatihan</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Prosedur Pelatihan</h2>
            <p>Langkah - langkah kerja penggunaan peralatan pelatihan</p>
          </a>


        </div>
      </main>
    </div>
  )
}
