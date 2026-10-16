const {MongoClient} = require('mongodb');

const url = "mongodb://nishankamath_db_user:nishan@ac-4qgewmy-shard-00-00.dwcfbza.mongodb.net:27017,ac-4qgewmy-shard-00-01.dwcfbza.mongodb.net:27017,ac-4qgewmy-shard-00-02.dwcfbza.mongodb.net:27017/?ssl=true&replicaSet=atlas-13epum-shard-0&authSource=admin";

async function main() {
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected to mongodb');

    const db = client.db("college");
    console.log("connected to the college database");

    const students = db.collection("students");

    /*await students.insertOne(
        {
            fullname : "Alex",
            usn : "svm101",
            branch : "AIML",
            cgpa : 8.91
        }
    );

    console.log("inserted successfully");

    students.insertMany([
        {
            fullname : "Bob",
            usn : "svm102",
            branch : "AIML",
            cgpa : 9.21
        },
        {
            fullname : "Charlie",
            usn : "svm103",
            branch : "AIML",
            cgpa : 8.68
        },
        {
            fullname : "Dyanesh",
            usn : "svm104",
            branch : "AIML",
            cgpa : 8.79
        }
    ]);*/

    await students.updateOne(
        {usn : "svm101"},
        {
            $set: {
                cgpa: 9.12
            }
        }
    );

    await students.deleteOne({usn:"svm104"});

    const rows = await students.find().toArray();
    //const row = await students.findOne({usn:"svm101"});
    console.log(rows);

    await client.close();

}
main();