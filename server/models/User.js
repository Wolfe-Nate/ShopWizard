const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    coins: {
      type: Number,
      // required: true,
      default: 2000,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Hash user's password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//Validate password function
userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// commentCount virtual will return total comments made by this user
userSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

// itemCount virtual will return total comments made by this user
userSchema.virtual("itemsCount").get(function () {
  return this.items.length;
});

const User = model("User", userSchema);

module.exports = User;
