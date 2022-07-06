import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import NavMin from '../../components/Navbar/NavMin'
import Navbar from '../../components/Navbar'
import TableRopkControll from '../../components/Table/TabelRopkControll'
import prisma from '../../prisma/lib'

export const getServerSideProps = async ({ req, res }) => {
 let monthCheck = moment().format('M');

 let month = parseInt(monthCheck) + 1
 const tes = await prisma.Ropk.findMany({
  where: {
   monthId: `${month}`,
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
 let monthCheck = moment().format('M');

 console.log("monthCheck==> ", monthCheck)

 let sortMonth = month.sort(function (a, b) {
  return a.id - b.id || a.name.localeCompare(b.name);
 });


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

 const divRef = useRef(null);

 useEffect(() => {
  divRef.current.scrollIntoView({ behavior: 'smooth' });
 });
 // console.log("data: ", data)
 return (
  <div className=" w-screen bg-[#f5cd79]/50 bg-center bg-no-repeat bg-cover flex flex-col relative" ref={divRef}>
   {/* <NavMin /> */}
   <Navbar light={true} />
   <div className="mt-10 flex flex-col items-center font-serif">
    <h1 className="mb-4 font-extrabold text-5xl z-50">{sortMonth[parseInt(monthCheck) - 1].name}</h1>
    <TableRopkControll data={filterPengajars()} kegiatan={kegiatan} subkegiatan={subkegiatan} month={sortMonth} />
   </div>
  </div>
 )
}

export default Control
