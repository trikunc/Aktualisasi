
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'POST') {
  return await addRopk(req, res)
 } else if (req.method === 'GET') {
  return await readRopk(req, res)
 } else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readRopk(req, res) {
 try {
  const allRopk = await prisma.Ropk.findMany()
  return res.status(200).json(allRopk, { success: true })
 } catch (error) {
  console.log(error)
  return res.status(500).json({ error: 'Error reading from database' }, { success: false })
 }
}

async function addRopk(req, res) {
 const body = req.body
 try {
  const newEntry = await prisma.Ropk.create({
   data: {
    monthId: body.monthId,
    subkegiatanId: body.subkegiatanId,
    rekening: body.rekening,
    nominal: body.nominal,
   }
  })
  return res.status(200).json(newEntry, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error adding ROPK', success: false })
 }
}
