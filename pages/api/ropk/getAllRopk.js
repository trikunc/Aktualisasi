
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'GET') {
  return await readRopk(req, res)
 } else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readRopk(req, res) {
 try {
  let jsonarray = {}
  const allRopk = await prisma.Ropk.findMany()
  const allSubkegiatan = await prisma.Subkegiatan.findMany()
  return res.status(200).json(allRopk, { success: true })
 } catch (error) {
  console.log(error)
  return res.status(500).json({ error: 'Error reading from database' }, { success: false })
 }
}
