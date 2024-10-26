import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;













































// import express from 'express';
// import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller';



// const router = express.Router();


// // Get all products
// router.get("/", getProducts);

// // Create a new product
// router.post("/", createProduct);

// // Update a product by ID
// router.put("/:id", updateProduct);

// // Delete a product by ID
// app.delete("/:id", deleteProduct);


// export default router;