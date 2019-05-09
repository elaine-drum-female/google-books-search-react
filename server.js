//Requiring Express
const express = require('express');

//Requiring bodyParser
const bodyParser = require('body-parser');

//Setting up App to use with Express
const app = express();

//Set up PORT
const PORT = process.env.PORT || 5000;

//Setting up Mongoose
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE)

//Using the middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

//Set up path
const path = require("path");
// Send every other request to the React app
// Define any API routes before this runs



//Models
const { Googlebook } = require('./models/googlebook');


//=============================================
//           BOOKS
//=============================================

//GET BY ID

app.get('/api/product/book_by_id', (req, res) => {
    //Want to search by query
    let type = req.query.type;
    let items = req.query.id;

    //check if type is an array
    if(type === "array") {
        let ids = req.query.id.split(',');
        //Create an empty items array
        items =[];
        //Mapping over the ids and returning the ObjectID from that item into the items array ^
        items = ids.map(item => {
            return mongoose.Types.ObjectId(item)
        });
    }

    Googlebook.
    find({'_id':{$in:items}}).
    exec((err, docs) => {
        return res.status(200).send(docs);
    })
},

);

//POSTING A NEW BOOK

app.post('/api/product/googlebook', (req, res) => {
    //Creating a new book
    console.log(req.body.info)
    const googlebook = new Googlebook(req.body.info);
    // Saving this new book and passing in the objects using Doc
    googlebook.save((err, doc) => {
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success:true,
            googlebook:doc
        });
    });
});

app.get('/api/product/googlebooks', (req, res) => {
    Googlebook.find({}, (err, googlebooks) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(googlebooks);
    })
});


app.get('/hello', function (req, res) {
    res.send('Hello World')
  })

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

//Listening to server running on PORT
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})