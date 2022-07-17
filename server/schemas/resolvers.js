const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

// Query: get all users, get user by Id, get user by admin status, get user by username?,
//get all items, get item by id, get items by category, get items by gameName,
// get all comments, get comment by id
// add item to user (purchase)
//

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id })
    //       .select("-__v -password")
    //       .populate("items");

    //     return userData;
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    // get all items
    items: async (parent, { username }) => {
      const params = username ? { username } : {};
      return item.find(params).sort({ createdAt: -1 });
    },
    // get one item by ID
    item: async (parent, { _id }) => {
      return item.findOne({ _id });
    },
    // get all users
    users: async () => {
      return (
        User.find()
          // .select("-__v -password")
          .populate("items")
      );
    },
    // get a user by username
    user: async (parent, { username }) => {
      return (
        User.findOne({ username })
          // .select("-__v -password")
          .populate("items")
      );
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const coldItem = await Item.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { items: coldItem._id } },
          { new: true }
        );

        return coldItem;
      }

      throw new AuthenticationError("You need to be logged in");
    },
    addComment: async (parent, { itemId, commentText }, context) => {
      if (context.user) {
        const updatedItem = await Item.findOneAndUpdate(
          { _id: itemId },
          {
            $push: {
              comments: { commentText, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedItem;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // purchaseItem: async (parent, { profileId, item }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { items: item },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
  },
};

// // exports
module.exports = resolvers;
