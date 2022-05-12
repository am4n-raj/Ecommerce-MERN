const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const connectDB = async ()=>{
    mongoose.connect('mongodb+srv://admin:aman25@products.jwfjq.mongodb.net/Products?retryWrites=true&w=majority')
    const productSchema = new mongoose.Schema({});
    const products = mongoose.model('product', productSchema);
    // const data = await 
}


// const uri = "mongodb+srv://admin:aman25@products.jwfjq.mongodb.net/Products?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//   // perform actions on the collection object
//   client.close();
// });

app.listen(5000);