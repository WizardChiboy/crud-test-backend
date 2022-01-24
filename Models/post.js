import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  timestamps: String,
});

export default mongoose.model("posts", postSchema);
