import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar'

function Kejuruan() {
 const router = useRouter()
 const tik = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik')
 }

 const handleClick = (e) => {
  e.preventDefault()
  router.push(href)
 }


 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Kejuruan di BLKPP DIY</h1>

    <div className="flex items-center justify-center flex-wrap max-w-[100%]">

     <button onClick={tik} className="m-4 p-6 text-center  text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Teknologi Informasi dan Komunikasi</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Teknik Elektronika</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Teknik Listrik</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Kejuruan Pengelasan</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Perhotelan</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Garmen dan apparel</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Aneka Kerajinan</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Teknik Otomotif</h2>
     </button>

     <button className="m-4 p-6 text-center text-gray-500 no-underline border border-graybg-gray-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300" >
      <h2 className="text-xl">Bahasa Asing</h2>
     </button>

    </div>
   </div>
  </div>
 )
}

export default Kejuruan

