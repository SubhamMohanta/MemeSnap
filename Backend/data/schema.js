const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    memeId: {type: Number, required: true},
    memeTitle: {type: String, required: true},
    user: {type: String, required:true},
    image: String,
    likes: Number,
    comments: Array,
    tags: String
})

const memeModel = new mongoose.model("meme_entities", memeSchema)
module.exports =  memeModel; //Exporting model of the schema