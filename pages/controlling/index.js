import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import TableRopkControll from '../../components/Table/TabelRopkControll'
import prisma from '../../prisma/lib'

export const getServerSideProps = async ({ req, res }) => {
 const tes = await prisma.Ropk.findMany({
  where: {
   monthId: "6",
  },
 })
 const Month = await prisma.Month.findMany()
 const Kegiatan = await prisma.Kegiatan.findMany()
 const Subkegiatan = await prisma.Subkegiatan.findMany()
 return {
  props: {
   data: JSON.parse(JSON.stringify(tes)),
   kegiatan: JSON.parse(JSON.stringify(Kegiatan)),
   subkegiatan: JSON.parse(JSON.stringify(Subkegiatan)),
   month: JSON.parse(JSON.stringify(Month)),
  },
 }
}


const Control = ({ data, kegiatan, subkegiatan, month }) => {
 const [selectedFilter, setSelectedFilter] = useState(null)
 const [searchFilter, setSearchFilter] = useState('')

 let filterPengajars = () => {
  if (!selectedFilter && searchFilter === '') return data
  let filtered = data

  if (selectedFilter) {
   filtered = data.filter((value) => {
    return value.name === selectedFilter
   })
  }

  if (searchFilter === '') return filtered

  return filtered.filter((value) => {
   return value.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
  })
 }
 console.log("data: ", data)
 return (
  <div className="h-screen w-screen bg-[#f8a5c2] bg-center bg-no-repeat bg-cover flex flex-col relative">
   <Navbar />
   <div className="mt-28 flex flex-col items-center">
    <h1 className="mb-4 text-bold text-5xl">Juni</h1>
    <TableRopkControll data={filterPengajars()} kegiatan={kegiatan} subkegiatan={subkegiatan} month={month} />
   </div>
  </div>
 )
}

export default Control
