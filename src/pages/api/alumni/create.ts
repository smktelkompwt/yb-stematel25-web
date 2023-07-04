import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/server/db/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  if (!body?.name || !body?.classId) {
    return res.status(400).json({ message: "Nama dan Kelas tidak ditemukan", data: null, success: false, error: null })
  }

  try {
    const alumni = {
      photos: body.photo || null,
      name: body.name,
      classId: body.classId,
    }
  
    await prisma.alumni.create({
      data: alumni
    })
  
    return res.status(200).json({ message: "Success", data: body, success: true, error: null })
  } catch (e) {
    return res.status(500).json({ message: "Failed", data: null, success: false, error: e })
  }

}

export default handler
