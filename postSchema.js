import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

const newPost = new Post({
    title: "Day2",
    content: "The Quick brown Fox jump over the lazy dog"
});


export { Post, newPost }