import { MongoClient } from 'mongodb';
const { VITE_MONGODB_URL } = import.meta.env;
const mykey = { 'db_key': VITE_MONGODB_URL }

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const client = new MongoClient(mykey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("todoapp");
    const postsCollection = db.collection('post');
    await postsCollection.insertOne( { 할일: req.body.title, 날짜: req.body.date });
    res.status(301).redirect('/notice');
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.' });
  } finally {
    client.close();
  }
}

export default handler;