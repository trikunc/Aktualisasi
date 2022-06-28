import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'GET') {
  return await readKegiatan(req, res)
 } else if (req.method === 'PUT') {
  return await updateKegiatan(req, res)
 } else if (req.method === 'DELETE') {
  return await deletekegiatan(req, res)
 }

 else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readKegiatan(req, res) {
 const { pid } = req.query
 try {
  const book = await prisma.Kegiatan.findUnique({
   where: {
    id: parseInt(pid)
   }
  })
  res.status(200).json(book, { success: true })
 } catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Error reading Kegiatan' }, { success: false })
 }
}

async function updateKegiatan(req, res) {
 const body = req.body
 const { pid } = req.query
 try {
  const updateNewBook = await prisma.Kegiatan.update({
   where: {
    id: pid
   },
   data: {
    name: body.name,
   }
  })
  const bookWithoutStamp = exclude(updateNewBook, 'createdAt', 'updatedAt')
  // console.log('bookWithoutStamp==> ', exclude(updateNewBook, 'createdAt', 'updatedAt'))
  return res.status(200).json(bookWithoutStamp, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error update Kegiatan ', success: false })
 }
}

async function deletekegiatan(req, res) {
 const { pid } = req.query
 try {
  const post = await prisma.Kegiatan.delete({
   where: { id: pid },
  });
  console.log('deletekegiatan==>', post)
  res.status(200).json(post, { success: true })
 } catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Error Delete Subkegiatan' }, { success: false })
 }
}

function exclude(user, ...keys) {
 for (const key of keys) {
  delete user[key]
 }
 return user
}
