import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			description: "Name of the product",
		},
		brand: {
			type: String,
			required: true,
			description: "Brand of the product",
		},
		category: {
			type: String,
			required: true,
			description: "Category the product belongs to",
		},
		description: {
			type: String,
			required: true,
			description: "Detailed description of the product",
		},
		price: {
			type: Number,
			required: true,
			min: 0,
			description: "Price of the product",
		},
		quantity: {
			type: Number,
			required: true,
			min: 0,
			description: "Number of units of the product currently in stock",
		},
		inStock: {
			type: Boolean,
			required: true,
			description: "Indicates if the product is currently in stock",
		},
		imageUrl: {
			type: String,
			required: true,
			description: "URL of the product image",
		},
		rating: {
			type: Number,
			min: 0,
			max: 5,
			default: 0,
			description: "Average customer rating of the product",
		},
		reviewsCount: {
			type: Number,
			min: 0,
			default: 0,
			description: "Total number of reviews for the product",
		},
		releaseDate: {
			type: Date,
			required: true,
			description: "Date the product was released",
		},
		specs: {
			type: new mongoose.Schema(
				{
					keys: {
						type: String,
						description: "Number and type of keys",
					},
					connectivity: {
						type: String,
						description: "Type of connectivity",
					},
					features: {
						type: String,
						description: "Key features of the product",
					},
					compatibility: {
						type: String,
						description: "Operating system compatibility",
					},
				}
				// { _id: false }
			), // _id: false prevents Mongoose from adding an _id to the subdocument
			description: "Technical specifications of the product",
		},
		tags: {
			type: [String], // Array of strings
			default: [],
			description: "List of keywords or tags associated with the product",
		},
	},
	{
		timestamps: true, // Adds createdAt and updatedAt timestamps automatically
	}
);

// Create a Mongoose model from the schema
const Product = mongoose.model("Product", productSchema);

export default Product;
