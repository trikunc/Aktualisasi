import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import prisma from '../../../../prisma/lib'
import { BootstrapInput } from '../../../../components/Input'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useRouter } from 'next/router'

export const getServerSideProps = async ({ params }) => {
 const SubKegiatan = await prisma.Subkegiatan.findUnique({
  where: {
   id: params?.id,
  }
 })
 const Kegiatan = await prisma.Kegiatan.findMany()
 return {
  props: {
   subkegiatan: JSON.parse(JSON.stringify(SubKegiatan)),
   kegiatan: JSON.parse(JSON.stringify(Kegiatan)),

  },
 }
}

const AddSubKegiatan = ({ subkegiatan, kegiatan }) => {
 const [kegiatanId, setKegiatanId] = useState(subkegiatan.kegiatanId);
 const [name, setName] = useState(subkegiatan.name);

 const router = useRouter()

 const submitData = async (e) => {
  e.preventDefault();
  try {
   const body = {
    name,
    kegiatanId,
   };
   await fetch(`/api/ropk/subkegiatan/${subkegiatan.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
   });
   await router.push('/admin/ControlROPK');
  } catch (error) {
   console.error(error);
  }
 };


 return (
  <Layout>
   <div className="flex flex-col relative rounded shadow p-5 bg-white">
    <h2 className="text-3xl font-bold ">
     Tambah ROPK BLKPP DIY
    </h2>

    <div className="flex flex-wrap flex-col md:flex-row w-full mt-5">
     <div className="md:w-2/4 p-4">

      <div className="mt-4">
       <InputLabel
        className="my-2 text-black"
        id="demo-simple-select-standard-label"
       >
        Kegiatan
       </InputLabel>
       <FormControl
        sx={{ minWidth: 120, minHeight: 33, boxSizing: 'inherit' }}
       >
        <Select
         labelId="demo-simple-select-standard-label"
         id="demo-simple-select-standard"
         value={kegiatanId}
         onChange={(e) => setKegiatanId(e.target.value)}
         input={<BootstrapInput />}
        >
         {kegiatan.map((item, index) => {
          return <MenuItem key={`gender-item-${index}`} value={item.id}>{item.name}</MenuItem>
         })}
        </Select>
       </FormControl>
      </div>

      <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Sub Kegiatan
       </InputLabel>
       <TextField
        id="input_rekening"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-white"
       />
      </div>

     </div>

     <div className="md:w-2/4 p-4">

      <div className="mt-4">
       <div className="flex flex-row">
        <div>
         <button onClick={submitData} className={`flex items-center justify-center rounded w-36 bg-green-500 text-white text-sm mx-3 mb-5 px-3 py-1`}

         >
          Update Data
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>


   </div>
  </Layout>
 )
}

export default AddSubKegiatan

