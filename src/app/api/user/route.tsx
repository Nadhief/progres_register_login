import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nama_instansi, email, no_sk, userPassword, imageProfile, no_telp, alamat, setuju, is_verifikasi, is_role } = body;

        // cek email sudah tersedia atau belum
        const cek_email = await db.user.findUnique({
            where: { email: email }
        });
        if (cek_email) {
            return NextResponse.json({ user: null, message: "Email sudah digunakan" }, { status: 409 });
        }
        const hashedPassword = await hash(userPassword, 10);
        const newUser = await db.user.create({
            data: {
                nama_instansi,
                email,
                no_sk,
                userPassword: hashedPassword,
                imageProfile: imageProfile,
                no_telp: no_telp,
                alamat: alamat,
                setuju,
                is_verifikasi: 0,
                is_role: 0,
            }
        });
        return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error(error); // Menampilkan kesalahan ke konsol untuk debugging
        return NextResponse.json({ error: "Terjadi kesalahan dalam memproses permintaan" }, { status: 500 });
    }
}


