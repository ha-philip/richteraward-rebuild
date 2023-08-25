import { MongoClient } from 'mongodb';

const mongoURL = "mongodb+srv://kmat0:ha02210221%23%23@cluster0.k451fc9.mongodb.net/?retryWrites=true&w=majority";
async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const client = new MongoClient(mongoURL, {
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