import React from 'react'
import Masuk from "@/app/masuk/page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { SessionProvider } from 'next-auth/react';
import { Link } from "react-router-dom";
import ResponsiveDrawer from '@/app/dasbor/profile/page';

const page = async () => {
    const session = await getServerSession(authOptions);
    if(session?.user){
        return (
            <div>
            <ResponsiveDrawer session={session}></ResponsiveDrawer>
            </div>
        )
    }
    return (
        <div>
          <Masuk></Masuk>
          {/* <Link to="/">Kembali ke Halaman Utama</Link>/ */}
        </div>
      )
}

export default page
