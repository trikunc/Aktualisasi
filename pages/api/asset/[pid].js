import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'GET') {
  return await readBook(req, res)
 } else if (req.method === 'PUT') {
  return await updateBook(req, res)
 } else if (req.method === 'DELETE') {
  return await deleteAsset(req, res)
 }

 else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readBook(req, res) {
 const { pid } = req.query
 try {
  // const allBooks = await prisma.Asset.findMany()
  const book = await prisma.Asset.findUnique({
   where: {
    id: pid
   }
  })
  console.log('book==>', book)
  res.status(200).json(book, { success: true })
 } catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Error reading from database' }, { success: false })
 }
}

async function updateBook(req, res) {
 const body = req.body
 const { pid } = req.query
 try {
  const updateNewBook = await prisma.Asset.update({
   where: {
    id: pid
   },
   data: {
    name: body.name,
    brand: body.brand,
    type: body.type,
    dimension: body.dimension,
    material: body.material,
    year: body.year,
    price: body.price,
    from: body.from,
    condition: body.condition,
    note: body.note
   }
  })
  const bookWithoutStamp = exclude(updateNewBook, 'createdAt', 'updatedAt')
  // console.log('bookWithoutStamp==> ', exclude(updateNewBook, 'createdAt', 'updatedAt'))
  return res.status(200).json(bookWithoutStamp, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error adding book', success: false })
 }
}

async function deleteAsset(req, res) {
 const { pid } = req.query
 try {
  const post = await prisma.Asset.delete({
   where: { id: pid },
  });
  console.log('deleteAsset==>', post)
  res.status(200).json(post, { success: true })
 } catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Error Delete from database' }, { success: false })
 }
}

function exclude(user, ...keys) {
 for (const key of keys) {
  delete user[key]
 }
 return user
}
