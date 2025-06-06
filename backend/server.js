import express from "express";
import dotenv from "dotenv";
import Product from "./model/product.model.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api/products", (request, response) => {
	response.json({ name: "Yomi" });
});

app.post("/api/products", async (request, response) => {
	const product = request.body;

	// Here you would typically save the product to the database
	if (
		!product.name ||
		!product.brand ||
		!product.price ||
		!product.description ||
		!product.imageUrl ||
		!product.category ||
		!product.inStock ||
		!product.rating ||
		!product.reviewsCount ||
		!product.releaseDate ||
		!product.specs ||
		!product.tags ||
		!product.quantity
	)
		return response
			.status(404)
			.json({ sucess: false, message: "All fieds except spec are required" });

	const newProduct = new Product(product);
	try {
		await newProduct.save();
		response.status(201).json({
			success: true,
			message: "Product created successfully",
			product: newProduct,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			message: "Server error",
			error: error.message,
		});
	}
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on http://localhost:${PORT}`);
});
