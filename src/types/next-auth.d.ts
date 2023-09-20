import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface User {
        nama_instansi: string,
        // no_sk: string,
    }
    interface Session {
        user: User & {
            nama_instansi: string,
            // no_sk: string,
        }
        token: {
            nama_instansi: string,
            // no_sk: string,
        }
    }
}