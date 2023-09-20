import { NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function getUser(req: Request, res: NextApiResponse) {
  try {
    // Your GET logic here

    res.status(200).json(db);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan dalam memproses permintaan" });
  }
}
