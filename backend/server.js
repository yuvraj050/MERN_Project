import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // Allows us to accept JSON data in req.body

app.use("/api/products",productRoutes);


// Start the server after connecting to the database
connectDB().then(() => {
    app.listen(5000, () => {
        console.log('Server started at http://localhost:'+ PORT);
    });
}).catch((error) => {
    console.log("Database connection failed:", error.message);
});
