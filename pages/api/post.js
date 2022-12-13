import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createPost(req, res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function createPost(req, res) {
  const { coverImage, tag, slug, summary, title, content } = req.body
  try {
    const newPost = await prisma.post.create({
      data: {
        coverImage,
        tag,
        slug,
        summary,
        title,
        content,
      },
    })
    return res.status(200).json(newPost, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}
