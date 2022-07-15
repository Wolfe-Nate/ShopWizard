const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // referencing an image filename we have in our repo
    itemImage: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      unique: true,
      required: true,
      maxLength: 30,
    },
    gameName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    comments: [
      {
        type: String,
        ref: "Comment",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Need to create virtual for commentCount

const Item = model("Item", itemSchema);

module.exports = Item;
