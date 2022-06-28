import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handler(req, res) {
 if (req.method === 'GET') {
  return await readSubKegiatan(req, res)
 } else if (req.method === 'PUT') {
  return await updateSubKegiatan(req, res)
 } else if (req.method === 'DELETE') {
  return await deleteSubkegiatan(req, res)
 }

 else {
  return res.status(405).json({ message: 'Method not allowed', success: false })
 }
}

async function readSubKegiatan(req, res) {
 const { pid } = req.query
 try {
  const book = await prisma.Subkegiatan.findUnique({
   where: {
    id: pid
   }
  })
  res.status(200).json(book, { success: true })
 } catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Error reading Subkegiatan' }, { success: false })
 }
}

async function updateSubKegiatan(req, res) {
 const body = req.body
 const { pid } = req.query
 try {
  const updateNewBook = await prisma.Subkegiatan.update({
   where: {
    id: pid
   },
   data: {
    name: body.name,
    deadline: body.deadline,
   }
  })
  const bookWithoutStamp = exclude(updateNewBook, 'createdAt', 'updatedAt')
  // console.log('bookWithoutStamp==> ', exclude(updateNewBook, 'createdAt', 'updatedAt'))
  return res.status(200).json(bookWithoutStamp, { success: true })
 } catch (error) {
  console.error('Request error', error)
  res.status(500).json({ error: 'Error update Subkegiatan ', success: false })
 }
}

async function deleteSubkegiatan(req, res) {
 const { pid } = req.query
 try {
  const post = await prisma.Subkegiatan.delete({
   where: { id: pid },
  });
  console.log('deleteSubkegiatan==>', post)
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
