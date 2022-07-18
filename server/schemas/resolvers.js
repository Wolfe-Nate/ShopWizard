const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Comment } = require("../models");
const { signToken } = require("../utils/auth");

//Done: get all users, get user by ID, get all items, get item by ID, get all comments, get comment by ID
//To Do: Queries: get "me" Mutations: login, purchaseItem, addComment, addUser (Sign up)

const resolvers = {
  Query: {
    //get all items -- Tested Working, not populating comments (we don't have comments on items currently)
    items: async () => {
      return Item.find();
    },
    //get all users -- Working
    users: async () => {
      return User.find().populate("items");
    },
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
    // items: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return item.find(params).sort({ createdAt: -1 });
    // },
    // get one item by ID -- fixed Working
    item: async (parent, { _id }) => {
      return await Item.findOne({ _id }).populate("comments");
    },
    // get user by ID
    userId: async (parent, { _id }) => {
      return await User.findOne({ _id });
    },
    // get all comments
    comments: async () => {
      return await Comment.find();
    },
    //get comment by ID:
    comment: async (parent, { _id }) => {
      return await Comment.findOne({ _id });
    },
    //
    // // get all users
    // users: async () => {
    //   return (
    //     User.find()
    //       // .select("-__v -password")
    //       .populate("items")
    //   );
    // },
    // get a user by username
    // user: async (parent, { username }) => {
    //   return (
    //     User.findOne({ username })
    //       // .select("-__v -password")
    //       .populate("items")
    //   );
    // },
  },

  Mutation: {
    //add Item to database
    addItem: async (
      parent,
      { itemName, price, description, category, gameName }
    ) => {
      return await Item.create({
        itemName,
        price,
        description,
        category,
        gameName,
      });
    },
    //   addUser: async (parent, args) => {
    //     const user = await User.create(args);
    //     const token = signToken(user);

    //     return { token, user };
    //   },
    //   login: async (parent, { email, password }) => {
    //     const user = await User.findOne({ email });

    //     if (!user) {
    //       throw new AuthenticationError("Incorrect credentials");
    //     }

    //     const correctPw = await user.isCorrectPassword(password);

    //     if (!correctPw) {
    //       throw new AuthenticationError("Incorrect credentials");
    //     }

    //     const token = signToken(user);
    //     return { token, user };
    //   },

    //Add Item
    // addItem: async (parent, { itemId }) => {
    //   await User.findByIdAndUpdate(

    //   )
    // }
    // addItem: async (parent, args, context) => {
    //   if (context.user) {
    //     const coldItem = await Item.create({
    //       ...args,
    //       username: context.user.username,
    //     });

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { items: coldItem._id } },
    //       { new: true }
    //     );

    //     return coldItem;
    //   }

    //   throw new AuthenticationError("You need to be logged in");
    // },
    //   addComment: async (parent, { itemId, commentText }, context) => {
    //     if (context.user) {
    //       const updatedItem = await Item.findOneAndUpdate(
    //         { _id: itemId },
    //         {
    //           $push: {
    //             comments: { commentText, username: context.user.username },
    //           },
    //         },
    //         { new: true, runValidators: true }
    //       );

    //       return updatedItem;
    //     }

    //     throw new AuthenticationError("You need to be logged in!");
    //   },
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
