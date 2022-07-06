import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import NavMin from '../../components/Navbar/NavMin'
import Navbar from '../../components/Navbar'
import TableRopkControll from '../../components/Table/TabelRopkControll'


const About = () => {

 return (
  <div className=" w-screen bg-[#f5cd79]/50 bg-center bg-no-repeat bg-cover flex flex-col relative">
   {/* <NavMin /> */}
   <Navbar light={true} />
   <div className="mt-10 flex flex-col items-center font-serif">
    <h1 className="mb-4 font-extrabold text-5xl z-50">Balai Latihan Kerja dan Pengembangan Produktivitas (BLKPP) DIY</h1>
    <h3>Dinas Tenaga Kerja dan Transmigrasi berdasarkan Peraturan Gubernur (PERGUB) nomor 92 tahun 2018  memiliki Unit  Pelaksana  Teknis  yang  selanjutnya  disingkat  UPT, salah satunya adalah Balai Latihan Kerja dan Pengembangan Produktivitas (BLKPP).
    </h3>
    <h3>BLKPP mempunyai tugas melaksanakan tugas teknis operasional dan/atau kegiatan teknis penunjang tertentu dinas tenaga kerja dan transmigrasi di bidang pelatihan kerja dan pengembangan produktivitas tenaga kerja untuk meningkatkan persentase jumlah lulusan pelatihan yang terampil.
    </h3>
   </div>
  </div>
 )
}

export default About
