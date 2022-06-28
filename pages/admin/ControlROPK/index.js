import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import prisma from '../../../prisma/lib'
import { SearchInput } from '../../../components/Input'
import TableAsset from '../../../components/Table/TableAsset'
import { useRouter } from 'next/router'
import TableRopk from '../../../components/Table/TableRopk'
import TableKegiatan from '../../../components/Table/TabelKegiatan'
import TableSubKegiatan from '../../../components/Table/TabelSubKegiatan'

export const getServerSideProps = async ({ req, res }) => {

 const tes = await prisma.Ropk.findMany()
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

const Controlling = ({ data, kegiatan, subkegiatan, month }) => {

 const [selectedFilter, setSelectedFilter] = useState(null)
 const [searchFilter, setSearchFilter] = useState('')

 const [selectedFilterKegiatan, setSelectedFilterKegiatan] = useState(null)
 const [searchFilterKegiatan, setSearchFilterKegiatan] = useState('')

 const [selectedFilterSubKegiatan, setSelectedFilterSubKegiatan] = useState(null)
 const [searchFilterSubKegiatan, setSearchFilterSubKegiatan] = useState('')

 const handleChange = (event) => {
  setSelectedFilter(event.target.value);
 };

 const __handleResetFilter = () => {
  setSelectedFilter(null)
  // TODO : Reset data
 }

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
   return value.rekening.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
  })
 }

 let filterKegiatan = () => {
  if (!selectedFilterKegiatan && searchFilterKegiatan === '') return kegiatan
  let filtered = kegiatan

  if (selectedFilterKegiatan) {
   filtered = kegiatan.filter((value) => {
    return value.name === selectedFilterKegiatan
   })
  }

  if (searchFilterKegiatan === '') return filtered

  return filtered.filter((value) => {
   return value.name.toLowerCase().indexOf(searchFilterKegiatan.toLowerCase()) > -1
  })
 }

 let filterSubKegiatan = () => {
  if (!selectedFilterSubKegiatan && searchFilterSubKegiatan === '') return subkegiatan
  let filtered = subkegiatan

  if (selectedFilterSubKegiatan) {
   filtered = subkegiatan.filter((value) => {
    return value.name === selectedFilterSubKegiatan
   })
  }

  if (searchFilterSubKegiatan === '') return filtered

  return filtered.filter((value) => {
   return value.name.toLowerCase().indexOf(searchFilterSubKegiatan.toLowerCase()) > -1
  })
 }

 console.log("kegiatan==> ", kegiatan)

 const router = useRouter()
 const routeTo = '/admin/asset/Tik'
 const handleClick = (e) => {
  e.preventDefault()
  router.push("/admin/ControlROPK/addRopk")
 }
 const handleAddKegiatan = (e) => {
  e.preventDefault()
  router.push("/admin/ControlROPK/addKegiatan")
 }
 const handleAddSubKegiatan = (e) => {
  e.preventDefault()
  router.push("/admin/ControlROPK/addSubKegiatan")
 }

 return (
  <Layout>
   <div className="flex flex-col relative rounded shadow p-5 bg-white">
    <h2 className="text-3xl font-bold ">
     Controlling ROPK
    </h2>
    <div className="flex justify-end">
     <button onClick={handleClick} className="flex items-center py-1 px-2 rounded bg-primarypurple border bg-[#9AECDB] hover:bg-green-500 hover:text-white text-sm">
      + Tambah ROPK baru
     </button>
    </div>

    <div className=" bg-slate-400 mt-6 p-2 flex flex-row justify-between">
     <SearchInput
      value={searchFilter}
      onChange={(event) => setSearchFilter(event.target.value)}
      onDelete={() => setSearchFilter('')}
     />
    </div>

    <TableRopk data={filterPengajars()} kegiatan={kegiatan} subkegiatan={subkegiatan} month={month} />


    <div className="flex justify-end mt-10">
     <button onClick={handleAddKegiatan} className="flex items-center py-1 px-2 rounded bg-primarypurple border bg-[#9AECDB] hover:bg-green-500 hover:text-white text-sm">
      + Tambah Kegiatan baru
     </button>
    </div>

    <div className=" bg-slate-400 mt-6 p-2 flex flex-row justify-between">
     <SearchInput
      value={searchFilter}
      onChange={(event) => setSearchFilterKegiatan(event.target.value)}
      onDelete={() => setSearchFilterKegiatan('')}
     />
    </div>

    <TableKegiatan data={filterKegiatan()} />

    <div className="flex justify-end mt-10">
     <button onClick={handleAddSubKegiatan} className="flex items-center py-1 px-2 rounded bg-primarypurple border bg-[#9AECDB] hover:bg-green-500 hover:text-white text-sm">
      + Tambah Subkegiatan baru
     </button>
    </div>

    <div className=" bg-slate-400 mt-6 p-2 flex flex-row justify-between">
     <SearchInput
      value={searchFilter}
      onChange={(event) => setSearchFilter(event.target.value)}
      onDelete={() => setSearchFilter('')}
     />
    </div>

    <TableSubKegiatan data={filterSubKegiatan()} kegiatan={kegiatan} />
   </div>
  </Layout>
 )
}

export default Controlling