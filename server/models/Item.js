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
    image: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      maxLength: 280,
    },
    category: {
      type: String,
      // unique: true,
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
itemSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Item = model("Item", itemSchema);

module.exports = Item;
