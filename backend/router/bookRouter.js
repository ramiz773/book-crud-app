import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();
//  get all books
router.get("/", async (req, res) => {
   try {
      const books = await Book.find();
      res.status(200).json({ count: books.length, books: books });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
});

// get a single book
router.get("/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const book = await Book.findById(id);
      if (!book) {
         return res.status(404).json({ message: "book not found" });
      }
      res.status(200).json(book);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

// create a  book
router.post("/", async (req, res) => {
   console.log(req.body);
   const { title, author, publishYear } = req.body;
   try {
      if (!title || !author || !publishYear) {
         return res.status(400).send({
            message: "send all required fields: title author publishYear",
         });
      }
      const newBook = {
         title,
         author,
         publishYear,
      };

      const book = await Book.create(newBook);
      res.status(200).json(book);
   } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
   }
});

// update a document
router.put("/:id", async (req, res) => {
   const { title, author, publishYear } = req.body;
   console.log(req.body);
   try {
      if (!title || !author || !publishYear) {
         return res.status(400).json({
            message: "send all required fields : title author publishYear  ",
         });
      }
      const { id } = req.params;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body);
      if (!updatedBook) {
         return res.status(404).json({ message: "book not found" });
      }
      res.status(200).json({
         message: "book updated successfully",
         updatedBook,
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

// delete book
router.delete("/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const book = await Book.findByIdAndDelete(id);
      if (!book) {
         return res.status(404).json({ message: "book not found" });
      }

      res.status(200).json(book);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

export default router;
