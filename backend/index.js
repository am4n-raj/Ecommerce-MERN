const express = require('express');
const cors = require("cors");
const app = express();
require('./db/config')
const User = require('./db/Users')

// const uri = "mongodb+srv://admin:aman25@products.jwfjq.mongodb.net/Products?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//   // perform actions on the collection object
//   client.close();
// });

app.use(express.json);
app.use(cors());
app.post("/register", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})

app.listen(5000);