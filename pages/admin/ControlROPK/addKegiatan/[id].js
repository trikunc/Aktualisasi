import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import prisma from '../../../../prisma/lib'
import { BootstrapInput } from '../../../../components/Input'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useRouter } from 'next/router'

export const getServerSideProps = async ({ params }) => {
 const Kegiatan = await prisma.Kegiatan.findUnique({
  where: {
   id: params?.id,
  }
 })

 return {
  props: {
   kegiatan: JSON.parse(JSON.stringify(Kegiatan)),
  },
 }
}

const AddKegiatan = ({ kegiatan }) => {
 const [name, setName] = useState(kegiatan.name);

 const router = useRouter()

 const submitData = async (e) => {
  e.preventDefault();
  try {
   const body = {
    name,
   };
   await fetch(`/api/ropk/kegiatan/${kegiatan.id}`, {
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
     Tambah KEGIATAN ROPK
    </h2>

    <div className="flex flex-wrap flex-col md:flex-row w-full mt-5">
     <div className="md:w-2/4 p-4">

      <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Kegiatan
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

export default AddKegiatan

