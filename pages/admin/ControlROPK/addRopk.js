import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import prisma from '../../../prisma/lib'
import { BootstrapInput } from '../../../components/Input'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useRouter } from 'next/router'

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

const AddRopk = ({ kegiatan, subkegiatan, month }) => {
 const [monthId, setMonthId] = useState(null);
 const [kegiatanId, setKegiatanId] = useState(null);
 const [subkegFilter, setSubkegFiler] = useState(null);
 const [subkegiatanId, setSubkegiatanId] = useState(null);
 const [rekening, setRekening] = useState("");
 const [nominal, setNominal] = useState();

 const router = useRouter()

 const submitData = async (e) => {
  e.preventDefault();
  try {
   const body = {
    monthId,
    subkegiatanId,
    rekening,
    nominal: parseInt(nominal)
   };
   await fetch('/api/ropk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
   });
   await router.push('/admin/ControlROPK');
  } catch (error) {
   console.error(error);
  }
 };


 // let reduced = []
 // subkegiatan.forEach(function (option) {
 //  if (option.kegiatanId == kegiatanId) {
 //   var someNewValue = { name: option.name, newProperty: 'Foo' }
 //   reduced.push(someNewValue);
 //  }
 // });

 // setSubkegFiler(() => reduced)

 let filterSubKegiatan = () => {
  if (kegiatanId === null) return [];
  let filtered = subkegiatan

  // if (selectedFilter) {
  //  filtered = data.filter((value) => {
  //   return value.name === selectedFilter
  //  })
  // }

  // if (searchFilter === '') return filtered
  console.log("kegiatanId==>", kegiatanId)
  console.log("filter==>", filtered)

  return filtered.filter((value) => {
   return value.kegiatanId === kegiatanId
  })

 }



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
        Bulan
       </InputLabel>
       <FormControl
        sx={{ minWidth: 120, minHeight: 33, boxSizing: 'inherit' }}
       >
        <Select
         labelId="demo-simple-select-standard-label"
         id="demo-simple-select-standard"
         value={monthId}
         onChange={(e) => setMonthId(e.target.value)}
         input={<BootstrapInput />}
        >
         {month.map((item, index) => {
          return <MenuItem key={`gender-item-${index}`} value={item.id}>{item.name}</MenuItem>
         })}
        </Select>
       </FormControl>
      </div>


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
       <InputLabel
        className="my-2 text-black"
        id="demo-simple-select-standard-label"
       >
        Sub Kegiatan
       </InputLabel>
       <FormControl
        sx={{ minWidth: 120, minHeight: 33, boxSizing: 'inherit' }}
       >
        <Select
         labelId="demo-simple-select-standard-label"
         id="demo-simple-select-standard"
         value={subkegiatanId}
         onChange={(e) => setSubkegiatanId(e.target.value)}
         input={<BootstrapInput />}
        >
         {filterSubKegiatan().map((item, index) => {
          return <MenuItem key={`gender-item-${index}`} value={item.id}>{item.name}</MenuItem>
         })}
        </Select>
       </FormControl>
      </div>

      {/* <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Kegiatan
       </InputLabel>
       <TextField
        id="input_kegiatan"
        value={kegiatan}
        onChange={(e) => setKegiatan(e.target.value)}
        className="w-full bg-white"
       />
      </div> */}

      {/* <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Sub Kegiatan
       </InputLabel>
       <TextField
        id="input_subkegiatan"
        value={subkegiatan}
        onChange={(e) => setSubkegiatan(e.target.value)}
        className="w-full bg-white"
       />
      </div> */}
      <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Rekening
       </InputLabel>
       <TextField
        id="input_rekening"
        value={rekening}
        onChange={(e) => setRekening(e.target.value)}
        className="w-full bg-white"
       />
      </div>
      <div className="mt-4">
       <InputLabel className="my-2 text-black" htmlFor="input_user">
        Nominal
       </InputLabel>
       <TextField
        id="input_nominal"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        className="w-full bg-white"
        type="number"
       />
      </div>

     </div>

     <div className="md:w-2/4 p-4">

      <div className="mt-4">
       <div className="flex flex-row">
        <div>
         <button onClick={submitData} className={`flex items-center justify-center rounded w-36 bg-green-500 text-white text-sm mx-3 mb-5 px-3 py-1`}

         >
          Simpan Data
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

export default AddRopk

