// imports

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Posts from "./Models/post.js";

dotenv.config();

// app configs

const app = express();
const port = process.env.Port || 9911;

// middlewares

app.use(express.json());
app.use(cors());

// Db config

const mongo_url = process.env.Mongo_url;
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// db connection
const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to mongo and we are set!!");
});

// api endpoint

app.get("/", (req, res) => res.status(200).send("hello don"));

// app.post("/posts", (req, res) => res.status(200).send("posts"));

app.post("/posts", async (req, res) => {
  const post = await new Posts({
    title: req.body.title,
    excerpt: req.body.excerpt,
    content: req.body.content,
    content: req.body.timestamp,
  });

  try {
    const newPost = await post.save();
    res.status(200).send(newPost);
  } catch (err) {
    console.log(err);
  }
});

// port listen

app.listen(port, console.log(`hey am connected to port: ${port}`));