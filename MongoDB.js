// Retrieve
import { MongoClient } from 'mongodb';



// Connect to the db
async function connect() {
    const url = "mongodb+srv://alexkong0222:alexkong0222@cluster0.qpf52os.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url);

    await client.connect(url, function (err, db) {
        if (err) { return console.log(err); }
        console.log("connected")
        var collection = db.collection('test');
        var doc1 = { 'hello': 'doc1' };
        var doc2 = { 'hello': 'doc2' };
        var multipleDocs = [{ 'hello': 'doc3' }, { 'hello': 'doc4' }];

        collection.insert(doc1);

        collection.insert(doc2, { w: 1 }, function (err, result) { });

        collection.insert(multipleDocs, { w: 1 }, function (err, result) { });

    })
}

connect()
console.log("end")