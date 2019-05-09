//Again require Mongoose
const mongoose = require('mongoose');

//Create the mongoose Schema

const bookSchema = mongoose.Schema({
    title: {
        required:true,
        type:String,
        unique:1,
        maxLength:100
    },

    author: {
        required:true,
        type:Array,
    },

    description: {
        required:true,
        type:String,
        maxLength:1000
    },

    link: {
        type: String
    },

    image: {
        type: String
    }
});

const Googlebook = mongoose.model('Googlebook', bookSchema);
module.exports = { Googlebook }