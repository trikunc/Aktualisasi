
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'POST') {
  return await addMonth(req, res)
 } else if (req.method === 'GET') {
  return await readMonth(req, res)
 } else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readMonth(req, res) {
 try {
  const allMonth = await prisma.Month.findMany()
  return res.status(200).json(allRopk, { success: true })
 } catch (error) {
  console.log(error)
  return res.status(500).json({ error: 'Error reading from database' }, { success: false })
 }
}

async function addMonth(req, res) {
 const body = req.body
 try {
  const newEntry = await prisma.Month.create({
   data: {
    name: body.name,
   }
  })
  return res.status(200).json(newEntry, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error adding Month', success: false })
 }
}
