const db = require("../config/connection");
const { User, Comment, Item } = require("../models");

const itemData = require("./itemData.json");
const userData = require("./userData.json");
const commentData = require("./commentData.json");

db.once("open", async () => {
  await Item.deleteMany({});
  const items = await Item.insertMany(itemData);

  await User.deleteMany({});
  const users = await User.insertMany(userData);

  await Comment.deleteMany({});
  const comments = await Comment.insertMany(commentData);

  console.log("Items, Users, & Comments seeded!");
  process.exit(0);
});
