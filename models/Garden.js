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
    type: Number, 
    required: true
  },
  fertilize: {
    type: Number, 
    required: true
  },
  prune: {
    type: Number, 
    required: true
  },
  photos: {
    type: Array, 
    require: false
  }
});

module.exports = Garden = mongoose.model('garden', GardenSchema);