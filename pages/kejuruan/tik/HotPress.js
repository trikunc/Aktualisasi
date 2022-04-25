import React from 'react'

import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table/LangkahKerja'

function PressPin() {
 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Prosedur Langkah Kerja</h1>
    <h2 className="font-semibold text-2xl mt-2">Mesin Hot Press</h2>

    <div className="w-full mt-8 flex justify-center items-center">

     <Table data={data} />
    </div>
   </div>
  </div>
 )
}

export default PressPin

import Pic1 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture1.png'
import Pic2 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture2.png'
import Pic3 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture3.png'
import Pic4 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture4.png'
import Pic5 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture5.png'
import Pic6 from '../../../public/assets/images/langkahKerja/tik/hotPress/Picture6.png'



const data = [
 {
  id: 1,
  description: "Setting Mesin Hotpress pada suhu 165 C – 200 C",
  picture: Pic1,
 },
 {
  id: 2,
  description: "Setelah setting suhu maka sesuaikan timer sesuai dengan suhu yang telah di atur. (10 detik untuk 200 C dan 20 detik untuk 165 C)",
  picture: Pic2,
 },
 {
  id: 3,
  description: "Posisikan Baju dan object yang akan di press",
  picture: Pic3,
 },
 {
  id: 4,
  description: "Tekan Tuas sampai terkunci",
  picture: Pic4,
 },
 {
  id: 5,
  description: "Tunggu countdown hingga waktu habis atau sampai alaram berbunyi",
  picture: Pic5,
 },
 {
  id: 6,
  description: "Hasil Akhir dari Mesin Hotpress",
  picture: Pic6,
 },
]