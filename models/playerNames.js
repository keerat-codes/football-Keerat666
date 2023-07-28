const mongoose = require('mongoose');

const playerNamesSchema = new mongoose.Schema({
playerName : { type:  String, description: "Required Field", required: true },
salary : { type:  Number, description: "Required Field", required: true },
goals : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('playerNames', playerNamesSchema);