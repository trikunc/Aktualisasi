import React from 'react'

import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table/LangkahKerja'

function MesinSpiral() {
 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Prosedur Langkah Kerja</h1>
    <h2 className="font-semibold text-2xl mt-2">Mesin Spiral</h2>

    <div className="w-full mt-8 flex justify-center items-center">

     <Table data={data} />
    </div>
   </div>
  </div>
 )
}

export default MesinSpiral

import Pic1 from '../../../public/assets/images/langkahKerja/tik/spiral/Picture1.png'
import Pic2 from '../../../public/assets/images/langkahKerja/tik/spiral/Picture2.png'
import Pic3 from '../../../public/assets/images/langkahKerja/tik/spiral/Picture3.png'
import Pic4 from '../../../public/assets/images/langkahKerja/tik/spiral/Picture4.png'



const data = [
 {
  id: 1,
  description: "Masukkan Kertas yang akan di buat jilid spiral",
  picture: Pic1,
 },
 {
  id: 2,
  description: "Posisi besi yang di tarik ialah posisi yang tidak melubangi, posisikan sesuai kebutuhan",
  picture: Pic2,
 },
 {
  id: 3,
  description: "Tekan tuas untuk melubangi kertas yang telah dimasukkan",
  picture: Pic3,
 },
 {
  id: 4,
  description: "Hasil akhir dari mesin spiral",
  picture: Pic4,
 }
]
