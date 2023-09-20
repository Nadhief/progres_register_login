import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter( db ),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/masuk',
    }, 
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                if(!credentials?.email || !credentials.password){
                    return null;
                } 
                const user = await db.user.findUnique({
                    where: { email: credentials?.email}
                })
                if (!user) {
                    return null
                }

                const passwordMatch = await compare(credentials.password, user.userPassword)

                if(!passwordMatch) {
                    return null
                }
                return {
                    id: `${user.id}`,
                    nama_instansi: `${user.nama_instansi}`,
                    // no_sk:`${user.no_sk}`
                  };
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user }){
            console.log(token, user)

            if(user){
                return {
                    ...token,
                    nama_instansi: user.nama_instansi,
                    // no_sk: user.no_sk,
                }
            }
            return token
        },
        async session({ session, user, token}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    nama_instansi: token.nama_instansi,
                    // no_sk: token.no_sk,
                }
            }
        }
    }
}

// callbacks: {
//     async jwt ({ token, user }){
//         console.log(token, user)

//         if(user){
//             return {
//                 ...token,
//                 nama_instansi: user.nama_instansi,
//                 alamat: user.alamat,
//                 no_sk: user.no_sk,
//                 no_telp: user.no_telp,
//                 imageProfile: user.imageProfile
//             }
//         }
//         return token
//     },
//     async session({ session, user, token}) {
//         return {
//             ...session,
//             user: {
//                 ...session.user,
//                 nama_instansi: token.nama_instansi,
//                 alamat: token.alamat,
//                 no_sk: token.no_sk,
//                 no_telp: token.no_telp,
//                 imageProfile: token.imageProfile
//             }
//         }
//     }
// }

// return {
//     id: `${user.id}`,
//     nama_instansi: `${user.nama_instansi}`,
//     email: `${user.email}`,
//     alamat: `${user.alamat}`,
//     no_sk: `${user.no_sk}`,
//     no_telp: `${user.no_telp}`,
//     imageProfile: `${user.imageProfile}`
//   };