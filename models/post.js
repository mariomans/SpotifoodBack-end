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
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    likes: [{type: ObjectId, ref: "Post"}]
});

module.exports = mongoose.model("Post", postSchema);
