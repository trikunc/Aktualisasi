import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import prisma from '../../../prisma/lib'
import { SearchInput } from '../../../components/Input'
import TableAsset from '../../../components/Table/TableAsset'

export const getServerSideProps = async ({ req, res }) => {
 const tes = await prisma.Asset.findMany()
 return { props: { data: JSON.parse(JSON.stringify(tes)) } }
}

const AddAsset = () => {

 return (
  <Layout>
   <div className="flex flex-col relative rounded shadow p-5 bg-white">
    <h2 className="text-3xl font-bold ">
     Tambah Aset BLKPP DIY
    </h2>


   </div>
  </Layout>
 )
}

export default AddAsset