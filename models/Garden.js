const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GardenSchema = new Schema({
  plant_name: {
    type: String,
    required: true
  },
  date_planted: {
    type: Date, 
    default: Date.now
  },
  water: {
    type: Array, 
    required: true
  },
  fertilize: {
    type: Array, 
    required: true
  },
  prune: {
    type: Array, 
    required: true
  },
  photo: {
    type: String, 
    require: true
  }
});

module.exports = Garden = mongoose.model('garden', GardenSchema);