const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  gameName: {
    type: String,
    unique: true,
    required: true,
    maxLength: 30,
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
