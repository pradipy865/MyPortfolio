import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
if (!global._mongo) global._mongo = { client: null, promise: null }

export async function getDb() {
  if (!uri) return null
  if (global._mongo.client) return global._mongo.client.db()

  if (!global._mongo.promise) {
    global._mongo.promise = MongoClient.connect(uri, { maxPoolSize: 5 }).then((client) => {
      global._mongo.client = client
      return client
    })
  }
  const client = await global._mongo.promise
  return client.db()
}
