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
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    gameName: [
      {
        type: Schema.Type.ObjectId,
        ref: "Games",
      },
    ],
    comments: [
      {
        type: Schema.Type.ObjectId,
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

const Item = model("Item", itemSchema);

module.exports = Item;
