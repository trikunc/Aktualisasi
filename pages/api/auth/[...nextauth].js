import { PrismaClient } from '@prisma/client'
import Bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient()

export default NextAuth({
 providers: [
  CredentialsProvider({
   name: 'Credentials',
   credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmuth' },
    password: { label: 'password', type: 'password' }
   },
   async authorize(credentials) {
    try {
     console.log('test')
     let user = await prisma.User.findUnique({
      where: {
       // deleted: false,
       // OR: [{ username: credentials.email }, { email: credentials.email }]
       // email: credentials.email
       nip: credentials.nip
      }
     })

     console.log('user==> ', user)
     console.log("credentials==? ", credentials)

     if (!user) return null

     let isSamePassword = Bcrypt.compareSync(credentials.password, user.passwords)
     if (!isSamePassword) return null

     return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
     }
    } catch (e) {
     console.log(e)
     return null
    }
   }
  })
 ],
 session: {
  jwt: true,
  maxAge: 1 * 24 * 60 * 60,
  updateAge: 1 * 24 * 60 * 60
 },
 secret: 'cobaduluaja',
 pages: {
  signIn: '/'
 },
 callbacks: {
  async jwt({ token, user }) {
   if (user) token.user = user
   return Promise.resolve(token)
  },
  async session({ session, token }) {
   session.user = token.user
   return Promise.resolve(session)
  }
 }
})
