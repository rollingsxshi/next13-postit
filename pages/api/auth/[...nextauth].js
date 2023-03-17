import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import client from "../../../prisma/client"

export const authOptions = {
    adapter: PrismaAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID, // rollingsxshi google acc
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
}

export default NextAuth(authOptions)