import { MongoClient } from 'mongodb';

const uri = process.env.REACT_APP_MONGO_URI;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db('meetups');
    const meetupsCollections = db.collection('meetups');
    await meetupsCollections.insertOne(data);

    await client.close();

    res.status(201).json({ message: 'Meetup Sucessfully Created!' });
  }
};

export default handler;
