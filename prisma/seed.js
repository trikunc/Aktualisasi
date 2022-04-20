const { PrismaClient } = require('@prisma/client')
const Bcrypt = require('bcrypt');

// import { links } from '../data/links'

const prisma = new PrismaClient()

async function main() {
 await prisma.user.create({
  data: {
   name: 'Superadmin 1',
   nip: '199109232020121011',
   email: `abdelwahab@prisma.io`,
   passwords: Bcrypt.hashSync('password', 10),
   role: 'ADMIN'
  }
 })

 // await prisma.link.createMany({
 //   data: links
 // })
}

main()
 .catch((e) => {
  console.error(e)
  process.exit(1)
 })
 .finally(async () => {
  await prisma.$disconnect()
 })
