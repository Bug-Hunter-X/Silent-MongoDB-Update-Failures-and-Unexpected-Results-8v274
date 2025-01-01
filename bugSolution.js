```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; //Replace with your MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    //Correct update with upsert option
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } }, { upsert: true });
    console.log(result);

    //Correct update with $inc for a numeric field
    const result2 = await collection.updateOne({ name: 'Jane Doe'}, {$inc: {age: 1}});
    console.log(result2);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```