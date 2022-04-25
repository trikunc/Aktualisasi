import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import prisma from '../../../prisma/lib'
import { SearchInput } from '../../../components/Input'
import TableAsset from '../../../components/Table/TableAsset'
import { useRouter } from 'next/router'

export const getServerSideProps = async ({ req, res }) => {

 const tes = await prisma.Asset.findMany({
  where: {
   kejuruanId: 1,
  },
 }
 )
 // const data = await tes.json()
 // console.log(data)
 // const test = json(test2)
 // let session = await getSession(context)
 // let pengajars = await PengajarFunction.getAllPengajar()
 // let fungsionals = await FunctionalFunction.getAllFunctional()
 // let pembelajarans = await PembelajaranFunction.getAllPembelajaran()

 // console.log(pembelajarans)

 // return {
 //  props: {
 //   user: session.user,
 //   pengajars,
 //   fungsionals,
 //   pembelajarans
 //  }
 // }
 return { props: { data: JSON.parse(JSON.stringify(tes)) } }
}

const TIK1 = ({ data }) => {
 const [selectedFilter, setSelectedFilter] = useState(null)
 const [searchFilter, setSearchFilter] = useState('')

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
   return value.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
  })
 }
 const router = useRouter()
 const handleClick = (e) => {
  e.preventDefault()
  router.push("/admin/asset/addAsset")
 }



 return (
  <Layout>
   <div className="flex flex-col relative rounded shadow p-5 bg-white">
    <h2 className="text-3xl font-bold ">
     Daftar Aset Laboratorium TIK
    </h2>
    <div className="flex justify-end">
     <button onClick={handleClick} className="flex items-center py-1 px-2 rounded bg-primarypurple border bg-[#9AECDB] hover:bg-green-500 hover:text-white text-sm">
      + Tambah Aset baru
     </button>
    </div>

    <div className=" bg-slate-400 mt-6 p-2 flex flex-row justify-between">
     <SearchInput
      value={searchFilter}
      onChange={(event) => setSearchFilter(event.target.value)}
      onDelete={() => setSearchFilter('')}
     />
    </div>

    {/* <TableEntryPembelajaran data={filterPengajars()} pagefrom="index" /> */}
    <TableAsset data={filterPengajars()} />
   </div>
  </Layout>
 )
}

export default TIK1