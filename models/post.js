const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    body: {
        type: String,
        required: true,
    },
    bodys: {
        type: String,
        required: true,
    },
    type: {
        type: String
    },
    tag1: {
        type: String
    },
    tag2: {
        type: String
    },
    tag3: {
        type: String
    },
    tag4: {
        type: String
    },
    tag5: {
        type: String
    },
    tag6: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    advertisement: {
        data: Buffer,
        contentType: String
    },
    postedBy: {
        type: ObjectId,
        ref: "User"

    },
    postedByper: {
        type: ObjectId,
        ref: "User"

    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    likes: [{type: ObjectId, ref: "Post"}]
});

module.exports = mongoose.model("Post", postSchema);
