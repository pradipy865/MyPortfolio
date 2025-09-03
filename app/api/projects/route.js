import { NextResponse } from "next/server"
import { getDb } from "../../../lib/mongodb"

const fallback = [
  {
    title: "TaskMaster",
    description: "Full-stack task manager with auth, filters, and real-time updates.",
    tags: ["MERN", "Auth", "Realtime"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "DevNotes",
    description: "Markdown notes app with search and tagging.",
    tags: ["React", "Express", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ShopLite",
    description: "Minimal e-commerce prototype with cart and checkout.",
    tags: ["Next.js", "API", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
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
