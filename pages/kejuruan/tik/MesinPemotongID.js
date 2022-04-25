import React from 'react'

import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table/LangkahKerja'

function MesinPemotongID() {
 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Prosedur Langkah Kerja</h1>
    <h2 className="font-semibold text-2xl mt-2">Mesin Pemotong ID Card</h2>

    <div className="w-full mt-8 flex justify-center items-center">

     <Table data={data} />
    </div>
   </div>
  </div>
 )
}

export default MesinPemotongID

import Pic1 from '../../../public/assets/images/langkahKerja/tik/idCard/Picture1.png'
import Pic2 from '../../../public/assets/images/langkahKerja/tik/idCard/Picture2.png'
import Pic3 from '../../../public/assets/images/langkahKerja/tik/idCard/Picture3.png'
import Pic4 from '../../../public/assets/images/langkahKerja/tik/idCard/Picture4.png'



const data = [
 {
  id: 1,
  description: "Masukkan kertas yang akan digunakan untuk memotong ID Card (Ukuran Lebar ½ A4)",
  picture: Pic1,
 },
 {
  id: 2,
  description: "Posisikan kertas sesuai dengan posisi objek yang akan dipotong",
  picture: Pic2,
 },
 {
  id: 3,
  description: "Tekan tuas hingga kertas terpotong sempurna",
  picture: Pic3,
 },
 {
  id: 4,
  description: "Hasil akhir dari pemotong ID Card",
  picture: Pic4,
 }
]
