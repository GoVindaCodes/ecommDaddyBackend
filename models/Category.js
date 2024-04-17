// const mongoose = require('mongoose');
// const { Children } = require('react');

// const categorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: Array,
//       required: true,
//     },
//     description: {
//       type: Object,
//       required: false,
//     },
//     slug: {
//       type: String,
//       required: false,
//     },
//     parentId: {
//       type: String,
//       required: false,
//     },
//     parentName: {
//       type: String,
//       required: false,
//     },
//     id: {
//       type: String,
//       required: false,
//     },
//     icon: {
//       type: String,
//       required: false,
//     },
//     status: {
//       type: String,
//       lowercase: true,
//       enum: ['show', 'hide'],
//       default: 'show',
//     },
//     // Children: {
//     //   type: String,
//     //   required: true,
//     // }
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = categorySchema;

// const Category = mongoose.model('Category', categorySchema);
// module.exports = Category;



// just testing according to utilss of frontend


const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  children: {
    type: [String],
    required: false, // Change to false if children are not always present
  },
  parent: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Show",
    enum: ["Show", "Hide"], // Assuming status can be "Show" or "Hide"
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
