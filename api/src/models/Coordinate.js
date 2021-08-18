import mongoose from 'mongoose';

const coordinateSchema = new mongoose.Schema({
  name: String,
  position: Array,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Coordinate', coordinateSchema);