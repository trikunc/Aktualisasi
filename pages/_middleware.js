import { NextResponse } from "next/server"
import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"

let middleware = async (req, ev) => {
 let session = await getToken({ req, secret: process.env.AUTH_SECRET })
 return NextResponse.next()
}

export default middleware