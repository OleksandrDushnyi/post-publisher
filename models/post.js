const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PostSchema = new Schema({
    
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post