import React from 'react'

import Navbar from '../../../components/Navbar'
import Table from '../../../components/Table/LangkahKerja'

function PressPin() {
 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Prosedur Langkah Kerja</h1>
    <h2 className="font-semibold text-2xl mt-2">Mesin Press Pin</h2>

    <div className="w-full mt-8 flex justify-center items-center">

     <Table data={data} />
    </div>
   </div>
  </div>
 )
}

export default PressPin

import Pic1 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture1.png'
import Pic2 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture2.png'
import Pic3 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture3.png'
import Pic4 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture4.png'
import Pic5 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture5.png'
import Pic6 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture6.png'
import Pic7 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture7.png'
import Pic8 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture8.png'
import Pic9 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture9.png'
import Pic10 from '../../../public/assets/images/langkahKerja/tik/PressPin/Picture10.png'


const data = [
 {
  id: 1,
  description: "Siapkan Moulding yang akan dipakai (4,4 cm atau 5,8 cm)",
  picture: Pic1,
 },
 {
  id: 2,
  description: "Pasang Handle Tangan",
  picture: Pic2,
 },
 {
  id: 3,
  description: "Pasang Moulding Atas, Pastikan tuas masuk sesuai lubang",
  picture: Pic3,
 },
 {
  id: 4,
  description: "Pasang Rail / Dudukan Moulding, pastikan besi pengunci dinaikkan sewaktu memasang rail",
  picture: Pic4,
 },
 {
  id: 5,
  description: "Pasang Moulding Bawah A dan B sesuai dengan Kode yang tertera di Rail",
  picture: Pic5,
 },
 {
  id: 6,
  description: "Pasang material pin berurutan mulai dari piringan seng, kertas yang telah di print, dan mika",
  picture: Pic6,
 },
 {
  id: 7,
  description: "Arahkan ke posisi Moulding A",
  picture: Pic7,
 },
 {
  id: 8,
  description: "Tekan hingga tuas kebawah",
  picture: Pic8,
 },
 {
  id: 9,
  description: "Pindahkan Rail ke Moulding B dan tekan sekali lagi",
  picture: Pic9,
 },
 {
  id: 10,
  description: "Hasil akhir dari pin",
  picture: Pic10,
 },
]
