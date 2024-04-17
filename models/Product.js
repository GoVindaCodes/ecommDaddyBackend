// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: String,
//       required: false,
//     },
//     sku: {
//       type: String,
//       required: false,
//     },
//     barcode: {
//       type: String,
//       required: false,
//     },
//     title: {
//       type: Object,
//       required: true,
//     },
//     description: {
//       type: Object,
//       required: false,
//     },
//     slug: {
//       type: String,
//       required: true,
//     },
//     categories: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Category",
//         required: true,
//       },
//     ],
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//       required: true,
//     },
//     image: {
//       type: Array,
//       required: false,
//     },
//     stock: {
//       type: Number,
//       required: false,
//     },

//     sales: {
//       type: Number,
//       required: false,
//     },

//     tag: [String],
//     prices: {
//       originalPrice: {
//         type: Number,
//         required: true,
//       },
//       price: {
//         type: Number,
//         required: true,
//       },
//       discount: {
//         type: Number,
//         required: false,
//       },
//     },
//     variants: [{}],
//     isCombination: {
//       type: Boolean,
//       required: true,
//     },

//     status: {
//       type: String,
//       default: "show",
//       enum: ["show", "hide"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // module.exports = productSchema;

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;



const mongoose = require("mongoose");

const productDataSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  flashSale: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  sku: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("ProductData", productDataSchema);
