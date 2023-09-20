import ResponsiveDrawer from "@/app/dasbor/page";
import Masuk from "@/app/masuk/page";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { SessionProvider } from 'next-auth/react';
import { Link } from "react-router-dom";

const page = async () => {
  const session = await getServerSession(authOptions);
  // const namaInstansi = session?.user?.nama_instansi || ''; // Ambil nilai nama_instansi atau kosongkan jika tidak ada

  if(session?.user) {
    return (
      <div>
        <ResponsiveDrawer session={session} />
      </div>
    );
  }
  return (
    <div>
      <Masuk></Masuk>
    </div>
  )
};
export default page;