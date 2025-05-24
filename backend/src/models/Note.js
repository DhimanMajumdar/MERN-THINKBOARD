import mongoose from "mongoose";

//1- create a schema
//2- model based off of a schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema); // create a Note model based off of noteSchema schema
export default Note;
