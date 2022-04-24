
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'POST') {
  return await addBook(req, res)
 } else if (req.method === 'GET') {
  return await readBooks(req, res)
 } else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readBooks(req, res) {
 try {
  const allBooks = await prisma.Asset.findMany()
  return res.status(200).json(allBooks, { success: true })
 } catch (error) {
  console.log(error)
  return res.status(500).json({ error: 'Error reading from database' }, { success: false })
 }
}

async function addBook(req, res) {
 const body = req.body
 try {
  const newEntry = await prisma.Asset.create({
   data: {
    name: body.name,
    brand: body.brand,
    type: body.type,
    dimension: body.dimension,
    material: body.material,
    sum: body.sum,
    year: body.year,
    price: body.price,
    from: body.from,
    condition: body.condition,
    goodCondition: body.goodCondition,
    kejuruanId: body.kejuruanId,
    note: body.note
   }
  })
  return res.status(200).json(newEntry, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error adding asset', success: false })
 }
}
