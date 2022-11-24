// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import nc from "next-connect"


type Data = {
  David: number,
  Milena: number,
  total: number,
}

interface dataType {
  name: string,
  puntaje: number,
  
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.DB_NAME as string);
  const collection = db.collection(process.env.COLLECTION_NAME as string);

  const body : dataType = req.body as dataType;

  await collection.insertOne(body);

  const data = await collection.find().toArray();

  const davidData = data.filter((item) => item.name === "David")
  const milenaData = data.filter((item) => item.name === "Milena")

  const davidPuntaje = davidData.reduce((acc, item) => acc + item.puntaje, 0)
  const milenaPuntaje = milenaData.reduce((acc, item) => acc + item.puntaje, 0)

 


  //check type of request
 
  await client.close();  

  res.status(200).json({ David: davidPuntaje, Milena: milenaPuntaje , total: davidPuntaje + milenaPuntaje})
}
