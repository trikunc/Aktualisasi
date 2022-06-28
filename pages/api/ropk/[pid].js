import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'GET') {
  return await readBook(req, res)
 } else if (req.method === 'PUT') {
  return await updateRopk(req, res)
 } else if (req.method === 'DELETE') {
  return await deleteRopk(req, res)
 }

 else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readBook(req, res) {
 const { pid } = req.query
 try {
  // const allBooks = await prisma.Ropk.findMany()
  const book = await prisma.Ropk.findUnique({
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

async function updateRopk(req, res) {
 const body = req.body
 const { pid } = req.query
 try {
  const updateNewBook = await prisma.Ropk.update({
   where: {
    id: pid
   },
   data: {
    monthId: body.monthId,
    subkegiatanId: body.subkegiatanId,
    rekening: body.rekening,
    nominal: body.nominal,
   }
  })
  const bookWithoutStamp = exclude(updateNewBook, 'createdAt', 'updatedAt')
  // console.log('bookWithoutStamp==> ', exclude(updateNewBook, 'createdAt', 'updatedAt'))
  return res.status(200).json(bookWithoutStamp, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error update ropk', success: false })
 }
}

async function deleteRopk(req, res) {
 const { pid } = req.query
 try {
  const post = await prisma.Ropk.delete({
   where: { id: pid },
  });
  console.log('pid==>', pid)
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
