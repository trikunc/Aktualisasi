import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

import Navbar from '../../../components/Navbar'

function TIK() {
 const router = useRouter()
 const cutting = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik/CuttingSticker')
 }
 const hotPress = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik/HotPress')
 }
 const idCard = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik/MesinPemotongID')
 }
 const spiral = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik/MesinSpiral')
 }
 const pressPin = (e) => {
  e.preventDefault()
  router.push('/kejuruan/tik/PressPin')
 }


 return (
  <div className="h-screen w-screen bg-gray-500 bg-center bg-no-repeat bg-cover flex flex-col items-center relative">
   <Navbar />
   <div className="mt-28 rounded shadow w-[90%] p-8 bg-neutral-50">
    <h1 className="font-bold text-3xl">Kejuruan di BLKPP DIY</h1>

    <div className="flex items-center justify-center flex-wrap max-w-[100%]">

     <button onClick={cutting} className="m-4 p-6 text-center  text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Cutting Sticker</h2>
     </button>

     <button onClick={hotPress} className="m-4 p-6 text-center text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Hot Press</h2>
     </button>

     <button onClick={idCard} className="m-4 p-6 text-center text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Pemotong ID Card</h2>
     </button>

     <button onClick={spiral} className="m-4 p-6 text-center text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Mesin Spiral</h2>
     </button>

     <button onClick={pressPin} className="m-4 p-6 text-center text-indigo-500 no-underline border border-indigo-500 rounded-lg max-w-[300px] h-28 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300" >
      <h2 className="text-xl">Press Pin</h2>
     </button>

    </div>
   </div>
  </div>
 )
}

export default TIK

