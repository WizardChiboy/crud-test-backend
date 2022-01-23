import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  timestamp: String,
});

export default mongoose.model("posts", postSchema);
