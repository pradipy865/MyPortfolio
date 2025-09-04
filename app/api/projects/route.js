import { NextResponse } from "next/server"
import { getDb } from "../../../lib/mongodb"

const fallback = [
  {
    title: "Medi Quik",
    description: "Full-stack task manager with auth, filters, and real-time updates.",
    tags: ["MERN", "Auth", "Realtime"],
    githubUrl: "https://github.com/pradipy865/MediWebApp",
    liveUrl: "https://medi-quick-vk36.vercel.app/",
     image: "/medi-quik.png", 
  },
  {
    title: "Chat App",
    description: "Real time Chat Application",
    tags: ["React", "Express", "MongoDB"],
    githubUrl: "https://github.com/pradipy865/ChitchatApp",
    
  },
  
]

export async function GET() {
  try {
    const db = await getDb()
    if (!db) return NextResponse.json({ projects: fallback })
    const projects = await db.collection("projects").find({}).sort({ _id: -1 }).limit(24).toArray()
    return NextResponse.json({ projects })
  } catch {
    return NextResponse.json({ projects: fallback }, { status: 200 })
  }
}
