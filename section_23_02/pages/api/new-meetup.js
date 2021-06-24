// POST /api/new-meetup

import { MongoClient } from "mongodb";
import { MONGO_DB_URL } from '../../credential';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(MONGO_DB_URL)

    const db = client.db();

    const meetupsCollection = db.collection('udemycourse');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'meetup data inserted.' });
  }
};

export default handler;