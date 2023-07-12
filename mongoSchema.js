import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

const Blog = mongoose.model("Blog", { title: String, content: String });

export { Blog };
