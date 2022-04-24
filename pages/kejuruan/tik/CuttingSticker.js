import React from 'react'

import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table/LangkahKerja'

function CuttingSticker() {
 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Prosedur Langkah Kerja</h1>
    <h2 className="font-semibold text-2xl mt-2">Cutting Sticker</h2>

    <div className="w-full mt-8 flex justify-center items-center">

     <Table data={data} />
    </div>
   </div>
  </div>
 )
}

export default CuttingSticker

import Pic1 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture1.png'
import Pic2 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture2.png'
import Pic3 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture3.png'
import Pic4 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture4.png'
import Pic5 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture5.png'
import Pic6 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture6.png'
import Pic7 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture7.png'
import Pic8 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture8.png'
import Pic9 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture9.png'
import Pic10 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture10.png'
import Pic11 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture11.png'
import Pic12 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture12.png'
import Pic13 from '../../../public/assets/images/langkahKerja/tik/cuttingSticker/Picture13.png'

const data = [
 {
  id: 1,
  description: "Masukkan Jarum Pada Holder minimal 0,5 mm",
  picture: Pic1,
 },
 {
  id: 2,
  description: "Pasang kepada head holdernya",
  picture: Pic2,
 },
 {
  id: 3,
  description: "Kunci head holder dengan memutar ulir kuncian ke arah jarum jam",
  picture: Pic3,
 },
 {
  id: 4,
  description: "Masukkan bahan cutting sticker ke dalam mesin cutting sticker",
  picture: Pic4,
 },
 {
  id: 5,
  description: "Kunci bagian belakang dengan cara menurunkan bagian pengunci sampai bunyi “click”",
  picture: Pic5,
 },
 {
  id: 6,
  description: "Tekan tombol origin dan atur posisi 0 pada jarum holder",
  picture: Pic6,
 },
 {
  id: 7,
  description: "Masuk Software Corel X7, Setting area pada aplikasi sesuai dengan ukuran yang diinginkan",
  picture: Pic7,
 },
 {
  id: 8,
  description: "Pilih Application Launcher dan pilih CutToolCDR",
  picture: Pic8,
 },
 {
  id: 9,
  description: "Pilih Icon cutter (kiri bawah) pada popup yang muncul",
  picture: Pic9,
 },
 {
  id: 10,
  description: "Tekan Reset",
  picture: Pic10,
 },
 {
  id: 11,
  description: "Keluarkan bahan dan potong sesuai kebutuhan",
  picture: Pic11,
 },
 {
  id: 12,
  description: "Pisahkan hasil yang mau dipakai dengan background",
  picture: Pic12,
 },
 {
  id: 13,
  description: "Hasil cutting akhir",
  picture: Pic13,
 },
]
