import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    characteristics: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    risk: {
      type: String,
      required: true,
    },

    cultivationPractices: {
      type: String,
      required: true,
    },
    regulations: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;
