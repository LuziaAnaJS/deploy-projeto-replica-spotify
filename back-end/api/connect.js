// JavaScript Assincrono
// await async
// FullFilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://projetoSpotify:projetoSpotify123@cluster0.ihpwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projetoSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
