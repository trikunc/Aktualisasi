
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'POST') {
  return await addSubKegiatan(req, res)
 } else if (req.method === 'GET') {
  return await readSubKegiatan(req, res)
 } else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readSubKegiatan(req, res) {
 try {
  const allMonth = await prisma.Subkegiatan.findMany()
  return res.status(200).json(allRopk, { success: true })
 } catch (error) {
  console.log(error)
  return res.status(500).json({ error: 'Error read Sub Kegiatan from database' }, { success: false })
 }
}

async function addSubKegiatan(req, res) {
 const body = req.body
 try {
  const newEntry = await prisma.Subkegiatan.create({
   data: {
    name: body.name,
    kegiatanId: body.kegiatanId,
   }
  })
  return res.status(200).json(newEntry, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error adding Sub Kegiatan', success: false })
 }
}
