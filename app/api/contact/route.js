import { NextResponse } from "next/server"
import { getDb } from "../../../lib/mongodb"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const doc = {
      name: String(name).slice(0, 120),
      email: String(email).slice(0, 200),
      message: String(message).slice(0, 5000),
      createdAt: new Date(),
    }

    const db = await getDb()
    if (db) await db.collection("messages").insertOne(doc)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
