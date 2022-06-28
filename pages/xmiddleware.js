// import { NextResponse } from 'next/server'
// import { getToken } from 'next-auth/jwt'

// import RouteName from '../utils/RouteName'

// let middleware = async (req, res) => {
//  let session = await getToken({ req, secret: process.env.AUTH_SECRET })
//  if (session?.user?.roleId !== 1) {
//   console.log('redirect')
//   return NextResponse.redirect(`http://localhost:3000/`)
//  }

//  return NextResponse.next()
// }

// export default middleware

// import { NextResponse } from "next/server"
// import { getSession } from "next-auth/react"
// import { getToken } from "next-auth/jwt"

// let middleware = async (req, ev) => {
//  let session = await getToken({ req, secret: process.env.AUTH_SECRET })
//  return NextResponse.next()
// }

// export default middleware 